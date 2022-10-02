/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Subscribe, User } = require('../db/models');

const router = express.Router();

// end point добавляет юзера в подписчики сообщества
router.post('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { userId } = req.session; // Добавить сессию, пока не работает
  const newSubscribe = await Subscribe.create({ user_id: userId, car_model_id: modelId });
  res.json(newSubscribe);
});

router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const subscribes = await Subscribe.findAll({ where: { car_model_id: modelId }, include: [{ model: User, attributes: ['name', 'img'] }] });
  console.log(subscribes);
  res.json(subscribes);
});

module.exports = router;
