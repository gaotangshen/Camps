import { keyBy } from 'lodash';
import { FETCH_ITEMS } from "../actions/index";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ITEMS: {
      return keyBy(action.payload.data.items, '_id');
    }
    default:
      return state;
  }
}