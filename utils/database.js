const mongoose = require('mongoose')
const connection = process.env.mongoUrl || "mongodb://127.0.0.1:27017/E-Cell-NITH"

mongoose.connect(connection,{useNewUrlParser:true,useCreateIndex:'true',useFindAndModify:false,useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})
