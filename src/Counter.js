import React, { useReducer } from 'react';
import { incrementCounter, decrementCounter, resetCounter } from './actions';
import { countReducer } from './reducer';

const initialState = { count: 0 };

export function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(
    countReducer,
    initialState,
    resetCounter(initialCount)
  );

  return (
    <>
      {state.count}
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(resetCounter(initialCount))}>
        Reset
      </button>
    </>
  );
}
