/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_POSTS } from '../types';

export const setPosts = (random) => ({
  type: SET_POSTS,
  payload: random,
});

export const fetchPostsAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios(`/api/posts/${modelId}`);
    dispatch(setPosts(res.data));
  } catch (e) {
    console.log(e);
  }
};
