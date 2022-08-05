import * as React from 'react';
import { CHECKED_FOREST, CHECKED_ORC, FOREST, ORC } from './state/cellstate';

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const cellStateMap = {
  [FOREST]: '',
  [ORC]: '',
  [CHECKED_FOREST]: '🌳',
  [CHECKED_ORC]: '👹',
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className={'cell'} onClick={() => handleClick(y, x)}>
      {cellStateMap[value]}
    </button>
  );
};

type BattlefieldProps = {
  matrix: number[][];
  onFire: (y: number, x: number) => void;
  disabled: boolean;
};

const empty = () => null;
export const Battlefield = ({ matrix, onFire, disabled }: BattlefieldProps) => {
  const fire = disabled ? empty : onFire;
  return (
    <div className={`${disabled ? 'disabled' : ''}`}>
      {matrix.map((line, lineNumber) => (
        <div className={'line'} key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
              handleClick={fire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
