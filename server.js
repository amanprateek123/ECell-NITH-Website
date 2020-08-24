const express = require('express')
require('./utils/database')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello NITH!')
})

app.listen(port,()=>{
    console.log('Server is connected at '+ port)
})