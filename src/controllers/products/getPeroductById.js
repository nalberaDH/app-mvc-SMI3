const products = require('../../database/products.json');

const getPeroductById = (req,res) => {
    const { id } = req.params;

    const product = products.find((prod) => prod.id == id);

    if(!product){
        return res.send('Product not found');
    }

    res.send(product);
}


module.exports = getPeroductById;