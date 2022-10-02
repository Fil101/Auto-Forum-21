import { SET_USERS, ADD_USER } from '../types';

/* eslint-disable default-param-last */
export default function usersReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return payload;
    case ADD_USER:
      return [...state, payload];
    default:
      return state;
  }
}
