import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/data';

export const runtime = 'edge';

export const alt = 'Artigo do Blog da Nodeway Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div style={{ display: 'flex', background: '#081023', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: 32 }}>Nodeway Agency</span>
        </div>
      )
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#050a15',
          padding: '80px',
          justifyContent: 'space-between',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(14, 165, 233, 0.15)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }} />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ color: '#0EA5E9', fontSize: 32, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Nodeway
          </div>
          <div style={{ color: '#94A3B8', fontSize: 32, marginLeft: 12, letterSpacing: '2px' }}>
            AGENCY
          </div>
          <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0EA5E9', margin: '0 24px' }}></div>
          <div style={{ color: '#94A3B8', fontSize: 32 }}>Blog</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          <div style={{ 
            color: '#0EA5E9', 
            fontSize: 24, 
            marginBottom: 24, 
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: '600'
          }}>
            {post.category}
          </div>
          <div style={{ 
            fontSize: 64, 
            fontWeight: '900', 
            lineHeight: 1.1, 
            marginBottom: 32,
            width: '85%'
          }}>
            {post.title}
          </div>
          <div style={{ fontSize: 28, color: '#94A3B8', display: 'flex', alignItems: 'center' }}>
            Tempo de leitura: {post.readTime}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
