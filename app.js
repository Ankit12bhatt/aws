const express= require('express');
const app=express();
app.get("/", function(req, res){
    res.send("Hello BabyDoll its working");
})
port= process.env.port || 3000;
app.listen(port, function(){
    console.log("Listening  to you motherfyucing port 3000");
    console.log("HULLE HULARE HULLE HULEE HULEE");
})
    