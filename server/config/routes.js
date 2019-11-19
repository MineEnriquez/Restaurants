const Restaurants = require('../controllers/ctrl_restaurants');
const Products = require('../controllers/ctrl_products')
var path = require('path');

module.exports = function (app) {
    app.post('/e2etest', (req, res) => {Restaurants.e2etest(req, res);});
    
    //POST
    app.post('/api/restaurants/newrestaurant', (req, res) => {Restaurants.newrestaurant(req, res);});
    app.post('/api/restaurants/Update/:id', (req,res)=> {Restaurants.updateId(req, res);});
    app.post('/api/restaurants/addrating/:id', (req,res)=> {Restaurants.appendto_arrayratings(req, res);});
    //GET
    app.get('/api/restaurants/retrieveall', (req,res)=> {Restaurants.retrieveAll(req, res);});
    app.get('/api/restaurants/retrieveId/:id', (req,res)=> {Restaurants.retrieveId(req, res);});
    
    app.delete('/api/restaurants/Delete/:id', (req,res)=> {Restaurants.deleteId(req, res);});

//***********PRODUCTS ******************/    
    //POST
    app.post('/api/products/newproduct', (req, res) => {Products.newproduct(req, res);});
    app.post('/api/products/Update/:id', (req,res)=> {Products.updateId(req, res);});
    
    //GET
    app.get('/api/products/retrieveall', (req,res)=> {Products.retrieveAll(req, res);});
    app.get('/api/products/retrieveId/:id', (req,res)=> {Products.retrieveId(req, res);});
    
    //DELETE
    app.delete('/api/products/Delete/:id', (req,res)=> {Products.deleteId(req, res);});

    // Enabling Angular routes:
    app.get("*");
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}