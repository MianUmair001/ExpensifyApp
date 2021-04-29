import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});
const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count,
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 100 }));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(resetCount());
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// unsubscribe();
// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "SET",
//   count: 10,
// });

store.dispatch(setCount({ count: 50 }));
