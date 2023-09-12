const users = require('../../database/users.json');

const infoUsers = users.map((user) => {
    return {
        id: user.id,
        firstName: user.name.firstname,
        lastName: user.name.lastname,
        email: user.email,
        phone: user.phone
    }
})

const getAllUsers = (req,res) => {
    res.send(infoUsers);
}

module.exports = getAllUsers;