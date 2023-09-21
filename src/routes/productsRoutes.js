const express = require('express');

const router = express.Router();

const { getAllProducts, getPeroductById, formNewProduct, postNewProduct, deleteProduct } = require('../controllers/products');

router.get('/products', getAllProducts);
router.get('/product/:id', getPeroductById);

router.get('/new-product', formNewProduct);
router.post('/products', postNewProduct);

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;