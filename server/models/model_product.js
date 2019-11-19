const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Product name is required"], minlength: [3, "Product name should be at least 3 characters long"] },
    quantity: 0,
    price: 0,
    myid: 0
}, { timestamps: true })

ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'myid' });

const Product = mongoose.model('products', ProductSchema);

//Exports:
module.exports = {
    Product: Product,
};
