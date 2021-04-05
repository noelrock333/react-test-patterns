import { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  counter: 0,
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD': {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }
    case 'SUSTRACT': {
      return {
        ...state,
        counter: state.counter > 1 ? state.counter - 1 : 0,
      }
    }
    default: {
      return state;
    }
  }
}

const useCounter = (props) => {
  const [state, dispatch] = useReducer(reducer, props || initialState);
  return {
    counter: state.counter,
    dispatch,
  }
}

useCounter.propTypes = {
  counter: PropTypes.number,
}

useCounter.defaultProps = {
  counter: 0,
}

export default useCounter;
