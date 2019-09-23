// Loading Data
var friendData = require("../data/friends");

// Routing
module.exports = function (app) {

    // GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // POST Request
    app.post("/api/survey", function (req, res) {
        var friendObj = {
            name: "",
            photo: "",
            answers: []
        };

        var newFriend = req.body

        res.json(newFriend);

        console.log(newFriend);

        for (var i = 0; i < friendData.length; i++) {
            var currentFriend = friendData[i];
            for (var j = 0; j < currentFriend.scores.length; j++) {
                console.log(currentFriend.scores);
                
                var add = (a, b) => a + b  
                
                var friendSum = currentFriend.scores.reduce(add); 
                
                console.log(friendSum);
            }
        };


    });
};