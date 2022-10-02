import { SET_POSTS } from '../types';

/* eslint-disable default-param-last */
export default function postsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return payload;
    default:
      return state;
  }
}
