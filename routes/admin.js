const express = require('express')
const adminCtrl = require('../controllers/admin')
const multer = require('multer')
const path = require('path')

const router = new express.Router()

// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join('public', 'images'))
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname + '_' + new Date().getTime())
//     }
// });

const upload = multer({
    limits:{
        fileSize:1000000000
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