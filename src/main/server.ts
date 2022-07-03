import express from 'express'

const app = express()
const serverPort = 3333

app.listen(serverPort, () => console.log(`Server started at port ${serverPort}`))
