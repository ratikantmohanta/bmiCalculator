const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    //__dirname gives absolute path to current directory.
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("sum =" + result);
});

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = Math.round(weight/ Math.pow(height,2));
    res.send("BMI =" + bmi);
});


app.listen(19910, function () {
    console.log("Server Started at potrt 19910");
});