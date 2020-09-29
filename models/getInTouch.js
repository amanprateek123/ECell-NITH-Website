const mongoose = require('mongoose')
const validator = require('validator')

const getSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    subject:{
        type:String
    },
    message:{
        type:String,
        required:true
    }

})

const GetInTouch = mongoose.model('GetInTouch',getSchema)

module.exports = GetInTouch