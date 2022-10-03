import axios from 'axios';
import { SET_MODELS } from '../types';

export const setModels = (payload) => ({ type: SET_MODELS, payload });

export const fetchModels = (brandId) => (dispatch) => {
  axios(`/api/models/${brandId}`)
    .then((res) => dispatch(setModels(res.data)))
    .catch(console.log);
};
