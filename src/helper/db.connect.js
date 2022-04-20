const mongoose = require('mongoose')

mongoose
  .connect('mongodb://food911:p%40ssw0rd@43.240.67.103/food911db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => {
    console.log('mongodb connected.')
  })
  .catch((err) => console.log(err.message))

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to db')
})

mongoose.connection.on('error', (err) => {
  console.log(err.message)
})

mongoose.connection.on('disconnected', (err) => {
  console.log('Mongoose connection is disconnected.')
})

process.on('SIGINT', async () => {
  await mongoose.connection.close()
  process.exit(0)
})