const mongoose= require("mongoose")
const pokeSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    powers:{
        type: String,
        required: false
    }
})

module.exports= mongoose.model('Pokemon', pokeSchema)