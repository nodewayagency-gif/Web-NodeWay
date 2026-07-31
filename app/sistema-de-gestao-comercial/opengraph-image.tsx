import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Sistema de Gestão Comercial e CRM | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Produto',
    title: 'Sistema de Gestão Comercial e CRM',
    subtitle: 'Orçamentos, pedidos, estoque, financeiro e comissões, integrado ao seu ERP',
  });
}
