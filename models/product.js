var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    
    image_url: {type: String},
    title    : {type: String},
    price    : {type: String}
})

module.exports = mongoose.model('Products', schema);

