/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_POSTS, ADD_POST } from '../types';

export const setPosts = (random) => ({
  type: SET_POSTS,
  payload: random,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const fetchPostsAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios(`/api/posts/${modelId}`);
    dispatch(setPosts(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const addPostAsync = (modelId, inputs, img) => async (dispatch) => {
  // const data = new FormData();
  // data.append('post-photo', img);
  const { title, text } = inputs;
  const data = { 'post-photo': img, title, text };
  await axios.post(`/api/posts/${modelId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(res => dispatch(addPost(res.data)));
};

