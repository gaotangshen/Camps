import axios from 'axios';

export const FETCH_CAMPGROUNDS = 'FETCH_CAMPGROUNDS';


export function fetchCampgrounds() {
  const request = axios.get('/api/campgrounds');
  console.log(23424234234)
  return {
    type: FETCH_CAMPGROUNDS,
    payload: request,
  };
}
