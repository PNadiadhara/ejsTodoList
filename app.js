//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// https://ejs.co/#install
app.set('view engine', 'ejs');

app.get("/", function(req, res){
   

    var today = new Date();
    var currentDay = today.getDay();
    var weekday=new Array(7);
    weekday[0]="Monday";
    weekday[1]="Tuesday";
    weekday[2]="Wednesday";
    weekday[3]="Thursday";
    weekday[4]="Friday";
    weekday[5]="Saturday";
    weekday[6]="Sunday";

    var day = "";
// res.send is final peice of info being sent, vs res.write
    if (currentDay === 6 || currentDay === 0 ) {
        
        day = weekday[currentDay]
        
        
    } else {
        
        day = weekday[currentDay]
        
    }
    // list referes to list from /views/list.ejs
    res.render("list", {kindOfDay: day})
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})