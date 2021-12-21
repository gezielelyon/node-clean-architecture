import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('value_hashed'))
  }
}))

describe('BcryptAdapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a value hashed on success', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const valueHashed = await sut.encrypt('any_value')

    expect(valueHashed).toBe('value_hashed')
  })
})
