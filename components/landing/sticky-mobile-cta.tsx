'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

/**
 * Barra de CTA fixa no rodapé (só mobile). Fica escondida enquanto o botão
 * principal do topo está visível, para não aparecer duplicada.
 */
export function StickyMobileCta({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="cta-primary inline-flex w-full items-center justify-center gap-2.5 h-12 rounded-full"
      >
        <WhatsAppIcon className="w-5 h-5" />
        {label}
      </a>
    </div>
  );
}
