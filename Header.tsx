import * as React from 'react';
export const Header = ({ turn }: { turn: number }) => (
  <>
    <h1>Знайди і знищи орків за допомогою HIMARS</h1>
    <h2>Хід № {turn}</h2>
  </>
);
