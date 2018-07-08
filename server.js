var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.use(express.static('./app/data'))



// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname + 'home.html'));
// });
// app.get("/survey", function(req,res){
//   res.sendFile(path.join(__dirname + 'survey.html'));
// });

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });