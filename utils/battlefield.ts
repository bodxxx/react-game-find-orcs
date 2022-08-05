import { createArray } from './array';
import { random } from './random';

const createHorizontalOrcSquad = (amount: number, maxSize: number) => {
  const maxX = maxSize - amount - 1;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(amount, (i) => {
    return { y: headY, x: headX + i };
  });
};

const createVerticalOrcSquad = (amount: number, maxSize: number) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - amount - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(amount, (i) => {
    return { y: headY + i, x: headX };
  });
};

type Point = { x: number; y: number };
export const createOrcs = (orcsAmount: number, maxSize: number): Point[] => {
  const position = random(0, 2) % 2 === 0 ? 'horizontal' : 'vertical';
  return position === 'horizontal'
    ? createHorizontalOrcSquad(orcsAmount, maxSize)
    : createVerticalOrcSquad(orcsAmount, maxSize);
};
