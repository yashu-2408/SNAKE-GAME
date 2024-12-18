import React from 'react';
import { Position } from '../types/game';
import { CELL_SIZE } from '../utils/constants';

interface FoodPelletProps {
  position: Position;
}

export const FoodPellet: React.FC<FoodPelletProps> = ({ position }) => (
  <div
    className="absolute animate-pulse"
    style={{
      width: CELL_SIZE,
      height: CELL_SIZE,
      left: position.x * CELL_SIZE,
      top: position.y * CELL_SIZE,
    }}
  >
    <div className="absolute inset-1 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50" />
  </div>
);