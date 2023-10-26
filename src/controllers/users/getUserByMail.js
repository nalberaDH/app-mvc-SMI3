const db = require('../../database/models');

const path = require('path');

const getUserByMail = (req,res) => {
    const { email } = req.query;

    const dir = path.join(__dirname,'../../views/userdetail');

    db.Users.findOne({
        where: {
            email
        }
    }).then((user) => {
        //res.send(user);
        if(user){
            res.render(dir,{user})
        }else{
            res.send('User not found');
        }
    }).catch((error) => res.send(error));
}

module.exports = getUserByMail;