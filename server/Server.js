const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



mongoose.connect('mongodb://localhost:27017/AnonymousLettermongod', {useNewUrlParser: true, useUnifiedTopology: true});


const port = "8000"
app.listen(port ,function(req,res){
    console.log("server started in port " + port);
})
app.post("/insert",async(req,res)=>{
    console.log("hi")
    console.log(req.body.from,req.body.message)
    console.log(req.body.to)
    console.log(req.body)
})
app.get("/",function(req,res){
    console.log(req.body.to)

    res.send("success")
})