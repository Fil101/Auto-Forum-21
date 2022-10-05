/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const { Subscribe, User } = require('../db/models');

const router = express.Router();

// end point добавляет юзера в подписчики сообщества или удаляет, если юзер уже найден
router.post('/:modelId', async (req, res) => {
  const { modelId } = req.params;
  const { userId } = req.session;
  const checkUser = await Subscribe.findOne({ where: { user_id: userId, car_model_id: modelId } });
  if (!checkUser) {
    await Subscribe.create({ user_id: userId, car_model_id: modelId });
    const findSubscribe = await Subscribe.findOne({ where: { user_id: userId, car_model_id: modelId }, include: [{ model: User, attributes: ['name', 'img'] }] });
    res.json(findSubscribe);
  } else {
    await checkUser.destroy();
    res.json(userId);
  }
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

// endPoint проверяет подписан ли текущий user на сообщество и возвращает true или false
router.get('/:modelId/subscribe', async (req, res) => {
  try {
    const { userId } = req.session;
    const { modelId } = req.params;
    const checkUser = await Subscribe.findOne({ where: { user_id: userId, car_model_id: modelId } });
    checkUser ? res.json({ state: true }) : res.json({ state: false });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
