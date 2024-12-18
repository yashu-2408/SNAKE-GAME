import { Position, Direction, GameState } from '../types/game';
import { GRID_SIZE } from './constants';
import { generateFood } from './foodGenerator';
import { isCollision } from './collisionDetector';

export const createInitialState = (): GameState => ({
  snake: [{ x: 10, y: 10 }],
  food: generateFood([{ x: 10, y: 10 }]),
  direction: 'RIGHT',
  isGameOver: false,
  score: 0,
  aiEnabled: false,
});

export const moveSnake = (state: GameState): GameState => {
  const newHead = getNextHeadPosition(state.snake[0], state.direction);

  if (isCollision(newHead, state.snake)) {
    return { ...state, isGameOver: true };
  }

  const newSnake = [newHead];
  const ateFood = newHead.x === state.food.x && newHead.y === state.food.y;

  if (ateFood) {
    newSnake.push(...state.snake);
    return {
      ...state,
      snake: newSnake,
      food: generateFood(newSnake),
      score: state.score + 1,
    };
  }

  newSnake.push(...state.snake.slice(0, -1));
  return { ...state, snake: newSnake };
};

const getNextHeadPosition = (head: Position, direction: Direction): Position => {
  const newHead = { ...head };

  switch (direction) {
    case 'UP':
      newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'DOWN':
      newHead.y = (newHead.y + 1) % GRID_SIZE;
      break;
    case 'LEFT':
      newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'RIGHT':
      newHead.x = (newHead.x + 1) % GRID_SIZE;
      break;
  }

  return newHead;
};