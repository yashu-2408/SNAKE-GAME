import React from 'react';
import { Brain, Gamepad2, Trophy } from 'lucide-react';

interface GameControlsProps {
  score: number;
  aiEnabled: boolean;
  onToggleAI: () => void;
  onReset: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  score,
  aiEnabled,
  onToggleAI,
  onReset,
}) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-2">
      AI Snake Game
    </h1>
    <div className="flex items-center justify-center gap-2 mb-6">
      <Trophy className="w-5 h-5 text-yellow-500" />
      <p className="text-xl font-semibold text-gray-300">Score: {score}</p>
    </div>
    <div className="flex gap-4 justify-center">
      <button
        onClick={onToggleAI}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-medium
          transition-all duration-200 transform hover:scale-105
          ${aiEnabled 
            ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/30' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }
        `}
      >
        <Brain className="w-5 h-5" />
        <span>AI {aiEnabled ? 'Enabled' : 'Disabled'}</span>
      </button>
      <button
        onClick={onReset}
        className="
          flex items-center gap-2 px-6 py-3 rounded-lg font-medium
          bg-gradient-to-r from-emerald-500 to-emerald-700
          text-white shadow-lg shadow-emerald-500/30
          transition-all duration-200 transform hover:scale-105
        "
      >
        <Gamepad2 className="w-5 h-5" />
        <span>New Game</span>
      </button>
    </div>
  </div>
);