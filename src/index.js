const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
const cors = require('cors')
const socketIO = require('socket.io');

const  http = require('http')

const app = express()


const server = http.createServer(app)
const io = socketIO(server, {
  transports:['polling'],
  cors:{
    cors: {
      origin: "*"
    }
  }
})


io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.emit("message", {msg:"Node Socket connected Succefully!"})

  socket.on('message', (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(`socket ${socket.id} disconnected`);
  })
})

module.exports.io = io


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const delivery = require('./router/delivery')
const order = require('./router/order')


require('dotenv').config()
require('./helper/db.connect')

const port = process.env.port || 5000
app.use(morgan('dev'))
app.use(cors())

app.use('/api', delivery)
app.use('/api', order)


app.use( async (req, res, next)=>{

  next(createError.NotFound())
})



app.use((err, req, res, next)=>{

  res.status(err.status).json({
    error:err
  })
})


server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
})


