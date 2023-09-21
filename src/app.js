const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');

const path = require('path');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');

const server = express();

server.use(morgan('dev'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname,'../public')));

//manejar data desde un formulario html
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//reconoce put y delete como tal
server.use(methodOverride('_method'));

server.get('/', (req,res) => res.sendFile(path.join(__dirname,'../public/html/landing.html')));

server.use(userRoutes);
server.use(productRoutes);

module.exports = server;