import { ImageResponse } from 'next/og';
import { cases } from '@/lib/data';

export const runtime = 'edge';

export const alt = 'Caso de Sucesso da Nodeway Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const caseData = cases.find((c) => c.slug === resolvedParams.slug);

  if (!caseData) {
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
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(14, 165, 233, 0.15)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
          <div style={{ color: '#0EA5E9', fontSize: 32, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Nodeway
          </div>
          <div style={{ color: '#94A3B8', fontSize: 32, marginLeft: 12, letterSpacing: '2px' }}>
            AGENCY
          </div>
          <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0EA5E9', margin: '0 24px' }}></div>
          <div style={{ color: '#94A3B8', fontSize: 32 }}>Caso de Sucesso</div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
             <div style={{ 
               backgroundColor: 'rgba(14, 165, 233, 0.1)',
               border: '1px solid rgba(14, 165, 233, 0.3)',
               color: '#0EA5E9', 
               padding: '8px 16px',
               borderRadius: '100px',
               fontSize: 20, 
               textTransform: 'uppercase',
               letterSpacing: '2px',
               fontWeight: '600'
             }}>
               {caseData.category}
             </div>
          </div>
          
          <div style={{ 
            fontSize: 64, 
            fontWeight: '900', 
            lineHeight: 1.1, 
            marginBottom: 24,
            width: '90%'
          }}>
            {caseData.title}
          </div>
          <div style={{ fontSize: 32, color: '#94A3B8', fontWeight: 'bold' }}>
            Cliente: <span style={{ color: 'white' }}>{caseData.client}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
