import { SET_POSTS, ADD_POST, ADD_POST_COUNTER } from '../types';

/* eslint-disable default-param-last */
export default function postsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return payload;
    case ADD_POST:
      return [payload, ...state];
    case ADD_POST_COUNTER:
      return state.map((post) => (post.id === payload ? { ...post, commentsCount: (Number(post.commentsCount) + 1).toString() } : post));
    default:
      return state;
  }
}
