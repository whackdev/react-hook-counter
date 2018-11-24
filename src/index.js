import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const initialState = { count: 0 };

const INCREMENT = { type: 'INCREMENT' };
const DECREMENT = { type: 'DECREMENT' };

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return state.count === 0 ? { count: 0 } : { count: state.count - 1 };
    case 'RESET':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(countReducer, initialState, {
    type: 'RESET',
    payload: initialCount
  });

  return (
    <>
      {state.count}
      <button onClick={() => dispatch(DECREMENT)}>-</button>
      <button onClick={() => dispatch(INCREMENT)}>+</button>
      <button
        onClick={() => dispatch({ type: 'RESET', payload: initialCount })}
      >
        Reset
      </button>
    </>
  );
}

ReactDOM.render(<Counter initialCount={0} />, document.getElementById('root'));
