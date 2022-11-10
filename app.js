const express= require('express');
const app=express();
app.get("/", function(req, res){
    res.send("Hello BabyDoll its working");
})
app.listen(3000, function(){
    console.log("Listen to port 3000");
})
    