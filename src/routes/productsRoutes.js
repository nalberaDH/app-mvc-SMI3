const express = require('express');
const multer = require('multer');
const path = require('path');
const isUser = require('../middlewares/adminMiddleware');

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

/*Validaciones*/
const { body } = require('express-validator');

const validationsForm = [
    body('title').notEmpty().withMessage('El titulo no puede estar vacio'),
    body('price').notEmpty().withMessage('El precio no puede estar vacio')
        // .isNumeric().withMessage('Debe ser un numero')
]


const { getAllProducts, getPeroductById, formNewProduct, postNewProduct, deleteProduct, confirmModifyProduct } = require('../controllers/products');

router.get('/products', getAllProducts);
router.get('/product/:id', getPeroductById);

router.get('/new-product', isUser, formNewProduct);
router.post('/products', uploadImgProduct.single('image'), validationsForm,postNewProduct);

router.put('/product/:id/edit', confirmModifyProduct)
router.delete('/product/delete/:id', isUser, deleteProduct);

module.exports = router;