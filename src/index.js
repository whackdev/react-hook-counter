import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './Counter';

ReactDOM.render(
  <Counter initialCount={120} />,
  document.getElementById('root')
);
