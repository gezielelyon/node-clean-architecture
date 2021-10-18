export class SignUpController {
  public async handle (httpRequest: any): Promise<any> {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
