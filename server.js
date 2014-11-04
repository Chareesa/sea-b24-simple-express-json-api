var express = require('express');
var app = express();
var port = process.env.PORT || 4918;

function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function lt() {
  var rightNow = new Date();
  return addZero(rightNow.getHours()) + ':' + addZero(rightNow.getMinutes());
}

app.get('/localTime', function (req, res) {
  res.json({'msg': 'Your local time is ' + lt()});
});

app.get('/name/:name', function (req, res) {
  res.json({'msg': 'Well, hello ' + req.params.name + '!'});
});

app.listen(port);

module.exports = app;
