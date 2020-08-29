const express = require('express')
require('./utils/database')
 
// const teamRoute = require('./routes/team')
const galleryRoute = require('./routes/gallery')
const adminRoute = require('./routes/admin')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

// app.use(teamRoute)
// app.use(galleryRoute)
app.use('/admin',adminRoute)


app.get('/',(req,res)=>{
    res.send('Hello NITH!')
})

app.listen(port,()=>{
    console.log('Server is connected at '+ port)
})