console.log('start');
var express = require('express');
var app = express();

var employees = 
app.get('/employees', (req, res) => {
    res.send('hello');
});

app.listen(1234);