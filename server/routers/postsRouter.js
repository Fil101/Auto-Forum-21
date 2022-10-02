/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Post, Like_post, User } = require('../db/models');

const router = express.Router();

// end point возвращает все посты определенного сообщества по id модели
router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const posts = await Post.findAll({ where: { car_model_id: modelId }, include: [{ model: User }, { model: Like_post }] });
  console.log(posts);
  res.json(posts);
});

module.exports = router;
