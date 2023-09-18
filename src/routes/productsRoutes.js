const express = require('express');

const router = express.Router();

const { getAllProducts, getPeroductById } = require('../controllers/products');

router.get('/products', getAllProducts);
router.get('/product/:id', getPeroductById);

module.exports = router;