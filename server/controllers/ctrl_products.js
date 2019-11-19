const mongoose = require('mongoose');
const MongModels = require('../models/model_product');
const flash = require('express-flash');
const Product = MongModels.Product;

module.exports = {
    e2etest: function (req, res) {
        console.log("Client - Server E2E test: ");
        console.log(`Post event recived value: ${req.body.data}`);
        console.log();
    },
    retrieveAll: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve all Product documents")
        Product.find()
            .sort({ myid: 'ascending' })
            .then(products => {
                console.log(products);
                res.json(products);   // NOTE: if API then we should return only the JSON object.
            })
            .catch(err => res.json(err));
    },
    retrieveId: function (req, res) {
        console.log("--------------------------");
        console.log("Retrieve one Product document");
        console.log(req.params.id[0])
        Product.find({ _id: req.params.id })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    updateId: function (req, res) {
        console.log("--------------------------");
        console.log("Given an ID, update a Product document");
        console.log(req.body);
        Product.update({ _id: req.params.id }, req.body)
            .then(data => {
                res.json(data)
            }
            )
            .catch(err => res.json(err));
    },
    deleteId: function (req, res) {
        console.log("--------------------------");
        console.log(`*** Deleting a Product:   ${req.params.id}`);
        Product.deleteOne({ _id: req.params.id })
            .then(data => {
                res.json({ "Data removed": req.params.name })
            })
            .catch(err => res.json(err));
    },
    newproduct: function (req, res) {
        console.log("Add a new record/document");
        _newproduct = req.body;
        console.log("---------------------------");
        console.log(_newproduct);
        product = new Product(_newproduct);
        product.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error creating a new Product record");
                res.json(err);
            });
    }

}