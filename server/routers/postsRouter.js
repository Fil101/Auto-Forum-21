/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Sequelize } = require('sequelize');
const { Post, Like_post, User, Favorite_post, Comment } = require('../db/models');
const fileMiddleware = require('../middleWares/multerByFil');

const router = express.Router();

// end point возвращает все посты определенного сообщества по id модели
router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const posts = await Post.findAll({
    where: { car_model_id: modelId },
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Comments.id')), 'commentsCount'],
        [Sequelize.fn('COUNT', Sequelize.col('Like_posts.id')), 'likesCount'],
      ],
    },
    include: [
      { model: User },
      { model: Like_post, attributes: [] },
      { model: Comment, attributes: [] }],
    group: [
      'Post.id',
      'User.id',
    ],
  });
  res.json(posts);
});
// Добавляет пост с мультером
router.post('/:modelId', fileMiddleware.single('post-photo'), async (req, res) => {
  const { modelId } = req.params;
  const { title, text } = req.body;
  const user = req.session; // добавить сессию
  const fixPath = req.file.path.substring(7);
  try {
    const newPost = await Post.create({ title, text, img: fixPath, car_model_id: modelId, user_id: 1 });
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});
// добавляет пост в избранное
router.post('/favorite/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  const addFavorite = await Favorite_post.create({ post_id: postId, user_id: userId });
  res.sendStatus(200);
});

// Добавляем комментарии к посту
router.post('/comments/:postId', async (req, res) => {
  const { text } = req.body;
  const { postId } = req.params;
  const { userId } = req.session;
  const newComment = await Comment.create({ post_id: postId, user_id: userId, text });
  const commentInclude = await Comment.findOne({ where: { id: newComment.id }, include: { model: User } });
  res.json(commentInclude);
});
// End point возвращает все комментарии к открытому посту по id поста
router.get('/comments/:postId', async (req, res) => {
  const { postId } = req.params;
  const commentsByPost = await Comment.findAll({ where: { post_id: postId }, include: { model: User } });
  res.json(commentsByPost);
});

module.exports = router;
