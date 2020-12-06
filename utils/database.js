const mongoose = require('mongoose')
const connection = process.env.mongoUrl || "mongodb+srv://ecellnith:Aman123@@cluster0.px0yn.mongodb.net/test"

mongoose.connect(connection,{useNewUrlParser:true,useCreateIndex:'true',useFindAndModify:false,useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})
