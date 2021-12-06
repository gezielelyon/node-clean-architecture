import { IEncrypter } from './protocols'
import { DbAddAccount } from './index'

interface ISutTypes {
  sut: DbAddAccount
  encrypterStub: IEncrypter
}

const makeEncrypterStub = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    async encrypt (password: string): Promise<string> {
      return await new Promise((resolve, reject) => resolve('hashed_password'))
    }
  }

  return new EncrypterStub()
}

const makeSut = (): ISutTypes => {
  const encrypterStub = makeEncrypterStub()
  const sut = new DbAddAccount(encrypterStub)

  return {
    encrypterStub,
    sut
  }
}

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypter with correct password', async () => {
    const { encrypterStub, sut } = makeSut()

    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountParams = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    await sut.add(accountParams)

    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })

  test('Should throws if Encrypter throw', async () => {
    const { encrypterStub, sut } = makeSut()

    jest.spyOn(encrypterStub, 'encrypt').mockRejectedValueOnce(new Promise((resolve, reject) => reject(new Error())))

    const accountParams = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'wrong_password'
    }

    const promise = sut.add(accountParams)

    await expect(promise).rejects.toThrow()
  })
})
