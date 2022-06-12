const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
const port = process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({origin:"*"}))

app.use('/api/events', require('./routes/eventRoute'))
app.use('/api/users', require('./routes/userRoute'))

app.use(errorHandler)

app.listen(port, () => console.log('Server started...!'))