import { combineReducers } from 'redux';

import DataReducer from './DataReducer';
// maps state and reducer
const reducers = combineReducers({
  data: DataReducer,
});

export default reducers; 