import { SET_COMMENTS, ADD_COMMENT, ADD_COMMENT_COUNTER } from '../types';

/* eslint-disable default-param-last */
export default function commentsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COMMENTS:
      return payload;
    case ADD_COMMENT:
      return [payload, ...state];
    default:
      return state;
  }
}
