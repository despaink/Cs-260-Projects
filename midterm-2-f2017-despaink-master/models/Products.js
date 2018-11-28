var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  price: {type:Number},
  picture: String,
  purchases: {type: Number, default: 0},
});

ProductSchema.methods.purchase = function(cb) {
  this.purchases += 1;
  this.save(cb);
};

mongoose.model('Product', ProductSchema);

