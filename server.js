const dotenv = require('dotenv')
const express = require('express')

const connectDb = require('./db')
const errorHandler = require('./middlewares/error.middleware')

const bootcamps = require('./routers/bootcamp.router')
const courses = require('./routers/course.router')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

connectDb()

app.use(express.json())

// routes
app.use('/api/bootcamps', bootcamps)
app.use('/api/courses', courses)

app.use(errorHandler)

// server
const server = app.listen(PORT, console.log(`Server Live | PORT: ${PORT}`))
process.on('unhandledRejection', err => {
    console.log(`Rejection Error: ${err.message}`)
    server.close(() => process.exit(1))
})
