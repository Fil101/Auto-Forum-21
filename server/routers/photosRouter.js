/* eslint-disable camelcase */
const express = require('express');
const { Photo, User } = require('../db/models');

const router = express.Router();

router.get('/:modelId/photos', async (req, res) => {
  const { modelId } = req.params;
  const photos = await Photo.findAll({ raw: true,
    where: { car_model_id: modelId },
    include: { model: User } });
  //   console.log('eto photo na beck', photos);
  res.json(photos);
});

module.exports = router;
