const express = require("express")

var app = express();


exports.home = app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

