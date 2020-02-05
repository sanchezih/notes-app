const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//inicializaciones
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//vistas
app.engine('.hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); //sirve para que los forms puedan enviar otros metodos mas alla de post y get
app.use(session({
    secret: 'mysecretapp',
    resave: 'true',
    saveUninitialized: 'treu'
}));

//variables globales

//routes

//archivos estaticos

//server inicializado
app.listen(app.get('port'), function () {
    console.log('server listen on port', app.get('port'));
});