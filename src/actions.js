// action type
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET'

export function incrementCounter() {
  return { type: INCREMENT };
} 
export function decrementCounter() {
  return { type: DECREMENT }
};
export function resetCounter(initialValue) {
  return { type: RESET, payload: initialValue}
}