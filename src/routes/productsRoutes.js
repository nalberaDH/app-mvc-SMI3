const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_product${path.extname(file.originalname)}`)
    }
});

const uploadImgProduct = multer({ storage })


const { getAllProducts, getPeroductById, formNewProduct, postNewProduct, deleteProduct } = require('../controllers/products');

router.get('/products', getAllProducts);
router.get('/product/:id', getPeroductById);

router.get('/new-product', formNewProduct);
router.post('/products', uploadImgProduct.single('image'), postNewProduct);

router.delete('/product/delete/:id', deleteProduct);

module.exports = router;