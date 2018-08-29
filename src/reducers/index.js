import currentLocationReducer from './locationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer
});

export default rootReducer;