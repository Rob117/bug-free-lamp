import React from 'react';
import { ChangeCountButton } from './components/changeCountButton';
import { useChangeIncrement } from './hooks/useChangeIncrement';

export const App = () => {
  const { count, incrementCount, decrementCount } = useChangeIncrement();

  const clickMailTo = () => {
    window.open(`mailto:?subject=Your Count&body=${count}`)
  }
  return (
    <div>
      <h1>Time To Count</h1>
      {count}
      <div>
        <ChangeCountButton label='count up' onClick={incrementCount}/>
        <ChangeCountButton label='count down' onClick={decrementCount}/>
      </div>
      <br/>
      <br/>
      <button onClick={clickMailTo}>
        Send Email
      </button>
    </div>
  );
}
