var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



/*1  ddeclaracion de las rutas 
generacion de una variable que requiere de la carpeta rutas y el documento index  */
var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros');
var saboresRouter = require('./routes/sabores');
var contactosRouter = require('./routes/contactos');
var galeriaRouter = require('./routes/galeria');
var novedadesRouter = require('./routes/novedades');
var ofertasRouter = require('./routes/ofertas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* 2 apertura de las rutas ***************************************************************** */
app.use('/', indexRouter);
 app.use('/nosotros', nosotrosRouter);
app.use('/sabores', saboresRouter);
app.use('/contactos', contactosRouter); 
app.use('/novedades', novedadesRouter); 
app.use('/ofertas', ofertasRouter); 
app.use('/galeria', galeriaRouter); 




app.get('/prueba', function (req,res){
  res.send('Probando el get en prueba');
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
