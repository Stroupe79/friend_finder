require('dotenv').config();
const express = require("express")
const path = require("path")
const mysql = require ("mysql");
require ("./app/routing/htmlRoutes")
require ("./app/routing/apiRoutes")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoutes;


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
//   });
















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  