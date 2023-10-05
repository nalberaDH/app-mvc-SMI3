const path = require('path');

const register = (req,res) => {
    const form = path.join(__dirname,'../../views/register');
    res.render(form);
}

module.exports = register;