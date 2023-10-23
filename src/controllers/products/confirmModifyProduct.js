
const path = require('path');

const confirmModifyProduct = (req,res) => {
    const { id } = req.params;

    const {title, price, description} = req.body;

    


    /*fs.writeFile(productPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect('/products');
        }
    });*/
}

module.exports = confirmModifyProduct;