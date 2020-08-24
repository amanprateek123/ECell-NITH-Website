const express = require('express')
require('./utils/database')
 
const teamRoute = require('./routes/team')

const app = express()

app.use(teamRoute)

const port = process.env.PORT || 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello NITH!')
})

app.listen(port,()=>{
    console.log('Server is connected at '+ port)
})