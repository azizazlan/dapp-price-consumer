import { combineReducers } from 'redux';
import priceconsumerReducer from './priceconsumer/reducer';

const rootReducer = combineReducers({
  priceconsumer: priceconsumerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
