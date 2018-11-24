import { INCREMENT, DECREMENT, RESET } from './actions';

export function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return state.count === 0 ? { count: 0 } : { count: state.count - 1 };
    case RESET:
      return { count: action.payload };
    default:
      return state;
  }
}
