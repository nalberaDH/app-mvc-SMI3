const products = require('../../database/products.json');
const path = require('path');

const getAllProducts = (req,res) => {
    
    const ruta = path.join(__dirname,'../../views/products.ejs');
    //console.log(ruta);
    res.render(ruta,{allProducts: products})
    //res.send(products);
}

module.exports = getAllProducts;