const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Product name is required"], minlength: [3, "Product name should be at least 3 characters long"] },
    quantity: 0,
    price: 0,
    myid: 0
}, { timestamps: true })
const Product = mongoose.model('products', ProductSchema);

//Exports:
module.exports = {
    Product: Product,
};
