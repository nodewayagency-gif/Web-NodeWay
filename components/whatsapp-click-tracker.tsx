'use client';

import { useEffect } from 'react';

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Mede todo clique em link do WhatsApp (wa.me / api.whatsapp.com) do site.
 *
 * 1. Sempre envia o evento `whatsapp_click` para o dataLayer (GTM).
 *    No GTM: Acionador "Evento personalizado" = whatsapp_click → Tag de
 *    conversão do Google Ads.
 * 2. Se NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION estiver definido
 *    (formato "AW-XXXXXXXXX/rotulo"), também dispara a conversão direto pelo gtag.
 *    Use só UM dos dois caminhos para não contar a conversão em dobro.
 */
const WA_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION;

export function WhatsAppClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href*="wa.me"], a[href*="api.whatsapp.com"]') as
        | HTMLAnchorElement
        | null;
      if (!link) return;

      const w = window as DataLayerWindow;
      const label = (link.innerText || link.getAttribute('aria-label') || '').trim().slice(0, 80);

      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'whatsapp_click',
        whatsapp_link_text: label,
        whatsapp_page_path: window.location.pathname,
      });

      if (WA_CONVERSION && typeof w.gtag === 'function') {
        w.gtag('event', 'conversion', { send_to: WA_CONVERSION });
      }
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
