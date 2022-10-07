/* eslint-disable camelcase */
const express = require('express');

const { Car_model, Car_brand } = require('../db/models');

const router = express.Router();

router.get('/:brandId', async (req, res) => {
  const { brandId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Models');
  try {
    const models = await Car_model.findAll({ raw: true, where: { car_brand_id: brandId } });
    // console.log(models);
    res.json(models);
  } catch (error) {
    console.error(error);
  }
});

router.get('/modelslist/:brandId', async (req, res) => {
  const { brandId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка ModelsList');
  try {
    const models = await Car_model.findAll({ raw: true, where: { car_brand_id: brandId } });
    const modelList = models.map((brand) => ({ label: brand.name, id: brand.id }));
    // console.log(modelList);
    res.json(modelList);
  } catch (error) {
    console.error(error);
  }
});

router.get('/model/:modelId', async (req, res) => {
  const { modelId } = req.params;
  console.info('\x1b[34m%s\x1b[0m', 'Сработала ручка Model');
  try {
    const model = await Car_model.findOne({
      where: { id: modelId },
      include: { model: Car_brand } });
    res.json(model);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
