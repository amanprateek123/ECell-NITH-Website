// const multer = require('multer')

// const upload = multer({
//     limits:{
//         fileSize:1000000000
//     },
//     fileFilter(req,file,cb){
//           if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
//               return cb(new Error('Please upload valid image!'))
//           }
//           cb(undefined,true)
//     }
// })

// module.exports = upload

const multer = require('multer');
const path = require('path')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('public', 'images'))
    },
    filename: (req, file, cb) => {
        cb(null, '_' + new Date().getTime())
    }
});

const fileFilter = (req, file, cb) => {
    if (['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(file.mimetype)) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

module.exports = multer({
    storage: fileStorage,
    fileFilter: fileFilter
}); 