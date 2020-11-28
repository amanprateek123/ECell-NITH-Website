const mongoose = require('mongoose')

const newsSchema  = new mongoose.Schema({
    headline:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    img:{
        type:String,
    }
})

const News = mongoose.model('News',newsSchema)

module.exports = News