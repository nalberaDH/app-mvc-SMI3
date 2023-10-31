const db = require('../../database/models'); 
const path = require('path');
const { validationResult } = require('express-validator');
const bycryptjs = require('bcryptjs');

const postRegister = (req,res) => {
    const {
        name,
        surname,
        email,
        password
    } = req.body

    const errors = validationResult(req);

    if(errors.isEmpty()){
        
        db.Users.findOne({
            where:{
                email
            }
        }).then((user) => {
            if(user){
                return res.send('El usuario ya se encuentra registrado');
            }else{
                
                db.Users.create({
                    firstName: name,
                    lastName: surname,
                    email,
                    password: bycryptjs.hashSync(password,10)
                }).then(() => res.send('Usuario creado correctamente'))
                  .catch((error) => res.send(error))
            }
        }).catch((error) => res.send(error))
    }else{
        const form = path.join(__dirname,'../../views/register');
        res.render(form, {
            'errors': errors.array(),
            'prev': req.body
        });
    }
}

module.exports = postRegister;