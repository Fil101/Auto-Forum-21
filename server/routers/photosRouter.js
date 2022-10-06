/* eslint-disable camelcase */
const express = require('express');
const { Photo, User } = require('../db/models');

const router = express.Router();

router.get('/:modelId/photos', async (req, res) => {
  const { modelId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Photos');
  try {
    const photos = await Photo.findAll({ raw: true,
      where: { car_model_id: modelId },
      include: { model: User } });
    //   console.log('eto photo na beck', photos);
    res.json(photos);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
