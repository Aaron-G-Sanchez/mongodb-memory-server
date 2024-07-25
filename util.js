const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')

let mongoServer

const dbConnect = async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  console.log(uri)

  await mongoose.connect(uri)
}

const dbDisconnect = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}

module.exports = {
  dbConnect,
  dbDisconnect
}
