import { combineReducers } from 'redux';
import CampgroundsReducer from './campgrounds-reducer';
import ItemsReducer from './items-reducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  campgrounds: CampgroundsReducer,
  items: ItemsReducer,
  // form: formReducer
});

export default rootReducer;