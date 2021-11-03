import { ServerError } from '../errors'
import { IHttpResponse } from '../protocols'

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const successResponse = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
})
