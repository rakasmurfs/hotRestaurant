//Create express server
//Create a set of routes for API/HTML pages
//Read data from user input (Name, phone number, email)
//Store data into an array of objects
//Indicate whether they have one of 5 tables or if they are on the waiting list

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var sql = require("mysql")

// Sets up the Express App
// =============================================================
var app = express();

app.use(express.json())
var PORT = 3000;
var reservations = [];
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send(request.body);
})
app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "../../reservation.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "../../tables.html"));
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});