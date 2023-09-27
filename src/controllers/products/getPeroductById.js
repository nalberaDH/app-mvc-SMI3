const products = require('../../database/products.json');
const path = require('path');

const getPeroductById = (req,res) => {
    const { id } = req.params;

    const product = products.find((prod) => prod.id == id);

    if(!product){
        return res.send('Product not found');
    }

    const form = path.join(__dirname,'../../views/product');
    res.render(form,{ product });
}


module.exports = getPeroductById;