const Gallery = require('../models/gallery')


//gallery
exports.postGallery = async (req,res)=>{
    console.log(req.body)
    //    const gallery = new Gallery(req.body)
       try{
        //    await gallery.save()
           res.json({message:"Upload successfully"})
       }
       catch(e){
           console.log(e)
           res.json({message:e.message})
       }
}