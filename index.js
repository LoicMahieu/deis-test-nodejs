var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello World')
});


var port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) {
    throw err;
  }

  console.log('Listen to http://localhost:' + port);
});
