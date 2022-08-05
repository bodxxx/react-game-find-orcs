import * as React from 'react';
export const ResetBtn = ({ reset }: { reset: () => void }) => {
  return (
    <button type="button" onClick={reset}>
      Спробувати знову
    </button>
  );
};
