const path = require('path');

const formNewProduct = (req,res) => {
    const form = path.join(__dirname,'../../views/newproduct');
    
    res.render(form);
}

module.exports= formNewProduct;