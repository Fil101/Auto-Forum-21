import axios from 'axios';
import { SET_MODELS } from '../types';

export const setModels = (payload) => ({ type: SET_MODELS, payload });

<<<<<<< HEAD
export const fetchModels = (brandId) => (dispatch) => {
  axios(`/api/models/${brandId}`)
    .then((res) => dispatch(setModels(res.data)))
=======
export const fetchModels = () => (dispatch) => {
  axios('/api/models/all')
    .then((res) => {
      dispatch(setModels(res.data));
    })
>>>>>>> 1034ec9bb75866f5c42466e0fe0b26b7708cfdb8
    .catch(console.log);
};
