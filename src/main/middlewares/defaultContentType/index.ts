import { NextFunction, Request, Response } from 'express'

export const defaultContentType = (_: Request, response: Response, next: NextFunction): void => {
  response.contentType('json')

  next()
}
