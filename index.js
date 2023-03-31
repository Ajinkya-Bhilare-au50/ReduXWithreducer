// console.log("hello")
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const history = [];

// Action name Constants------------------
const increment = "increment"
const decrement = "decrement"
const incrementByAmount = "incrementByAmount";
//store creation
const store = createStore(reducer, applyMiddleware(logger.default));

// reducer always returns state
function reducer(previousstate = { amount: 500 }, action) {
  if (action.type === increment) {
    return { amount: previousstate.amount + 1 };
  }
  if (action.type === decrement) {
    return { amount: previousstate.amount - 1 };
  }
  if (action.type === incrementByAmount) {
    return { amount: previousstate.amount + action.payload };
  }
  return previousstate;
}

// alternate-way is logger
/* store.subscribe(() => {
  history.push(store.getState());
  console.log(store.getState());
  console.log(history);
}); */

// to check global state
// console.log(store.getState());

//Action is conventional object(from flux)
// -----------------
// Action - Creators are function which simply returns an object to be used in store.dispatch
function Incre() {
    return { type: "increment"};
}
function Decre() {
    return {type:"decrement"}
}
function IncreByAmount(value) {
    return { type: "incrementByAmount", payload: value };
}


setInterval(() => {
  store.dispatch(IncreByAmount(15));
}, 2000);
// store.dispatch({ type: "increment" });
// console.log(store.getState());-----------to avoid multiple console
// it goes to reducer
// store dispatches action to reducer
// console.log(store.getState());
// thunk delays the dispatch
