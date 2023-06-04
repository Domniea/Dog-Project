const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const PORT = 9000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

// error handler
app.use( ( err, req, res, next ) => {
    console.log( err )
    return res.send( { errMsg: err.message } )
} )

app.use('/dogs', require('./routes/canineRouter'))

mongoose.connect('mongodb+srv://domniea:password666@cluster0.ra81jxs.mongodb.net/group-project-dogs?retryWrites=true&w=majority', () => {
    console.log('Connected to DB')
})

app.listen(PORT, () => {
    console.log(`Server is active on port: ${PORT}`)
})