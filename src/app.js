const express = require('express');
const morgan = require('morgan');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');

const server = express();

server.use(morgan('dev'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname,'../public')));

server.get('/', (req,res) => res.sendFile(path.join(__dirname,'../public/html/landing.html')));

server.use(userRoutes);
server.use(productRoutes);

module.exports = server;