'use strict';


const express   = require('express');
const app       = express();
const path      = require('path');

/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/PUBLIC' + '/index.html'));
});
*/
app.use(express.static(path.join(__dirname, '/PUBLIC')));


app.listen(3000);
