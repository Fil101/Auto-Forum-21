/* eslint-disable camelcase */
const express = require('express');
const { Car_brand } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  console.log('++++++++');
  const brands = await Car_brand.findAll();
  res.json(brands);
});

module.exports = router;
