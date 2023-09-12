const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes');

const server = express();

server.use(morgan('dev'));

server.get('/', (req,res) => res.send('Im Here'));

server.use(userRoutes);

module.exports = server;