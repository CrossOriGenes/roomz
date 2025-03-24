const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const authRoutes = require('./routes/auth')
const googleAuthRoutes = require('./routes/strategies')

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
)
app.use(passport.initialize())

/**
 * routes
**/ 
app.use('/api/auth/google', googleAuthRoutes)
app.use('/api/auth', authRoutes)
app.use('/', (req, res) => { 
  return res.status(200).send({
    success: true,
    message: "Server working✔️"
  })
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
  })
  console.log("Database connected✔️")
}).catch((err)=>{
  console.error(err || "FAILED TO CONNECT!")
})
