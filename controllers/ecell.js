const Gallery = require('../models/gallery')


//gallery
exports.postGallery = async (req,res)=>{
    const gallery = new Gallery(req.body)
    try{
        await gallery.save()
        res.status(201).send({message:'Image Save sucessfully'})  
    }
    catch(e){
         res.status(401).send("Image upload failed")
    }
}

exports.getGallery = async (req,res)=>{
     Gallery.find({}).then(data => res.json(data)).catch(e=>{
         res.json(e)
     })
}