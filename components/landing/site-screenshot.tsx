import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  /** Domínio exibido na barra do "navegador" (ex.: jpbjoias.com.br). */
  url?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  /** Recorta em 16:10 a partir do canto superior esquerdo (para cards de mesma altura). */
  cover?: boolean;
};

/** Print de um site de cliente dentro de uma moldura de navegador. */
export function SiteScreenshot({
  src,
  alt,
  url,
  className = '',
  sizes,
  priority,
  width = 1200,
  height = 750,
  cover,
}: Props) {
  const domain = url?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  return (
    <div
      className={`overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-card shadow-xl ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/60 bg-background/70">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        {domain ? (
          <span className="ml-2 flex-1 truncate rounded-md bg-card/80 px-2 py-0.5 text-[10px] sm:text-[11px] text-muted-foreground">
            {domain}
          </span>
        ) : (
          <span className="ml-2 text-[10px] sm:text-[11px] text-muted-foreground">Sistema interno</span>
        )}
      </div>
      {cover ? (
        <div className="relative aspect-[16/10]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes ?? '(min-width: 1024px) 600px, 100vw'}
            priority={priority}
            className="object-cover object-left-top"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes ?? '(min-width: 1024px) 600px, 100vw'}
          priority={priority}
          className="w-full h-auto block"
        />
      )}
    </div>
  );
}
