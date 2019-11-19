ECHOCE ON **** installing a new angular project ***

call npm init -y

call npm install express

call npm install express-session

call npm install bcrypt

call npm install nodemon

call npm install axios

call npm install express-flash

call npm install mongoose

md server
md server\config
md server\controllers
md server\models

@echo node_modules/ > .gitignore
@echo const express = require("express"); > server.js
@echo var mongoose = require('mongoose'); > server/config/mongoose.js
@echo Add your routes here...           > server/config/routes.js
@echo Add your controller code here and rename the file > server/controllers/ctrl_TBD.js
@echo const mongoose = require('mongoose'); >server/models/model_TBD.js

color 3
call ng new public --skip-git --routing

color 5
cd public
call ng generate service http

color 7

call ng generate component retrieveall
call ng generate component xxxbetaxxx