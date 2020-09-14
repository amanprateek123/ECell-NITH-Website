const express = require('express')
const adminCtrl = require('../controllers/admin')
const multer = require('multer')

const router = new express.Router()

const upload = multer({
    limits:{
        fileSize:100000
    },
    fileFilter(req,file,cb){
          if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
              return cb(new Error('Please upload valid image!'))
          }
          cb(undefined,true)
    }
})

//gallery
router.post('/gallery',upload.single('gallery'),adminCtrl.postGallery)

module.exports = router