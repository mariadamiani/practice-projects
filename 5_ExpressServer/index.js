const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Respond to GET on root
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// Respond to GET on /calculator
app.get("/calculator", function(req, res){
  res.sendFile(__dirname + "/calculator.html");
});

// Respond to POST on /calculator
app.post("/calculator", function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Giddyup - the answer is " + result + "!");

});

// Respond to GET on /weather
app.get("/weather", function(req, res){
  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.0502&lon=93.1566&appid=a28035a0d2044703450e877cb3ecf3ea";
  https.get(weatherURL, function(response) {
    console.log(response);
  })
  res.send("Weather Coming Soon");
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
