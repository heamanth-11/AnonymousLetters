const mongoose = require("mongoose")

const letterSchema = mongoose.Schema({to:String,message:String,from:String});

const LetterModel = mongoose.model("LetterModel",letterSchema)

module.exports = LetterModel;