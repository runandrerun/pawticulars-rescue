import { combineReducers } from 'redux';
import rescuesReducer from './rescuesReducer';

const rootReducer = combineReducers({
  rescuesState: rescuesReducer,
});

export default rootReducer;
