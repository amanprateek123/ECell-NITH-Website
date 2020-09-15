const Gallery = require('../models/gallery')


//gallery
exports.getGallery = async (req,res)=>{
   try{
    const gallery =  await Gallery.find({})
    res.set('Content-Type','image/jpg')
    res.send(gallery)
   }
   catch(e){
       res.status(404).send({error:e.message})
   }
    
}