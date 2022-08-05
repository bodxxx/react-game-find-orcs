import React from 'react';
import './App.css';
import { Battlefield } from './Battlefield';
import { Header } from './Header';
import { ResetBtn } from './ResetBtn';
import { useGameState } from './state/useGameState';

function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  React.useEffect(() => {
    if (won) {
      setTimeout(() => alert(`🔥🔥🔥Ви спалили штаб орків за ${turn} кроки! Вітаю!🔥🔥🔥`), 0);
    }
  }, [won]);

  const onFire = (y:number, x:number) => console.log(y,x);
  return (
    <div className="App">
      <Header turn={turn}/>
      <Battlefield disabled={won} matrix={matrix} onFire={fire}/>
      <ResetBtn reset={reset}/>
    </div>
  );
}

export default App;
