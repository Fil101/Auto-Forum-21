import { SET_AUTH, LOGOUT, SET_ABOUT } from '../types';

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH:
      return payload;

    case LOGOUT:
      return null;

    case SET_ABOUT:
      return { ...state, about: payload };

    default:
      return state;
  }
};
