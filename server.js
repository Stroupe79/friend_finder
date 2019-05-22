require('dotenv').config();
const express = require("express")
const path = require("path")
const mysql = require ("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  