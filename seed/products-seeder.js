var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/storeDB');
var products =
    [
        new Product({
                image_url: 'https://ucarecdn.com/df82414c-d7b2-4685-b39d-3d53ce8b7035/levismens505regularfitjean.jpg',
                title    : 'Mens Size 38 Jeans',
                price    : '1500'
            }),
        new Product({
                image_url: 'https://ucarecdn.com/8c899730-cec8-432a-9504-fdd14b424455/summerdresses.jpg',
                title    : 'Summer Dress',
                price    : '2500'
            }),
        new Product({
                image_url: 'https://ucarecdn.com/cce234da-f8a5-4be4-a6d4-2448aae5cf87/blouse.jpeg',
                title    : 'Official Top',
                price    : '1800'
            }),
        new Product({
                image_url: 'https://ucarecdn.com/97c0765b-cfce-4ada-9038-36898f479054/polo.jpeg',
                title    : 'Mens Polo',
                price    : '2200'
            }),
        
    ];

var done = 0;

for(var i = 0; i < products.length; i++)
    {
        products[i].save(function(err, result){
            done++;
            
            if(done === products.length)
                {
                    exit();   
                }
    
        })
    }
function exit()
{
    mongoose.disconnect();
}