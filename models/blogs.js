const mongoose = require('mongoose')
const validator = require('validator')

const blogSchema  = new mongoose.Schema({
    title:{
        type:String
    },
    sub:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    }

})

const Blog = mongoose.model('blog',blogSchema)

module.exports = Blog