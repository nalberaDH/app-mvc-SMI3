const path = require('path');

const login = (req,res) => {
    const form = path.join(__dirname,'../../views/login');
    res.render(form);
}


module.exports = login;