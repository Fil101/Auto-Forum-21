import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './reducers/articlesReducer';
import authReducer from './reducers/authReducer';
import brandsReducer from './reducers/brandsReducer';
import modelsReducer from './reducers/modelsReducer';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';

export default configureStore({
  reducer: {
    auth: authReducer, // слайс хранит текущего авторизованного юзера всегда
    brands: brandsReducer, // слайс хранит все бренды всегда
    models: modelsReducer, // слайс хранит все модели всегда
    posts: postsReducer, // Слайс хранит посты только открытого сообщества, с приэнклюженными лайками и каунтером кол-ва комментариев
    comments: '[]', // Слайс хранит комментарии только открытого поста
    users: usersReducer, // Слайс хранит всех юзеров, которые подписаны на открытое сообщество
    photos: '[]', // Слайс хранит фотографии только открытого сообщества
    articles: articlesReducer, // Слайс хранит статьи только открытого сообщества
  },
});
