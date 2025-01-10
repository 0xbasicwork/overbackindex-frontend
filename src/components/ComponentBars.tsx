import React from 'react';

interface ComponentBarsProps {
  components: {
    market: number;
    sentiment: number;
    onChain: number;
  };
}

export default function ComponentBars({ components }: ComponentBarsProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2">Market Data</div>
        <div className="flex items-center gap-4">
          <div className="flex-grow h-5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-1000"
              style={{ width: `${components.market}%` }}
            />
          </div>
          <div className="w-12 text-right">{Math.round(components.market)}%</div>
        </div>
      </div>

      <div>
        <div className="mb-2">Social Sentiment</div>
        <div className="flex items-center gap-4">
          <div className="flex-grow h-5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-1000"
              style={{ width: `${components.sentiment}%` }}
            />
          </div>
          <div className="w-12 text-right">{Math.round(components.sentiment)}%</div>
        </div>
      </div>

      <div>
        <div className="mb-2">On-chain Activity</div>
        <div className="flex items-center gap-4">
          <div className="flex-grow h-5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-1000"
              style={{ width: `${components.onChain}%` }}
            />
          </div>
          <div className="w-12 text-right">{Math.round(components.onChain)}%</div>
        </div>
      </div>
    </div>
  );
} 