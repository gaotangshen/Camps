import { combineReducers } from 'redux';
import CampgroundsReducer from './campgrounds-reducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  campgrounds: CampgroundsReducer,
  // form: formReducer
});

export default rootReducer;