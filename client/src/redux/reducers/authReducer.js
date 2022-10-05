import { SET_AUTH, LOGOUT, SET_ABOUT, SET_TG } from '../types';

export default (state = { about: '', tg: '', name: '', email: '' }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH:
      return payload;

    case LOGOUT:
      return null;

    case SET_ABOUT:
      return { ...state, about: payload };

    case SET_TG:
      return { ...state, tg: payload };

    default:
      return state;
  }
};
