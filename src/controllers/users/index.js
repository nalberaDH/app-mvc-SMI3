const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const login = require('./login');
const register = require('./register');
const postLogin = require('./postLogin');
const postRegister = require('./postRegister');
const getUserByMail = require('./getUserByMail');

module.exports = {
    getAllUsers,
    getUserById,
    login,
    register,
    postLogin,
    postRegister,
    getUserByMail
}