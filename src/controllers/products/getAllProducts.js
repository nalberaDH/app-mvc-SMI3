const products = require('../../database/products.json');


const getAllProducts = (req,res) => {
    res.send(products);
}

module.exports = getAllProducts;