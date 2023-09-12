const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');

const server = express();

server.use(morgan('dev'));

server.get('/', (req,res) => res.send('Im Here'));

server.use(userRoutes);
server.use(productRoutes);

module.exports = server;