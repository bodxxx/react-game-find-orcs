import { useState } from 'react';
import { createArray } from '../utils/array';
import { createOrcs } from '../utils/battlefield';
import { CHECKED_FOREST, CHECKED_ORC, FOREST, ORC } from './cellstate';

const MAX_MATRIX_LENGTH = 7;

const createEmptyBattlefield = () =>
  createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0));

const createBattlefield = () => {
  const emptyBattlefield = createEmptyBattlefield();
  const newOrcSquad = createOrcs(3, MAX_MATRIX_LENGTH);

  newOrcSquad.forEach(({ x, y }) => {
    emptyBattlefield[y][x] = ORC;
  });

  return emptyBattlefield;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattlefield(),
    turn: 0,
    won: false,
  });
  const reset = () => {
    setState({
      matrix: createBattlefield(),
      turn: 0,
      won: false,
    });
  };

  const fire = (y: number, x: number) => {
    const cell = state.matrix[y][x];
    if (cell === CHECKED_FOREST || cell === CHECKED_ORC) {
      return;
    }
    const newState = cell === FOREST ? CHECKED_FOREST : CHECKED_ORC;
    state.matrix[y][x] = newState;
    const won = state.matrix.every((line) => line.every((x) => x !== ORC));
    setState({ ...state, turn: state.turn + 1, won });
  };

  const { turn, matrix, won } = state;

  return { turn, reset, matrix, fire, won };
};
