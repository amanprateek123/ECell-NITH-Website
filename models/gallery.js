const mongoose = require('mongoose')
const validator = require('validator')

const gallerySchema  = new mongoose.Schema({
    image:{
        type:Buffer    //image stored in form of buffer in database
    }
})

const Gallery = mongoose.model('Gallery',gallerySchema)

module.exports = Gallery