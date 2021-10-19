import { IHttpRequest, IHttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamError'

export class SignUpController {
  public async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
