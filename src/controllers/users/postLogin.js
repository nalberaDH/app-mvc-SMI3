
const path = require('path');
const { validationResult } = require('express-validator');
const bycryptjs = require('bcryptjs');

const postLogin = (req,res) => {
    const {
        email,
        password
    } = req.body;

    const errors = validationResult(req);

    if(errors.isEmpty()){
        //res.send(req.body);

        //const userLogin = users.find((user) => user.email == email);

        /*if(userLogin){
            const pwd = bycryptjs.compareSync(password,userLogin.password);

            if(pwd){
                req.session.userLogged = userLogin; //crear l a"burbuja"

                return res.send(`Bienvenido usuario: ${userLogin.email}`)
            }else{
                return res.send('Usuario o contraseña incorrecta')
            }
        }*/
        res.send('Usuario o contraseña incorrecta')
    }else{
        const form = path.join(__dirname,'../../views/login');
        res.render(form, {
            'errors': errors.array(),
            'prev': req.body
        });
    }
}

module.exports = postLogin;