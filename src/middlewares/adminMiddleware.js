

const isUser = (req,res,next) => {
    
    const isuser = true;

    if(!isuser){
        res.send('Debe ser usuario administrador');
    } 

    next();
}

module.exports = isUser;