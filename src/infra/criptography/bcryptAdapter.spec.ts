import bcrypt from 'bcrypt'

import { BcryptAdapter } from './bcryptAdapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('value_hashed'))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a value hashed on success', async () => {
    const sut = makeSut()
    const valueHashed = await sut.encrypt('any_value')

    expect(valueHashed).toBe('value_hashed')
  })

  test('Should throw if bcrypt throws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockImplementation(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const promise = sut.encrypt('any_value')

    await expect(promise).rejects.toThrow()
  })
})
