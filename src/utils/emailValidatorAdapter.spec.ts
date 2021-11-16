import { EmailValidatorAdapter } from './emailValidatorAdapter'

describe('EmailValidatorAdapter', () => {
  test('Should return false if validator returns false', async () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })
})
