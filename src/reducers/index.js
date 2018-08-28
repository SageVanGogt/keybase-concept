import currentLocationReducer from './locationReducer';

const rootReducer = combineReducers({
  currentLocation: currentLocationReducer
});

export default rootReducer;