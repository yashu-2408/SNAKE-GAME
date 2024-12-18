import React from 'react';
import { Position } from '../types/game';
import { CELL_SIZE } from '../utils/constants';

interface SnakeSegmentProps {
  position: Position;
  isHead: boolean;
}

export const SnakeSegment: React.FC<SnakeSegmentProps> = ({ position, isHead }) => (
  <div
    className={`
      absolute transition-all duration-150 rounded-lg
      ${isHead ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50' : 'bg-emerald-500'}
    `}
    style={{
      width: CELL_SIZE - 2,
      height: CELL_SIZE - 2,
      left: position.x * CELL_SIZE + 1,
      top: position.y * CELL_SIZE + 1,
    }}
  />
);