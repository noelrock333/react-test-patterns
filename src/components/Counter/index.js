import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContextStore from '../../MyContextStore';

const Counter = ({ title }) => {
  const { counter, dispatch } = useContext(MyContextStore);
  return (
    <div>
      {title && <h1>{title}</h1>}
      <h2>contador: {counter}</h2>
      <button onClick={() => dispatch({ type: 'ADD' })} data-testid="add-btn">+</button>
      <button onClick={() => dispatch({ type: 'SUSTRACT' })} data-testid="subtract-btn">-</button>
    </div>
  )
}

Counter.propTypes = {
  title: PropTypes.string,
}

export default Counter;
