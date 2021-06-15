//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// https://ejs.co/#install
app.set('view engine', 'ejs');

app.get("/", function(req, res){
   

    var today = new Date();
    var currentDay = today.getDay();
// res.send is final peice of info being sent, vs res.write
    if (currentDay === 6 || currentDay === 0 ) {
        res.write("<h1>Happy Weekend</h1>")
    } else {
        res.sendFile(__dirname + "/index.html")
        
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})