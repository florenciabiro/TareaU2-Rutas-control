var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.send( 'Estamos en sercvicios' );
}); */

router.get('/', function(req, res, next) {
  res.render('sabores');
});

module.exports = router;