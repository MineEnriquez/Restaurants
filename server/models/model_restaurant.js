const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Restaurant name is required"], minlength: [3, "Restaurant name should be at least 3 characters long"] },
    cusine: { type: String, required: [true, "Cusine is required"], minlength: [3, "Cusine should be at least 3 characters long"] },
    averagerate: 0,
    arrayratings: [{
        customer: { type: String, minlength: [3, "Restaurant name should be at least 3 characters long"] },
        rating: 0,
        comment: { type: String, minlength: [3, "Restaurant name should be at least 3 characters long"] },
    }]

}, { timestamps: true })
const Restaurant = mongoose.model('restaurants', RestaurantSchema);

//Exports:
module.exports = {
    Restaurant: Restaurant,
};
