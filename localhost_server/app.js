// Import express.js library
const express = require('express');
const app = express();

// Setting up the '/' path GET request to load the index.html file
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Start the server on port 8080 and listen out for request
const PORT = 8080;
app.listen(PORT, function(){
    console.log(`Server is listening at port: ${PORT}`);
});