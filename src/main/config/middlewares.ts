import { Express } from 'express'

import { cors } from '../middlewares/cors'
import { bodyParser } from '../middlewares/bodyParser'
import { defaultContentType } from '../middlewares/defaultContentType'

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(defaultContentType)
}
