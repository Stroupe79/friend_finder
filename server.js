require('dotenv').config();
const express = require("express")
const path = require("path")
const mysql = require ("mysql");

var app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
//   });







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  