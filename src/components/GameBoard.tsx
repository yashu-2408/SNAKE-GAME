import React from 'react';
import { GameState } from '../types/game';
import { GRID_SIZE, CELL_SIZE } from '../utils/constants';
import { SnakeSegment } from './SnakeSegment';
import { FoodPellet } from './FoodPellet';
import { GridBackground } from './GridBackground';

interface GameBoardProps {
  gameState: GameState;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  const { snake, food } = gameState;
  const boardSize = GRID_SIZE * CELL_SIZE;

  return (
    <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
      <div 
        className="relative bg-gray-800"
        style={{ width: boardSize, height: boardSize }}
      >
        <GridBackground size={boardSize} />
        {snake.map((segment, index) => (
          <SnakeSegment 
            key={index} 
            position={segment} 
            isHead={index === 0}
          />
        ))}
        <FoodPellet position={food} />
      </div>
    </div>
  );
};

export default GameBoard;