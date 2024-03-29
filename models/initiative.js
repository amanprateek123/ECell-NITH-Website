const mongoose = require('mongoose')
const validator = require('validator')

const teamSchema  = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
    sponsor:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String   //image stored in form of buffer in database
    }

})

const Init = mongoose.model('Init',teamSchema)

module.exports = Init