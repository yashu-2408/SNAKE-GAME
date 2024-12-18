import React from 'react';
import { CELL_SIZE } from '../utils/constants';

interface GridBackgroundProps {
  size: number;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ size }) => {
  return (
    <div 
      className="absolute inset-0 grid"
      style={{ 
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
      }}
    />
  );
};