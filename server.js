const express = require('express')
require('./utils/database')
 const path = require('path')
// const teamRoute = require('./routes/team')
const galleryRoute = require('./routes/gallery')
const adminRoute = require('./routes/admin')

const app = express()

const port = process.env.PORT || 5000   

app.use(express.json())

// app.use(teamRoute)
// app.use(galleryRoute)
app.use('/admin',adminRoute)
app.use(galleryRoute)

app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.get('/',(req,res)=>{
    res.send('Hello NITH!')
})

app.listen(port,()=>{
    console.log('Server is connected at '+ port)
})