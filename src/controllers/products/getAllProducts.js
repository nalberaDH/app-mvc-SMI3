/**traeme los modelos y la conn a la base de datos */
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const path = require('path');

const getAllProducts = (req,res) => {
    
    const dir = path.join(__dirname,'../../views/products');
    
    if(req.query.title){
        db.Products.findAll({
            where:{
                title: {[Op.like]: `%${req.query.title}%`}
            }
        }).then((products) => {
            if(!products.length){

            }
            res.render(dir,{'allProducts': products});
        }).catch((error) => res.send(error));
    }else{
        db.Products.findAll().then((products) => {
            //res.send(products);//resolve
            res.render(dir,{'allProducts': products});
        }).catch((error) => res.send(error));//rechazo    
    }
    

}

module.exports = getAllProducts;