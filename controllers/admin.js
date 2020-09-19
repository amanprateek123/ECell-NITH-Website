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
     let data = JSON.parse(req.body.team)
     let img = req.file.buffer
     const teams = new Team()
     teams.name = data.name
     teams.email = data.email
     teams.phone = data.phone
     teams.post = data.post
     teams.LinkedinId = data.linkedIn
     teams.image = img
     try{
         await teams.save()
         res.json({msg:'Details upload successfully',status:200})
     }
     catch(e){
         res.json({error:e.message,status:404})
         console.log(e)
     }
}
