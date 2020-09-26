const Gallery = require('../models/gallery')
const Team = require('../models/team')
const Init = require('../models/initiative')

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

exports.getTeam = async (req,res)=>{
    try{
        const team = await Team.find({})
        res.json(team)
    }
    catch(e){
        res.status(404).send({error:e.message})   
    }
}

exports.getEvent = async (req,res)=>{
    try{
        const event = await Init.find({})
        res.json(event)
    }
    catch(e){
        res.status(404).send({error:e.message})   
    }
}