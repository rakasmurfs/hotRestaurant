//Create express server
//Create a set of routes for API/HTML pages
//Read data from user input (Name, phone number, email)
//Store data into an array of objects
//Indicate whether they have one of 5 tables or if they are on the waiting list

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
//Prefilled are dummy variables.
var reservations = 
[
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "1",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "2",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "3",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "4",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "5",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "6",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "7",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    }
];
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../../reservation.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../../tables.html"));
  });

app.get("/api/waitlist", function(req, res){
    if(reservations.length>4)
    {
        var afterFive=[];
       for (var i = 5; i < reservations.length; i++) 
        {
            afterFive.push(reservations[i]);
        };
        return res.json(afterFive);

    };
  
    return res.json(false);
  });
app.get("/api/tables", function(req, res) {
    if(reservations)
    {
        var firstFive=[];
       for (var i = 0; i <=4; i++) 
        {
            firstFive.push(reservations[i]);
        };
        return res.json(firstFive);

    };
  
    return res.json(false);
  });





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });