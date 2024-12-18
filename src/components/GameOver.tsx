import React from 'react';
import { RotateCcw } from 'lucide-react';

interface GameOverProps {
  onReset: () => void;
  score: number;
}

export const GameOver: React.FC<GameOverProps> = ({ onReset, score }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div className="text-center p-8 rounded-xl bg-gray-800/80 shadow-xl">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Game Over!</h2>
      <p className="text-xl text-gray-300 mb-6">Final Score: {score}</p>
      <button
        onClick={onReset}
        className="
          flex items-center gap-2 px-6 py-3 rounded-lg font-medium
          bg-gradient-to-r from-emerald-500 to-emerald-700
          text-white shadow-lg shadow-emerald-500/30
          transition-all duration-200 transform hover:scale-105
        "
      >
        <RotateCcw className="w-5 h-5" />
        <span>Play Again</span>
      </button>
    </div>
  </div>
);