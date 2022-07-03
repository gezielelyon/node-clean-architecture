import { NextFunction, Request, Response } from 'express'

export const cors = (_: Request, response: Response, next: NextFunction): void => {
  response.setHeader('access-control-allow-origin', '*')
  response.setHeader('access-control-allow-methods', '*')
  response.setHeader('access-control-allow-headers', '*')

  next()
}
