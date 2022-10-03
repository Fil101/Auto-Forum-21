/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Post, Like_post, User, Favorite_post } = require('../db/models');
const fileMiddleware = require('../middleWares/multerByFil');

const router = express.Router();

// end point возвращает все посты определенного сообщества по id модели
router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const posts = await Post.findAll({ where: { car_model_id: modelId }, include: [{ model: User }, { model: Like_post }] });
  console.log(posts);
  res.json(posts);
});
router.post('/:modelId', fileMiddleware.single('post-photo'), async (req, res) => {
  const { modelId } = req.params;
  const { title, text } = req.body;
  const { userId } = req.session;
  const fixPath = req.file.path.substring(7);
  console.log('это путь', fixPath);
  try {
    const newPost = await Post.create({ title, text, img: fixPath, car_model_id: modelId, user_id: userId });
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

router.post('/favorite/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.session;
  const addFavorite = await Favorite_post.create({ post_id: postId, user_id: userId });
  res.sendStatus(200);
});

module.exports = router;
