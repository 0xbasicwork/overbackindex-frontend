import React from 'react';

interface ScoreDisplayProps {
  score: number;
  label: string;
}

export default function ScoreDisplay({ score, label }: ScoreDisplayProps) {
  return (
    <div className="text-center">
      <div className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {score}
      </div>
      <div className="text-3xl font-bold uppercase tracking-tight">
        {label}
      </div>
    </div>
  );
} 