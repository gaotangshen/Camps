import axios from 'axios';

export const FETCH_CAMPGROUNDS = 'FETCH_CAMPGROUNDS';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchCampgrounds() {
  const request = axios.get('/api/campgrounds');
  return {
    type: FETCH_CAMPGROUNDS,
    payload: request,
  };
}

export function fetchItems() {
  const request = axios.get('/api/items');
  return {
    type: FETCH_ITEMS,
    payload: request,
  };
}