const users = require('../../database/users.json');
const path = require('path');
//req: request res: response
const getUserById = (req,res) => {
    
    let ruta = path.join(__dirname,'../../views/userdetail');

    const { id } = req.params;
    
    const user = users.find((user) => user.id == id);

    if(!user){
        //return res.send('User not found');
        ruta = path.join(__dirname,'../../views/404notfound');
        return res.render(ruta, {message: 'User not found'});
    } 

    const infoUser = {
        id: user.id,
        firstName: user.name.firstname,
        lastName: user.name.lastname,
        email: user.email,
        phone: user.phone
    }

   
    
    res.render(ruta,{ user: infoUser });
    
    //res.send(infoUser)
}

module.exports = getUserById;