import { keyBy } from 'lodash';
import { FETCH_CAMPGROUNDS, } from "../actions/index";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CAMPGROUNDS: {
      console.log(12121231313);
      return keyBy(action.payload.data.campgrounds, '_id');
    }
    default:
      return state;
  }
}