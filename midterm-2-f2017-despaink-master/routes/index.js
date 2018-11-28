var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.get('/shopping', function(req, res, next) {
  Product.find(function(err, products){
    if(err){ return next(err); }
    res.json(products);
  });
});

router.post('/shopping', function(req, res, next) {
  var product = new Product(req.body);
  product.save(function(err, product){
    if(err){ return next(err); }
    res.json(product);
  });
});

router.param('product', function(req, res, next, id) {
  Product.findById(id, function (err, product){
    if (err) { return next(err); }
    if (!product) { return next(new Error("can't find product")); }
    req.product = product;
    return next();
  });
});

router.get('/shopping/:product', function(req, res) {
  res.json(req.product);
});

router.put('/shopping/:product/shop', function(req, res, next) {
  req.product.purchase(function(err, product){
    if (err) { return next(err); }
    res.json(product);
  });
});


router.delete('/shopping/:product', function(req, res) {
  console.log("in Delete");
  req.product.remove();
  res.sendStatus(200);
});

module.exports = router;
