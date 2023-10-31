const express = require('express');
const { body } = require('express-validator');
const path = require('path');

const router = express.Router();

const { 
    getAllUsers,
    getUserById,
    login,
    register,
    postLogin,
    postRegister,
    getUserByMail,
    modify,
    confirmModify
 } = require('../controllers/users');

const validateLogin = [
    body('email').isEmail().withMessage('Invalid mail'),
    body('password').notEmpty().withMessage('Enter a password')
];

const validateRegister = [
    body('email').isEmail().withMessage('Invalid mail'),
    body('password').notEmpty().withMessage('Enter a password'),
];


router.get('/users', getAllUsers);
router.get('/users/:id', getUserById)

router.get('/user', getUserByMail);

router.get('/login', login);
router.get('/register', register);

router.post('/login',validateLogin, postLogin);
router.post('/register', validateRegister, postRegister);

router.get('/user/modify/:id', modify);
router.put('/user/confirm-modify/:id', confirmModify);

router.get('/profile', (req,res) => {
    res.render(path.join(__dirname,'../views/userprofile'),{
        user: req.session.userLogged
    })
    //res.send(req.session.userLogged)
})

module.exports = router;