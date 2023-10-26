const db = require('../../database/models');

const path = require('path');

const getPeroductById = (req,res) => {
    const { id } = req.params;

    const form = path.join(__dirname,'../../views/product');

    db.Products.findByPk(id).then((product) => {
        if(product){
            res.render(form,{product})
        }else{
            res.send('Product not found');
        }
    }).catch((error) => res.send(error));

}


module.exports = getPeroductById;