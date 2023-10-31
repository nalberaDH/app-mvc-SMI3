const db = require('../../database/models') ;

const confirmModify = (req,res) => {
    const { id } = req.params;
    const {firstName, lastName, phone } = req.body;

    db.Users.update(
        {
            firstName,
            lastName,
            phone
        },
        {
            where:{
                id
            }
        }
    ).then(() => res.send('Usuario modificado correctamente'))
     .catch((error) => res.send(error))
}

module.exports =  confirmModify;