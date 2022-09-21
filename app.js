const express = require('express')
const app = express()
const cors=require('cors')
const tourRoute=require('./router/tour.router')

//middleware

app.use(express.json())
app.use(cors())


app.use('https://backend-tour-7zr650m2w-wasiushisir.vercel.app/api',tourRoute)


app.get('https://backend-tour-7zr650m2w-wasiushisir.vercel.app/', (req, res) => {
    res.send('route is working!')
  })

  module.exports=app;