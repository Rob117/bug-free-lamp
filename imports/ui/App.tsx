import React from 'react';
import { ChangeCountButton } from './components/changeCountButton';
import { useChangeIncrement } from './hooks/useChangeIncrement';

export const App = () => {
  const { count, incrementCount, decrementCount } = useChangeIncrement();
  return (
    <div>
      <h1>Time To Count</h1>
      {count}
      <div>
        <ChangeCountButton label='count up' onClick={incrementCount}/>
        <ChangeCountButton label='count down' onClick={decrementCount}/>
      </div>
    </div>
  );
}
