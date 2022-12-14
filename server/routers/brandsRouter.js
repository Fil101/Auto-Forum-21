/* eslint-disable camelcase */
const express = require('express');
const { Car_brand } = require('../db/models');

const router = express.Router();

// Получает все бренды
router.get('/all', async (req, res) => {
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Brands');
  try {
    const brands = await Car_brand.findAll();
    res.json(brands);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
