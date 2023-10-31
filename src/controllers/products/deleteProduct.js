const db = require('../../database/models');


const deleteProduct = (req,res) => {
    const { id } = req.params;

    db.Products.destroy({
        where:{
            id
        }
    }).then(() => res.send('Producto eliminado'))
      .catch((error) => res.send(error));
    
}

module.exports = deleteProduct;