import { NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Recebe o formulário de contato do site, valida o Cloudflare Turnstile e
 * cria o lead na plataforma Nodeway. O token da plataforma fica só no servidor.
 *
 * Variáveis de ambiente (servidor):
 *   TURNSTILE_SECRET_KEY   – chave secreta do widget Turnstile
 *   NODEWAY_LEADS_API_URL  – padrão: https://app.nodewayagency.com.br/api/public/leads
 *   NODEWAY_LEADS_TOKEN    – token "nwl_..." da plataforma
 */

export const runtime = 'nodejs';

const LEADS_API_URL =
  process.env.NODEWAY_LEADS_API_URL || 'https://app.nodewayagency.com.br/api/public/leads';

const leadSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome').max(120),
  email: z.string().trim().email('E-mail inválido').max(160),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v.replace(/\D/g, '').length >= 10, 'Telefone inválido'),
  company: z.string().trim().max(120).optional().default(''),
  message: z.string().trim().max(2000).optional().default(''),
  page: z.string().trim().max(300).optional().default('/'),
  // Honeypot: humanos não preenchem este campo (fica escondido).
  website: z.string().optional().default(''),
  turnstileToken: z.string().min(1, 'Confirme que você não é um robô'),
});

async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('[leads] TURNSTILE_SECRET_KEY não configurada');
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      cache: 'no-store',
    });
    const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (!data.success) console.warn('[leads] Turnstile recusado', data['error-codes']);
    return data.success === true;
  } catch (err) {
    console.error('[leads] Falha ao validar Turnstile', err);
    return false;
  }
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? 'Dados inválidos.';
    return NextResponse.json({ error: first }, { status: 400 });
  }

  const { website, turnstileToken, ...lead } = parsed.data;

  // Bot preencheu o honeypot: finge sucesso e não cria nada.
  if (website) return NextResponse.json({ ok: true });

  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    null;

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return NextResponse.json(
      { error: 'Não conseguimos validar o captcha. Tente novamente.' },
      { status: 400 },
    );
  }

  const token = process.env.NODEWAY_LEADS_TOKEN;
  if (!token) {
    console.error('[leads] NODEWAY_LEADS_TOKEN não configurado');
    return NextResponse.json({ error: 'Envio indisponível no momento.' }, { status: 500 });
  }

  try {
    const res = await fetch(LEADS_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
      cache: 'no-store',
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('[leads] Plataforma respondeu', res.status, text.slice(0, 500));
      return NextResponse.json(
        { error: 'Não foi possível enviar agora. Tente novamente ou fale no WhatsApp.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('[leads] Falha ao contatar a plataforma', err);
    return NextResponse.json(
      { error: 'Não foi possível enviar agora. Tente novamente ou fale no WhatsApp.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
