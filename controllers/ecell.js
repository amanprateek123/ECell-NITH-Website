const Gallery = require('../models/gallery')


//gallery
exports.postGallery = async (req,res)=>{
    res.send("Uploaded")
}

exports.getGallery = async (req,res)=>{
     Gallery.find({}).then(data => res.json(data)).catch(e=>{
         res.json(e)
     })
}