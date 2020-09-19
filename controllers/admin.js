const Gallery = require('../models/gallery')
const Team = require('../models/team')

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
//team
exports.postTeam = async (req,res)=>{
     let data = req.body
     const team = new Team(data)
     try{
         await team.save()
         res.json('Details upload successfully')
     }
     catch(e){
         res.json({error:e.message})
     }
}
