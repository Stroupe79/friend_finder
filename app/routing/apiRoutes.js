const userList = require("../data/friends.js")
const path = require("path");


module.exports = function(app){  
   app.get("/app/data/friends", function(req, res) {
    res.json(userList);
  });
};

