const mongoose = require('mongoose')
const validator = require('validator')

const authSchema  = new mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    }

})

const Auth = mongoose.model('Auth',authSchema)

module.exports = Auth