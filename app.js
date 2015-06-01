var app = require('express')();

app.get('/', function (req, res) {
  res.json({message: 'Hello World!'});
})

var server = app.listen(3000);
