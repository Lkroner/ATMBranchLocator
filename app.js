var express = require('express');
var app = express();

app.use(express.static('public'));

// TODO: Hook up get route. For when querying by current location is implemented.
// app.get('/', function(req, response){
//   response.sendFile(__dirname + 'public/index.html');
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// =========================================
// PROXY SERVER-SIDE CODE
// =========================================

// var express = require('express');

// var portNumber = 3001;
// var app = express();

// app.get("/", function (req, res) {
//   res.send({ response: "This is data returned from the server, proxy style!"  });
// })

// app.listen(portNumber);

// console.log("Responding server listening on port "+portNumber);