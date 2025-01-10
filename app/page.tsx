async function getData() {
  try {
    const res = await fetch('/api/index', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default async function Home() {
  const data = await getData();
  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header>
        <h1>OVER/BACK Index</h1>
        <div className="update-time">
          Last updated: {data.lastUpdated}
        </div>
      </header>

      <main>
        <div className="score-container">
          <div className="meter">
            <div className="meter-arc"></div>
            <div className="meter-color-left"></div>
            <div className="meter-color-right"></div>
            <div className="meter-ticks">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="meter-tick"></div>
              ))}
            </div>
            <div className="meter-pointer" style={{"--score": data.score} as any}></div>
            <div className="meter-center"></div>
          </div>
          <div className="score">{data.score}</div>
          <div className="label">{data.label}</div>
        </div>

        <div className="components">
          <div className="component">
            <div className="component-header">
              <span>Market Data</span>
            </div>
            <div className="bar-container">
              <div className="bar">
                <div className="fill" style={{width: `${data.marketData}%`}}></div>
              </div>
              <span className="value">{data.marketData}%</span>
            </div>
          </div>

          <div className="component">
            <div className="component-header">
              <span>Social Sentiment</span>
            </div>
            <div className="bar-container">
              <div className="bar">
                <div className="fill" style={{width: "35%"}}></div>
              </div>
              <span className="value">35%</span>
            </div>
          </div>

          <div className="component">
            <div className="component-header">
              <span>On-chain Activity</span>
            </div>
            <div className="bar-container">
              <div className="bar">
                <div className="fill" style={{width: "43%"}}></div>
              </div>
              <span className="value">43%</span>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>Data updates daily at 12:00 UTC</p>
      </footer>
    </div>
  );
} 