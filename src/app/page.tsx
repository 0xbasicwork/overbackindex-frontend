'use client';

import { useEffect, useState } from 'react';
import Meter from '@/components/Meter';
import ScoreDisplay from '@/components/ScoreDisplay';
import ComponentBars from '@/components/ComponentBars';

interface IndexData {
  score: number;
  label: string;
  components: {
    market: number;
    sentiment: number;
    onChain: number;
  };
  lastUpdated: string;
}

export default function Home() {
  const [data, setData] = useState<IndexData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/overbackindex/api/latest');
        if (!response.ok) throw new Error('Failed to fetch data');
        const indexData = await response.json();
        setData(indexData);
      } catch (err) {
        setError('Failed to load index data');
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!data) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">OVER/BACK Index</h1>
          <div className="text-gray-400 text-sm">
            Last updated: {new Date(data.lastUpdated).toLocaleString('en-GB', {
              timeZone: 'UTC',
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })} UTC
          </div>
        </header>

        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <Meter score={data.score} />
          <ScoreDisplay score={data.score} label={data.label} />
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <ComponentBars components={data.components} />
        </div>

        <footer className="text-center mt-8 text-gray-400">
          <p>Data updates daily at 12:00 UTC</p>
        </footer>
      </div>
    </main>
  );
} 