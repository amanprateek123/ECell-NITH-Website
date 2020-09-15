const Gallery = require('../models/gallery')

//gallery
exports.postGallery = async (req,res)=>{
    let prod = req.file.buffer
    console.log(req)
       const galleryImg = new Gallery()
       galleryImg.image = prod
       try{
           await galleryImg.save()
           res.send({message:"Upload successfully"})
       }
       catch(e){
           console.log(e)
           res.json({message:e.message})
       }
}