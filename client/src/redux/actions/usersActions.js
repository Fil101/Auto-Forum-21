/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_USERS, ADD_USER } from '../types';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const fetchUsersAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios(`/api/users/${modelId}`);
    dispatch(setUsers(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const addUserAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/users/${modelId}`);
    dispatch(addUser(res.data));
  } catch (e) {
    console.log(e);
  }
};
