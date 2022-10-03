/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Subscribe, User } = require('../db/models');

const router = express.Router();

// end point добавляет юзера в подписчики сообщества
router.post('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { userId } = req.session; // Добавить сессию, пока не работает
  // console.log('это id user', userId);
  const newSubscribe = await Subscribe.create({ user_id: 1, car_model_id: modelId });
  res.json(newSubscribe);
});

router.get('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const subscribes = await Subscribe.findAll({ where: { car_model_id: modelId }, include: [{ model: User, attributes: ['name', 'img'] }] });
  console.log(subscribes);
  res.json(subscribes);
});

router.put('/about', async (req, res) => {
  const { userId } = req.session;
  const { about } = req.body;
  // console.log('++++++++++++++++', about, userId);
  const user = await User.findOne({ where: userId });
  user.update({ about });
  req.session.userAbout = about;
  res.sendStatus(200);
});

module.exports = router;
