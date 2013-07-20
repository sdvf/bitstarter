var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var fs = require('fs');
  var input = fs.readFileSync('./index.html').toString();
  console.log(input);
  response.send(input);    
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
