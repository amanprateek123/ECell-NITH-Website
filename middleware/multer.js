const multer = require('multer')

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

module.exports = upload