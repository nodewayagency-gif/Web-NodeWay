import React from 'react';
import Link from 'next/link';

/**
 * Renderizador leve de conteúdo (blog e páginas). Suporta uma marcação simples:
 *   ## Título      → h2
 *   ### Subtítulo  → h3
 *   - item         → lista
 *   **negrito**    → <strong>
 *   [texto](/url)  → link interno (Next Link) ou externo (<a>)
 */

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  let match: RegExpExecArray | null;
  INLINE.lastIndex = 0;

  while ((match = INLINE.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="text-foreground font-semibold">
          {match[1]}
        </strong>,
      );
    } else if (match[2] !== undefined) {
      const label = match[2];
      const href = match[3];
      const cls = 'text-primary underline underline-offset-2 hover:opacity-80 transition-opacity';
      if (href.startsWith('/')) {
        nodes.push(
          <Link key={`${keyPrefix}-l-${i}`} href={href} className={cls}>
            {label}
          </Link>,
        );
      } else {
        nodes.push(
          <a
            key={`${keyPrefix}-l-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
          >
            {label}
          </a>,
        );
      }
    }

    last = match.index + match[0].length;
    i++;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderContentBlocks(content: string) {
  const blocks = content.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl font-display text-foreground mt-10 mb-4">
          {renderInline(block.slice(4), `h3-${index}`)}
        </h3>
      );
    }
    if (block.startsWith('## ')) {
      return (
        <h2 key={index} className="text-3xl font-display text-foreground mt-12 mb-5">
          {renderInline(block.slice(3), `h2-${index}`)}
        </h2>
      );
    }
    if (block.startsWith('- ')) {
      const items = block
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.startsWith('- '));
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
          {items.map((item, i) => (
            <li key={i}>{renderInline(item.slice(2), `li-${index}-${i}`)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed">
        {renderInline(block, `p-${index}`)}
      </p>
    );
  });
}
