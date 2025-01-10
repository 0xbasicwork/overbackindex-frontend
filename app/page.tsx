export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const res = await fetch('http://45.76.10.9:3000', {
      cache: 'no-store'
    });

    const html = await res.text();
    
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
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