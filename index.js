var express = require('express');
var morgan = require('morgan');
var app = express();


app.enable('trust proxy');

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/headers', function (req, res) {
  res.send(req.headers)
});

app.get('/env', function (req, res) {
  res.send(process.env)
});

app.get('/do-error', function (req, res) {
  throw new Error('boom!');
});

app.get('/do-error-async', function (req, res) {
  process.nextTick(function () {
    throw new Error('boom!');
  });
});


var port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) {
    throw err;
  }

  console.log('Listen to http://localhost:' + port);
});
