const Gallery = require('../models/gallery')
const Team = require('../models/team')
const Init = require('../models/initiative')
const Auth = require('../models/authority')
const Partner = require('../models/partner')
const Blog = require('../models/blogs')
const News = require('../models/News')

//gallery
exports.postGallery = async (req,res)=>{
    let prod = req.file.path
    console.log(prod)
    const galleryImg = new Gallery()
    galleryImg.image = prod.replace('public','')
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
     let img = req.file.path
     const teams = new Team()
     teams.name = data.name
     teams.email = data.email
     teams.phone = data.phone
     teams.year = data.year
     teams.post = data.post
     teams.LinkedinId = data.linkedIn
     teams.image = img.replace('public','')
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
    let img = req.file.path
    let init = new Init()
    init.eventName = data.name
    init.sub = data.sub
    init.sponsor = data.sponsor
    init.date = data.date
    init.description = data.description
    init.image = img.replace('public','')
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
    let data = JSON.parse(req.body.auth)
    let img = req.file.path
    let auth = new Auth()
    auth.name = data.name
    auth.designation = data.designation
    auth.image = img.replace('public','')
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

exports.postNews = async(req,res)=>{
    let data = JSON.parse(req.body.news)
    let img = req.file.path
    let news = new News ()
    news.headline=data.headline
    news.link = data.link
    news.img = img.replace('public','')
    try{
        await news.save()
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

exports.postBlog = async (req,res) =>{
    let data = req.body
    let blog = new Blog ()
    blog.title = data.title
    blog.sub = data.sub
    blog.image = data.imageLink
    blog.description = data.description
    try{
        await blog.save()
        res.json({msg:'Details upload successfully',status:200})
        console.log('Success!')
    }
    catch(e){
        res.json({error:e.message,status:404})
        console.log(e)
    }
}