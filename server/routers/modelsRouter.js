/* eslint-disable camelcase */
const express = require('express');

const { Car_model } = require('../db/models');

const router = express.Router();

// Получает все модели всех брендов
router.get('/all', async (req, res) => {
  const { brandId } = req.params;
  console.log('\x1b[34m%s\x1b[0m', 'Сработала ручка Models');
  try {
    const models = await Car_model.findAll({ raw: true });
    // console.log(models);
    res.json(models);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
