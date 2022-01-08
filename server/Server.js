const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const LetterModel = require("./Models/lettermodel")
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



mongoose.connect('mongodb://localhost:27017/AnonymousLetter', {useNewUrlParser: true, useUnifiedTopology: true});


const port = "8000"
app.listen(port ,function(req,res){
    console.log("server started in port " + port);
})
app.post("/insert",(req,res)=>{
  
     const letter = new LetterModel({to:req.body.to,message:req.body.message,from:req.body.from})
    try{
        letter.save()
    }catch(err){
        console.log(err)
    }
})
app.get("/",function(req,res){
    LetterModel.find({},(err,FoundLetters)=>{
        if(!err){
            try{
                console.log(FoundLetters)
                res.json(FoundLetters)
            }catch(err){
                console.log("hi")
                // console.log(err)
            }
         
        }
        else{
            console.log("hello")
            console.log(err)
        }
    })

    
})