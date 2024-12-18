import { GameState, Direction } from '../types/game';

export const getNextAIMove = (state: GameState): Direction => {
  const head = state.snake[0];
  const food = state.food;
  
  // Prevent immediate reversals
  const cannotMove = getImpossibleDirection(state.direction);
  
  // Calculate distances to food
  const distances = {
    UP: head.y > food.y ? head.y - food.y : food.y - head.y,
    DOWN: head.y < food.y ? food.y - head.y : head.y - food.y,
    LEFT: head.x > food.x ? head.x - food.x : food.x - head.x,
    RIGHT: head.x < food.x ? food.x - head.x : head.x - food.x,
  };
  
  // Try horizontal movement first if closer
  if (distances.LEFT < distances.UP && distances.LEFT < distances.DOWN && cannotMove !== 'LEFT') {
    return head.x > food.x ? 'LEFT' : 'RIGHT';
  }
  
  // Try vertical movement
  if (cannotMove !== 'UP') {
    return head.y > food.y ? 'UP' : 'DOWN';
  }
  
  // Default to current direction if no better move is found
  return state.direction;
};

const getImpossibleDirection = (currentDirection: Direction): Direction => {
  switch (currentDirection) {
    case 'UP': return 'DOWN';
    case 'DOWN': return 'UP';
    case 'LEFT': return 'RIGHT';
    case 'RIGHT': return 'LEFT';
  }
};