// Import express.js library
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`Server is listening at port: ${PORT}`);
});