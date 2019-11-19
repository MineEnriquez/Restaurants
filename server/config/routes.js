const Restaurants = require('../controllers/ctrl_restaurants');
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
    
    // Enabling Angular routes:
    app.get("*");
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}