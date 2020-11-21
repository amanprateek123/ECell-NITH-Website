const mongoose = require('mongoose')
const validator = require('validator')

const teamSchema  = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number,
        maxlength:10
    },
    year:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        lowercase:true
    },
    post:{
        type:String
    },
    LinkedinId:{
        type:String
    },
    image:{
        type:Buffer    //image stored in form of buffer in database
    }

})

const Team = mongoose.model('Team',teamSchema)

module.exports = Team