var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {a
  var fs = require('fs');
  var array = fs.readFileSync('file.txt').toString().split("\n");
  for(i in array) {
    response.send(array[i]);
  }  
});


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
