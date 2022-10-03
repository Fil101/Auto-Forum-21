import axios from 'axios';
import { SET_MODELS } from '../types';

export const setModels = (payload) => ({ type: SET_MODELS, payload });

export const fetchModels = () => (dispatch) => {
  axios('/api/models/all')
    .then((res) => {
      dispatch(setModels(res.data));
    })
    .catch(console.log);
};
