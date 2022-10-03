/* eslint-disable camelcase */
const express = require('express');

const { Car_model } = require('../db/models');

const router = express.Router();

router.get('/:brandId', async (req, res) => {
  const { brandId } = req.params;
  console.log('\x1b[34m%s\x1b[0m', 'Сработала ручка Models');
  const models = await Car_model.findAll({ raw: true, where: { car_brand_id: brandId } });
  // console.log(models);
  res.json(models);
});

module.exports = router;
