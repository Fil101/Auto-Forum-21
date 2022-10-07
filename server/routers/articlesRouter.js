/* eslint-disable camelcase */
const express = require('express');
const { Article, Car_model } = require('../db/models');

const router = express.Router();

// Получает все статьи

router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Article');
  try {
    const article = await Article.findAll({ raw: true,
      where: { car_model_id: modelId },
      include: { model: Car_model } });
    // console.log(article);
    res.json(article);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
