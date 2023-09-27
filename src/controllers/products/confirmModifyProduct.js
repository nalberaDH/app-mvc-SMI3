const products = require('../../database/products.json');
const fs = require('fs');
const path = require('path');

const confirmModifyProduct = (req,res) => {
    const { id } = req.params;

    const {title, price, description} = req.body;

    products.forEach((product) => {
        if(product.id == id){
            product.id = id;
            product.title = title;
            product.price = price;
            product.description = description;
        }
    });

    const productPath = path.join(__dirname,'../../database/products.json');

    const data = JSON.stringify(products);

    fs.writeFile(productPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products');
        }
    });
}

module.exports = confirmModifyProduct;