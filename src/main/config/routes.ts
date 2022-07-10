import { Express, Router } from 'express'
import FG from 'fast-glob'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  FG.sync('**/src/main/routes/**.router.ts').map(async filePath => (await import(`../../../${filePath}`)).default(router))
}
