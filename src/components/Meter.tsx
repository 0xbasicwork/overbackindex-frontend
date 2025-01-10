import React from 'react';

interface MeterProps {
  score: number;
}

export default function Meter({ score }: MeterProps) {
  return (
    <div className="relative w-[300px] h-[150px] mx-auto mb-8 overflow-visible">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] border-4 border-gray-700 border-b-0 rounded-t-[150px] bg-transparent" />
      
      {/* Meter ticks */}
      <div className="absolute w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-1/2 w-[2px] h-[15px] bg-gray-700 origin-bottom"
            style={{
              transform: `rotate(${-90 + (i * 20)}deg)`
            }}
          />
        ))}
      </div>

      {/* Meter pointer */}
      <div
        className="absolute bottom-0 left-1/2 w-[3px] h-[140px] bg-white origin-bottom transition-transform duration-1000"
        style={{
          transform: `translateX(-50%) rotate(${score * 1.8 - 90}deg)`
        }}
      />

      {/* Meter center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full" />

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-tl-[150px] border-l-4 border-t-4 border-purple-400 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] rounded-tr-[150px] border-r-4 border-t-4 border-blue-400 opacity-60" />
    </div>
  );
} 