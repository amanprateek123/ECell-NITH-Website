const Gallery = require('../models/gallery')

//gallery
exports.postGallery = async (req,res)=>{
    console.log(req.body)
       const galleryImg = new Gallery()
       try{
           await galleryImg.save()
           res.send({message:"Upload successfully"})
       }
       catch(e){
           console.log(e)
           res.json({message:e.message})
       }
}