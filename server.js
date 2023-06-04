const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const morgan = require('morgan')



const PORT = 9000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
    res.send(
        'Welcome to the Homepage'
    )
})

app.use('/dogs', require('./routes/canineRouter'))

mongoose.connect('mongodb://127.0.0.1:27017/dogApp', () => {
    console.log('Connected to DB')
})

app.listen(PORT, () => {
    console.log(`Server is active on port: ${PORT}`)
})