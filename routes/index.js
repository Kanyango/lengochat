var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');


/* GET home page. */

module.exports = function(app, passport) {
    
app.get('/', function(req, res, next) {
  Product.find(function(err, docs){
      res.render('login', { title: 'Express', products: docs });
  });
});
    
app.get('/dashboard', function(req, res, next) {
 
      res.render('dashboard', { title: 'Dashboard'});
});

app.get('/add-to-cart/:id', function(req, res, next){
    
    var prodId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {})
//    
//    Product.findById(prodId, function(err, product){
//        if(err)
//            {
//                return res.redirect('/')
//            }
//        cart.add(product, prodId);
//        req.session.cart = cart;
//        console.log(req.session.cart);
//        res.redirect('/');
//    })
})
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
            successRedirect : '/dashboard',
            failureRedirect : '/'
        }));

}