async function getData() {
  try {
    const res = await fetch('http://45.76.10.9:3000/', {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'text/plain',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const text = await res.text();
    return text;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Home() {
  const data = await getData();
  
  if (!data) {
    return (
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">OVER/BACK Index</h1>
        <p>Error loading index data. Please try again later.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">OVER/BACK Index</h1>
      <div className="whitespace-pre-wrap">{data}</div>
    </main>
  );
} 