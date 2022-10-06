/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
const { Post, Like_post, User, Favorite_post, Comment } = require('../db/models');
const fileMiddleware = require('../middleWares/multerByFil');

const router = express.Router();

// end point возвращает все посты определенного сообщества по id модели
router.post('/search/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { input } = req.body;
  // const posts = await Post.findAll({
  //   where: { car_model_id: modelId },
  //   attributes: {
  //     include: [
  //       [Sequelize.fn('COUNT', Sequelize.col('Comments.id')), 'commentsCount'],
  //       [Sequelize.fn('COUNT', Sequelize.col('Like_posts.id')), 'likesCount'],
  //     ],
  //   },
  //   include: [
  //     { model: User },
  //     { model: Like_post, attributes: [] },
  //     { model: Comment, attributes: [] }],
  //   group: [
  //     'Post.id',
  //     'User.id',
  //   ],
  // });
  const postsWithCommentsCount = await Post.findAll({
    where: {
      car_model_id: modelId,
      text: {
        [Op.like]: `%${input}%`,
      },
    },
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Comments.id')), 'commentsCount'],
      ],
    },
    include: [
      { model: User },
      { model: Comment, attributes: [] }],
    group: [
      'Post.id',
      'User.id',
    ],
  });
  const likes = await Post.findAll({
    where: {
      car_model_id: modelId,
      text: {
        [Op.like]: `%${input}%`,
      },
    },
    attributes: {
      include: [
        [Sequelize.fn('COUNT', Sequelize.col('Like_posts.id')), 'likesCount'],
      ],
    },
    include: [
      { model: User, attributes: [] },
      { model: Like_post, attributes: [] },
    ],
    group: [
      'Post.id',
      'User.id',
    ],
  });
  res.json(postsWithCommentsCount.map((el, ind) => ({ ...JSON.parse(JSON.stringify(el)), ...JSON.parse(JSON.stringify(likes[ind])) })));
});
// Добавляет пост с мультером
router.post('/:modelId', fileMiddleware.single('post-photo'), async (req, res) => {
  const { modelId } = req.params;
  const { title, text } = req.body;
  const user = req.session.userId;
  const fixPath = req.file.path.substring(7);
  try {
    const newPost = await Post.create({ title, text, img: fixPath, car_model_id: modelId, user_id: user });
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

// добавляет пост в избранное
router.post('/favorite/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  const [favPost, created] = await Favorite_post.findOrCreate({
    where: { post_id: postId, user_id: userId },
  });
  if (created) {
    res.sendStatus(200);
  } else {
    favPost.destroy();
    res.sendStatus(200);
  }
});

// добавляет лайк к посту
router.post('/like/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  const [likePost, created] = await Like_post.findOrCreate({
    where: { post_id: postId, user_id: userId },
  });
  if (created) {
    res.sendStatus(200);
  } else {
    likePost.destroy();
    res.sendStatus(200);
  }
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
