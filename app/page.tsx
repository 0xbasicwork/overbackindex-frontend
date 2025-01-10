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
    
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: css }} />
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