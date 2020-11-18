const Gallery = require('../models/gallery')
const Team = require('../models/team')
const Init = require('../models/initiative')
const Auth = require('../models/authority')
const Partner = require('../models/partner')

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

exports.postEvent = async (req,res)=>{
    let data = JSON.parse(req.body.event)
    let img = req.file.buffer
    let init = new Init()
    init.eventName = data.name
    init.sub = data.sub
    init.sponsor = data.sponsor
    init.date = data.date
    init.description = data.description
    init.image = img
    try{
        await init.save()
        res.json({msg:'Details upload successfully',status:200})
        console.log('Success!')
    }
    catch(e){
        res.json({error:e.message,status:404})
         console.log(e)
    }
}

exports.postAuth = async (req,res)=>{
    let data = req.body
    let auth = new Auth()
    auth.name = data.name
    auth.designation = data.designation
    auth.image = data.imageLink
    auth.description = data.description
    try{
        await auth.save()
        res.json({msg:'Details upload successfully',status:200})
        console.log('Success!')
    }
    catch(e){
        res.json({error:e.message,status:404})
        console.log(e)
    }

}

exports.postPartner = async (req,res)=>{
    let data = req.body
    const part = new Partner(data)
    try{
        await part.save()
        res.json({msg:'Details upload successfully',status:200})
        console.log('Success!')
    }
    catch(e){
        res.json({error:e.message,status:404})
        console.log(e)
    }
}