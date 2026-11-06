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

interface CaseOgProps {
  client: string;
  category: string;
  /** Print em data URL (JPG/PNG — o gerador não aceita WebP). */
  screenshot: string;
}

/** Imagem de compartilhamento dos cases: texto à esquerda, print do projeto à direita. */
export function renderCaseOgImage({ client, category, screenshot }: CaseOgProps) {
  const c = siteConfig.brand.colors;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: c.background,
          color: c.foreground,
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '600px',
            height: '600px',
            backgroundColor: `${c.cyan}26`,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '470px',
            padding: '64px 0 64px 64px',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: c.cyan, fontSize: 28, fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {siteConfig.shortName}
            </div>
            {siteConfig.brandSuffix ? (
              <div style={{ color: c.muted, fontSize: 28, marginLeft: 10, letterSpacing: '2px' }}>
                {siteConfig.brandSuffix}
              </div>
            ) : null}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: c.muted, fontSize: 24, marginBottom: 14 }}>Caso de Sucesso</div>
            <div style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.08, marginBottom: 24 }}>{client}</div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  backgroundColor: `${c.cyan}1A`,
                  border: `1px solid ${c.cyan}4D`,
                  color: c.cyan,
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: 18,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontWeight: 600,
                }}
              >
                {category}
              </div>
            </div>
          </div>

          <div style={{ color: c.muted, fontSize: 20 }}>{siteConfig.url.replace(/^https?:\/\//, '')}</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            left: '520px',
            top: '70px',
            width: '760px',
            borderRadius: '18px',
            border: `1px solid ${c.muted}55`,
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', height: 34, padding: '0 14px', backgroundColor: '#111c2e' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffffff40', marginRight: 7 }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffffff40', marginRight: 7 }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffffff40' }} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={screenshot} width={760} style={{ width: '760px' }} />
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
