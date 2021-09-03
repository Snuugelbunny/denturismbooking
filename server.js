var express = require('express');
var cors = require('cors');
const winston = require('winston');
const fs = require('firebase-admin');
var bodyParser = require('body-parser')

const serviceAccount = require('./key.json');

fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });

//route imports
var authRoute = require('./routes/auth.js');

var app = express();

const PORT = 8081

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))


//routing
app.use('/auth', authRoute);


//initialize server
app.listen(PORT, function() {
    console.log("Server is now running on: ", PORT)
});