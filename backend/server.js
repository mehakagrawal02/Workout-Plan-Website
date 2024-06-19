require('dotenv').config()

const express = require('express')
const app = express()
const workoutRoutes=require('./routes/workout')
const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser : true })


const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('Connected to Database'))

app.use(express.json())

app.use('/api/workouts',workoutRoutes)
app.listen(process.env.PORT,()=>
    {
        console.log('listening to port',process.env.PORT)

    })