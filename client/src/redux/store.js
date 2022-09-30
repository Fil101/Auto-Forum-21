import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import brandsReducer from './reducers/brandsReducer';

export default configureStore({
  reducer: {
    auth: authReducer, // слайс хранит текущего авторизованного юзера всегда
    brands: brandsReducer, // слайс хранит все бренды всегда
    models: '[]', // слайс хранит все модели всегда, с приэнклюженными лайками и каунтером кол-ва комментариев
    posts: '[]', // Слайс хранит посты только открытого сообщества
    comments: '[]', // Слайс хранит комментарии только открытого поста
    users: '[]', // Слайс хранит всех юзеров, которые подписаны на открытое сообщество
    photos: '[]', // Слайс хранит фотографии только открытого сообщества
    articles: '[]', // Слайс хранит статьи только открытого сообщества
  },
});
