'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
};

type TurnstileWindow = Window & {
  turnstile?: TurnstileApi;
  dataLayer?: Record<string, unknown>[];
};

type Status = 'idle' | 'sending' | 'success' | 'error';

function maskPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const fieldClass =
  'w-full rounded-xl border border-border/80 bg-background/60 px-4 h-11 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20';

export function LeadForm({ className }: { className?: string }) {
  const pathname = usePathname();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [token, setToken] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const renderWidget = useCallback(() => {
    const w = window as TurnstileWindow;
    if (!SITE_KEY || !w.turnstile || !widgetRef.current || widgetId.current) return;
    widgetId.current = w.turnstile.render(widgetRef.current, {
      sitekey: SITE_KEY,
      theme: 'dark', // site é sempre escuro; 'auto' seguiria o tema do sistema do visitante
      size: 'flexible',
      language: 'pt-br',
      callback: (t: string) => setToken(t),
      'expired-callback': () => setToken(''),
      'error-callback': () => setToken(''),
    });
  }, []);

  useEffect(() => {
    // Script já carregado por outra montagem (navegação client-side).
    if ((window as TurnstileWindow).turnstile) setScriptReady(true);
  }, []);

  useEffect(() => {
    if (scriptReady && status !== 'success') renderWidget();
  }, [scriptReady, status, renderWidget]);

  useEffect(() => {
    return () => {
      const w = window as TurnstileWindow;
      if (widgetId.current && w.turnstile) w.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  function resetCaptcha() {
    const w = window as TurnstileWindow;
    if (widgetId.current && w.turnstile) w.turnstile.reset(widgetId.current);
    setToken('');
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setError('');

    if (!token) {
      setError('Confirme que você não é um robô.');
      return;
    }

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone,
      company: String(form.get('company') || ''),
      message: String(form.get('message') || ''),
      website: String(form.get('website') || ''),
      page: pathname || '/',
      turnstileToken: token,
    };

    setStatus('sending');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || 'Não foi possível enviar agora.');

      const w = window as TurnstileWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'lead_form_submit', lead_form_page: payload.page });

      widgetId.current = null;
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Não foi possível enviar agora.');
      resetCaptcha();
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn(
          'rounded-2xl sm:rounded-3xl border border-border/80 bg-background/60 p-6 sm:p-8 text-center',
          className,
        )}
      >
        <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-3" />
        <p className="text-base sm:text-lg font-semibold text-foreground mb-1">Recebemos seu contato!</p>
        <p className="text-sm text-muted-foreground">
          Nosso time responde em até 24h úteis pelo WhatsApp ou e-mail.
        </p>
      </div>
    );
  }

  return (
    <>
      {SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setScriptReady(true)}
        />
      )}

      <form
        onSubmit={onSubmit}
        className={cn(
          'rounded-2xl sm:rounded-3xl border border-border/80 bg-background/60 p-5 sm:p-7 space-y-3',
          className,
        )}
      >
        <div>
          <p className="text-sm sm:text-base font-semibold text-foreground">Prefere que a gente te chame?</p>
          <p className="text-xs text-muted-foreground">Deixe seus dados e retornamos em até 24h úteis.</p>
        </div>

        <input name="name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Seu nome" aria-label="Seu nome" className={fieldClass} />

        <div className="grid sm:grid-cols-2 gap-3">
          <input name="email" type="email" required maxLength={160} autoComplete="email" placeholder="E-mail" aria-label="E-mail" className={fieldClass} />
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="WhatsApp"
            aria-label="WhatsApp"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            pattern="\(\d{2}\) \d{4,5}-\d{4}"
            title="(11) 99999-9999"
            className={fieldClass}
          />
        </div>

        <input name="company" maxLength={120} autoComplete="organization" placeholder="Empresa (opcional)" aria-label="Empresa" className={fieldClass} />

        <textarea
          name="message"
          rows={3}
          maxLength={2000}
          placeholder="O que você precisa? (opcional)"
          aria-label="Mensagem"
          className={cn(fieldClass, 'h-auto py-3 resize-none')}
        />

        {/* Honeypot anti-bot: escondido de humanos e leitores de tela */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label>
            Site
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {SITE_KEY ? (
          <div ref={widgetRef} className="min-h-[65px]" />
        ) : (
          <p className="text-xs text-destructive">Captcha não configurado (NEXT_PUBLIC_TURNSTILE_SITE_KEY).</p>
        )}

        {error && (
          <p role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="cta-primary group inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-sm font-semibold w-full disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Quero ser contatado
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className="text-[11px] text-muted-foreground text-center">
          Seus dados ficam só com a gente. Veja a{' '}
          <a href="/privacidade" className="underline hover:text-foreground">
            política de privacidade
          </a>
          .
        </p>
      </form>
    </>
  );
}
