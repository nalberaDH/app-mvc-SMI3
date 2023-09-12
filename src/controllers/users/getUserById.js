const users = require('../../database/users.json');

//req: request res: response
const getUserById = (req,res) => {
    const { id } = req.params;
    
    const user = users.find((user) => user.id == id);

    if(!user){
        return res.send('User not found');
    } 

    const infoUser = {
        id: user.id,
        firstName: user.name.firstname,
        lastName: user.name.lastname,
        email: user.email,
        phone: user.phone
    }

    res.send(infoUser)
}

module.exports = getUserById;