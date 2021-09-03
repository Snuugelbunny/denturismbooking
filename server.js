var express = require('express');
var cors = require('cors');
const winston = require('winston');

var app = express();

const PORT = 8081

//middleware
app.use(cors());

//routing


//initialize server
app.listen(PORT, function() {
    console.log("Server is now running on: ", PORT)
});