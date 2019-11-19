const mongoose = require('mongoose');
const MongModels = require('../models/model_restaurant');
const flash = require('express-flash');
const Restaurant = MongModels.Restaurant;

module.exports = {
    e2etest: function (req, res) {
        console.log("Client - Server E2E test: ");
        console.log(`Post event recived value: ${req.body.data}`);
        console.log();
    },
    retrieveAll: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve all documents")
        Restaurant.find()
            .sort({ name: 'ascending' })
            .then(restaurants => {
                console.log(restaurants);
                res.json(restaurants);   // NOTE: if API then we should return only the JSON object.
            })
            .catch(err => res.json(err));
    },
    retrieveId: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve one document");
        console.log(req.params.id[0])
        Restaurant.find({ _id: req.params.id })
            .sort({ "arrayratings.rating": 1 })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    updateId: function (req, res) {
        console.log("--------------------------");
        console.log("UPDATE BY ID a document");
        console.log(req.body);
        Restaurant.update({ _id: req.params.id }, req.body)
            .then(data => {
                res.json(data)
            }
            )
            .catch(err => res.json(err));
    },

    appendto_arrayratings: function (req, res) {
        console.log("--------------------------");
        console.log("RATE Restaurant - add a rating to the array ");
        console.log(req.params.id)
        console.log(req.body);

        Restaurant.updateOne({ _id: req.params.id }, {
            $push: {
                arrayratings: {
                    $each: [req.body],
                    $sort: { rating: -1 }
                }
            }
        })
            .then(data => {
                console.log(data);
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },

    deleteId: function (req, res) {
        console.log("--------------------------");
        console.log(`*** Deleting:   ${req.params.id}`);
        Restaurant.deleteOne({ _id: req.params.id })
            .then(data => {
                res.json({ "Data removed": req.params.name })
            })
            .catch(err => res.json(err));
    },
    newrestaurant: function (req, res) {
        console.log("Add a new record/document");
        _newrestaurant = req.body;
        console.log("---------------------------");
        console.log(_newrestaurant);
        restaurant = new Restaurant(_newrestaurant);
        restaurant.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error creating a new Restaurant record");
                res.json(err);
            });
    }

}