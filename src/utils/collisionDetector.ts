import { Position } from '../types/game';
import { GRID_SIZE } from './constants';

export const isCollision = (position: Position, snake: Position[]): boolean => {
  return (
    position.x < 0 ||
    position.x >= GRID_SIZE ||
    position.y < 0 ||
    position.y >= GRID_SIZE ||
    snake.some(segment => segment.x === position.x && segment.y === position.y)
  );
};