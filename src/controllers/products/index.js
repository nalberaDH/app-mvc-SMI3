const getAllProducts = require('./getAllProducts');
const getPeroductById = require('./getPeroductById');
const formNewProduct = require('./formNewProduct');
const postNewProduct = require('./postNewProduct');
const deleteProduct = require('./deleteProduct');
const confirmModifyProduct = require('./confirmModifyProduct');

module.exports = {
    getAllProducts,
    getPeroductById,
    formNewProduct,
    postNewProduct,
    deleteProduct,
    confirmModifyProduct
}