import React, { useContext } from 'react';
import MyContextStore from '../../MyContextStore';

function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

const AddButton = () => {
  const { dispatch } = useContext(MyContextStore)

  const handleClick = () => {
    callAll(() => dispatch({ type: 'ADD' }), () => alert('Added'))()
  }

  return (
    <div>
      <button onClick={handleClick}>Incrementa contador</button>
    </div>
  )
}

export default AddButton;
