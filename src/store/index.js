/**
 * Created by Rwaida on 26/02/2020.
 */
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer"

export const storeFactory = (initialState={}) => {
  return compose(applyMiddleware(thunk))(createStore)(appReducer, initialState);
};

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}
