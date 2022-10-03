/* eslint-disable no-console */
import axios from 'axios';
import { LOGOUT, SET_AUTH } from '../types';

export const setAuth = (data) => ({ type: SET_AUTH, payload: data });

export const logout = () => (dispatch) => {
  axios('/api/v1/logout')
    .then(() => dispatch({ type: LOGOUT }))
    .catch(console.log);
};

export const auth = () => (dispatch) => {
  axios('/api/v1/auth')
    .then((res) => dispatch(setAuth(res.data)))
    .catch(console.log);
};
