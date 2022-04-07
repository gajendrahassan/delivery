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
      origin: "http://localhost:3000"
    }
  }
})


io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.emit("message", {msg:"welcome to chat bot"})

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
require('dotenv').config()
require('./helper/db.connect')

const port = process.env.port || 5000
app.use(morgan('dev'))
app.use(cors())

app.use('/api', delivery)

app.use( async (req, res, next)=>{

  next(createError.NotFound())
})



app.use((err, req, res, next)=>{

  res.status(err.status).send({
    error:{
      status:err.status || 500,
      message:err.message || 'somthin went wrong!'
    }
  })
})


server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
})


