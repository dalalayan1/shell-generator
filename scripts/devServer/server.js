const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const open = require('open');
open('http://localhost:7001');

app.use('/', express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(7001, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7001');
});

