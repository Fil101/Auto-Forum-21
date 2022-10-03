import { SET_POSTS, ADD_POST } from '../types';

/* eslint-disable default-param-last */
export default function postsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return payload;
    case ADD_POST:
      return [...state, payload];
    default:
      return state;
  }
}
