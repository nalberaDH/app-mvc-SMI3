const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');

const session = require('express-session');

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

//configuración desession
server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));



//reconoce put y delete como tal
server.use(methodOverride('_method'));

server.get('/', (req,res) => res.sendFile(path.join(__dirname,'../public/html/landing.html')));

server.use(userRoutes);
server.use(productRoutes);

//middleware de error
server.use((req,res,next) => {
    //res.send('Recurso no encontrado');
    res.render(path.join(__dirname,'./views/404notfound'), {message: 'Recurso no encontrado'});
    next();
})
module.exports = server;