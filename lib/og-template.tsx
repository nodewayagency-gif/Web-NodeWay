import { ImageResponse } from 'next/og';
import { siteConfig } from './site-config';

/**
 * Gerador de imagens Open Graph (1200×630) usado por todas as rotas.
 * As cores vêm de siteConfig.brand.colors, então mudam junto com a marca.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface OgImageProps {
  /** Rótulo pequeno ao lado do logo (ex.: "Blog", "Caso de Sucesso"). */
  eyebrow?: string;
  /** Título grande principal. */
  title: string;
  /** Linha de apoio abaixo do título. */
  subtitle?: string;
  /** Badge acima do título (ex.: categoria). */
  badge?: string;
}

export function renderOgImage({ eyebrow, title, subtitle, badge }: OgImageProps) {
  const c = siteConfig.brand.colors;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: c.background,
          padding: '80px',
          justifyContent: 'space-between',
          color: c.foreground,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow decorativo */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            backgroundColor: `${c.cyan}26`,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        {/* Cabeçalho com logo textual */}
        <div style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
          <div
            style={{
              color: c.cyan,
              fontSize: 34,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {siteConfig.shortName}
          </div>
          {siteConfig.brandSuffix ? (
            <div style={{ color: c.muted, fontSize: 34, marginLeft: 12, letterSpacing: '2px' }}>
              {siteConfig.brandSuffix}
            </div>
          ) : null}
          {eyebrow ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: c.cyan,
                  margin: '0 24px',
                }}
              />
              <div style={{ color: c.muted, fontSize: 32 }}>{eyebrow}</div>
            </div>
          ) : null}
        </div>

        {/* Bloco de conteúdo */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          {badge ? (
            <div style={{ display: 'flex', marginBottom: 24 }}>
              <div
                style={{
                  backgroundColor: `${c.cyan}1A`,
                  border: `1px solid ${c.cyan}4D`,
                  color: c.cyan,
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: 20,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontWeight: 600,
                }}
              >
                {badge}
              </div>
            </div>
          ) : null}
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.1,
              width: '88%',
              marginBottom: subtitle ? 24 : 0,
            }}
          >
            {title}
          </div>
          {subtitle ? <div style={{ fontSize: 30, color: c.muted }}>{subtitle}</div> : null}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
