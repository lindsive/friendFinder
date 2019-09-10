// Loading Data
var friendData = require("../data/friends");

// Routing
module.exports = function(app) {

    // GET Request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // POST Request
    app.post("/api/survey", function(req, res) {
        res.json(req.body);
    });
};