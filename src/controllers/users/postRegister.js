const users = require('../../database/users.json');
const path = require('path');
const fs = require('fs');
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
        //res.send(req.body);

        const userRegister = users.find((user) => user.email == email);

        if(userRegister) return res.send('El usuario ya se encuentra registrado');

        const newId = users[users.length - 1].id + 1;
        
        const obj = {
            id: newId,
            ...req.body,
            password: bycryptjs.hashSync(password, 10)
        }

        users.push(obj);
        
        const usersPath = path.join(__dirname,'../../database/users.json');
      
        const data = JSON.stringify(users);
    
        fs.writeFile(usersPath,data, (error) => {
            if(error){
                res.send(`Error: ${error}`);
            }else{
                res.send('Usuario creado correctamente')
            }
        });
    }else{
        const form = path.join(__dirname,'../../views/register');
        res.render(form, {
            'errors': errors.array(),
            'prev': req.body
        });
    }
}

module.exports = postRegister;