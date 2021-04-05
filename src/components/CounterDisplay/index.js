import React, { useContext } from 'react';
import MyContextStore from '../../MyContextStore';

const CounterDisplay = () => {
  const { counter } = useContext(MyContextStore);
  return (
    <div data-testid="counter-label">
      <h1>Valor del contador: {counter}</h1>
    </div>
  );
}

export default CounterDisplay;
