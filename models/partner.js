const mongoose = require('mongoose')

const partnerSchema  = new mongoose.Schema({
    imageURL:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

})

const Partner = mongoose.model('Partner',partnerSchema)

module.exports = Partner