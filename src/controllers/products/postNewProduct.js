const products = require('../../database/products.json');
const fs = require('fs');
const path = require('path');

const postNewProduct = (req,res) => {
    //res.send(req.body);
    const { title, price, description, image } = req.body;

    // const largoArray = products.length - 1;
    // const id = products[largoArray].id;

    const id = products[products.length - 1].id; //tomo el ultimo id

    const newId = id + 1;//aumento en 1

    const newProduct = {
        id: newId,
        title,
        price,
        description,
        image
    };
    
    products.push(newProduct);

    const productsPath = path.join(__dirname,'../../database/products.json');

    const data = JSON.stringify(products);

    //guardar los datos en el archivo json
    fs.writeFile(productsPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products');
        }
    });
}

module.exports = postNewProduct;