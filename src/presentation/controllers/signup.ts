import { IController } from '../protocols/controller'
import { IHttpRequest, IHttpResponse } from '../protocols/http'
import { IEmailValidator } from '../protocols/emailValidator'
import { badRequest } from '../helpers/httpHelper'
import { MissingParamError } from '../errors/missingParamError'
import { InvalidParamError } from '../errors/invalidParamError'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  public async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const emailIsValid = this.emailValidator.isValid(httpRequest.body.email)

    if (!emailIsValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
