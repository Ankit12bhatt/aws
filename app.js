const express= require('express');
const app=express();
app.set('view engine', 'ejs')
app.get("/", function(req, res){
    res.render("pages/index");
})


port= process.env.port || 3000;
app.listen(port, function(){
    console.log("Listening  to you",port);
    console.log(" 3000");
})
     