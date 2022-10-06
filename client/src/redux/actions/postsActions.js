/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_POSTS, ADD_POST, ADD_POST_COUNTER, FETCH_POSTS } from '../types';

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const fetchPosts = (modelId, input) => ({
  type: FETCH_POSTS,
  payload: { modelId, input },
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const addPostCounter = (postId) => ({
  type: ADD_POST_COUNTER,
  payload: postId,
});

// export const fetchPostsAsync = (modelId) => async (dispatch) => {
//   try {
//     const res = await axios(`/api/posts/${modelId}`);
//     dispatch(setPosts(res.data));
//   } catch (e) {
//     console.log(e);
//   }
// };

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
