import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { GameOver } from './components/GameOver';
import { GameState, Direction } from './types/game';
import { createInitialState, moveSnake } from './utils/gameLogic';
import { getNextAIMove } from './utils/aiController';
import { GAME_SPEED } from './utils/constants';

function App() {
  const [gameState, setGameState] = useState<GameState>(createInitialState());
  const [isPlaying, setIsPlaying] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameState.aiEnabled) return;

    const keyDirections: { [key: string]: Direction } = {
      ArrowUp: 'UP',
      ArrowDown: 'DOWN',
      ArrowLeft: 'LEFT',
      ArrowRight: 'RIGHT',
    };

    const newDirection = keyDirections[event.key];
    if (newDirection) {
      setGameState(prev => ({ ...prev, direction: newDirection }));
    }
  }, [gameState.aiEnabled]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!isPlaying || gameState.isGameOver) return;

    const gameLoop = setInterval(() => {
      if (gameState.aiEnabled) {
        const aiDirection = getNextAIMove(gameState);
        setGameState(prev => moveSnake({ ...prev, direction: aiDirection }));
      } else {
        setGameState(prev => moveSnake(prev));
      }
    }, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [isPlaying, gameState]);

  const toggleAI = () => {
    setGameState(prev => ({ ...prev, aiEnabled: !prev.aiEnabled }));
  };

  const resetGame = () => {
    setGameState(createInitialState());
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <div className="relative">
        <GameControls
          score={gameState.score}
          aiEnabled={gameState.aiEnabled}
          onToggleAI={toggleAI}
          onReset={resetGame}
        />
        
        <GameBoard gameState={gameState} />
        
        {gameState.isGameOver && (
          <GameOver onReset={resetGame} score={gameState.score} />
        )}
        
        {!gameState.isGameOver && !gameState.aiEnabled && (
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Use arrow keys to control the snake
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;