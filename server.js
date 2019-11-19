const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');
require('./server/config/mongoose.js');

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/client/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require ('./server/config/routes.js')(app);

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(flash());
