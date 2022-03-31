import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/index.js';
import thunkMiddleware from "redux-thunk"

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;