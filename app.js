const express= require('express');
const app=express();
app.set('view engine', 'ejs')
app.get("/", function(req, res){
    res.render("pages/index");
})
app.get("/suchii", function(req, res){
    res.send("hey babydoll whtsup");

})
app.get("/sikhimaru", function(req, res){
   res.send("what a drag");
})
app.get("/stuti", function(req, res){
    res.send("shadi kr k fas gaya yr, aacha khasa tha kawara");

})

port= process.env.port || 3000;
app.listen(port, function(){
    console.log("Listening  to you motherfyucing",port);
    console.log("HULLE HULARE HULLE HULEE HULEE 3000");
})
     