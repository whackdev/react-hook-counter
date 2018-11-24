import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter(props) {
  const [count, setCount] = useState(props.count ? props.count : 0);

  function decrement(val) {
    if (val === 0) {
      return;
    }
    setCount(val - 1);
  }

  function increment(val) {
    setCount(val + 1);
  }
  return (
    <div>
      <button onClick={() => decrement(count)}>-</button>
      <span>{count}</span>
      <button onClick={() => increment(count)}>+</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
