import MongoHelper from '../infra/db/mongodb/helpers/mongoHelper'
import envs from './config/env'

MongoHelper.connect(envs.mongoUrl)
  .then(async () => {
    const { app } = await import('./config/app')

    app.listen(envs.serverPort, () => console.log(`Server started at port ${envs.serverPort}`))
  }).catch(console.error)
