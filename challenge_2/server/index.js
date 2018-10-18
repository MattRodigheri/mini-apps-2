const express = require('express');
const request = require('request');
const moment = require('moment');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + './../public'));

var startDate = moment().subtract(10, 'days').format('YYYY-MM-DD');
var endDate = moment().format('YYYY-MM-DD');

app.get('/coinData', (req, res) => {
  request(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`, function(err, data) {
    if (err) {
      res.send(err).status(500);
      console.log(err)
    } else {
      res.send(data.body)
    }
  })
})






app.listen(3000, () => console.log('listening on port 3000!'));
