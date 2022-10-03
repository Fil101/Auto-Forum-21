/* eslint-disable camelcase */
const express = require('express');
const { Article, Car_model } = require('../db/models');

const router = express.Router();

// Получает все статьи
router.get('/all', async (req, res) => {
  const { modelId } = req.params;
  console.log('\x1b[34m%s\x1b[0m', 'Сработала ручка Article');
  const article = await Article.findAll({ raw: true, include: { model: Car_model } });
  // console.log(article);
  res.json(article);
});

module.exports = router;
