export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  serverPort: process.env.SERVER_PORT || 3333
}
