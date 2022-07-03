import { app } from './config/app'

const serverPort = 3333

app.listen(serverPort, () => console.log(`Server started at port ${serverPort}`))
