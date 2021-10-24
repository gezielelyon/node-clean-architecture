export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Param ${paramName} is invalid`)
    this.name = 'Invalid Param'
  }
}
