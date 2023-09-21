const products = require('../../database/products.json');
const path = require('path');
const fs = require('fs');


const deleteProduct = (req,res) => {
    const { id } = req.params;

    const newArrayProducts = products.filter((prod) => prod.id !== parseInt(id));

    const productsPath = path.join(__dirname,'../../database/products.json');

    const data = JSON.stringify(newArrayProducts);

    //guardar los datos en el archivo json
    fs.writeFile(productsPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products');
        }
    });

    //res.send(newArrayProducts);
}

module.exports = deleteProduct;