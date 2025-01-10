export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const res = await fetch('http://45.76.10.9:3000', {
      cache: 'no-store'
    });

    const html = await res.text();
    
    // Extract the CSS link from the HTML
    const cssLink = html.match(/<link rel="stylesheet" href="(\/css\/styles\.css)">/)?.[1];
    const cssRes = await fetch(`http://45.76.10.9:3000${cssLink}`);
    const css = await cssRes.text();
    
    // Add mobile-responsive CSS
    const mobileCSS = `
      @media (max-width: 768px) {
        .container {
          padding: 1rem;
        }
        
        h1 {
          font-size: 2rem;
        }
        
        .meter {
          width: 250px;
          height: 125px;
          position: relative;
          transform-origin: bottom center;
        }
        
        .meter-arc {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
        }
        
        .meter-color-left,
        .meter-color-right {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
        }
        
        .meter-pointer {
          transform-origin: bottom center;
          position: absolute;
          bottom: 0;
        }
        
        .components {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .component {
          width: 100%;
          margin: 0;
        }
        
        .bar-container {
          margin: 0.5rem 0;
        }
      }
    `;
    
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: css + mobileCSS }} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  } catch (error) {
    return (
      <div>
        <h1>OVER/BACK Index</h1>
        <p>Error loading index data. Please try again later.</p>
      </div>
    );
  }
} 