const path = require('path');


const deleteProduct = (req,res) => {
    const { id } = req.params;

    /*fs.writeFile(productsPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products');
        }
    });*/
    
    //res.send(newArrayProducts);
}

module.exports = deleteProduct;