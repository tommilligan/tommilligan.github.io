import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";

import history from "./history";
import * as reducers from "./reducers"; // Or wherever you keep your reducers

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(historyMiddleware)
);

// Now you can dispatch navigation actions from anywhere!
// import { push } from "react-router-redux";
// store.dispatch(push("/foo"))

export default store;