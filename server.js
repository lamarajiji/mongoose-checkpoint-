const express = require('express')
const app=express()
require('dotenv').config()
app.use(express.json())
const connectDB = require('./config/connectDB')
connectDB()
app.use('/api/person',require('./routes/person'))

const PORT= process.env.PORT || 3001
 app.listen(PORT, error =>
    error?console.log(error)
    :
    console.log(`server is running on port ${PORT}....`))