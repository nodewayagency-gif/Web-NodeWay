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

type Block =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] };

/**
 * Agrupa o conteúdo em blocos linha a linha. Um título (`##`/`###`) é sempre um
 * bloco próprio, mesmo quando escrito colado ao parágrafo seguinte (sem linha em
 * branco) — evitando que o parágrafo seja "engolido" pelo heading. Linhas de
 * lista (`- `) consecutivas viram uma <ul>; demais linhas seguidas viram um <p>.
 */
function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] | null = null;

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: 'p', text: para.join(' ') });
      para = [];
    }
  };
  const flushList = () => {
    if (list && list.length) blocks.push({ type: 'ul', items: list });
    list = null;
  };
  const flushAll = () => {
    flushPara();
    flushList();
  };

  for (const raw of content.split('\n')) {
    const line = raw.trim();
    if (!line) {
      flushAll();
      continue;
    }
    if (line.startsWith('### ')) {
      flushAll();
      blocks.push({ type: 'h3', text: line.slice(4) });
    } else if (line.startsWith('## ')) {
      flushAll();
      blocks.push({ type: 'h2', text: line.slice(3) });
    } else if (line.startsWith('- ')) {
      flushPara();
      list = list ?? [];
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushAll();
  return blocks;
}

export function renderContentBlocks(content: string) {
  return parseBlocks(content).map((block, index) => {
    if (block.type === 'h3') {
      return (
        <h3 key={index} className="text-2xl font-display text-foreground mt-10 mb-4">
          {renderInline(block.text, `h3-${index}`)}
        </h3>
      );
    }
    if (block.type === 'h2') {
      return (
        <h2 key={index} className="text-3xl font-display text-foreground mt-12 mb-5">
          {renderInline(block.text, `h2-${index}`)}
        </h2>
      );
    }
    if (block.type === 'ul') {
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item, `li-${index}-${i}`)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed">
        {renderInline(block.text, `p-${index}`)}
      </p>
    );
  });
}
