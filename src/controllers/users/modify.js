const db = require('../../database/models');
const path = require('path');

const modify = (req,res) => {
    const { id } = req.params;
    //const id = req.params.id
    db.Users.findByPk(id).then((user) => {
        if(!user) return res.send('Usuario no encontrado');

        const form = path.join(__dirname,'../../views/modifyUser');

        res.render(form,{ user });
        //res.send(user);
    }).catch((error) => res.send(error))
}

module.exports = modify;