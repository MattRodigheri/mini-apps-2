const express = require('express');
const request = require('request');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + './../public'));






app.listen(3000, () => console.log('listening on port 3000!'));
