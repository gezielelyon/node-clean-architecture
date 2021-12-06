import { IEncrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './index'

interface ISutTypes {
  sut: DbAddAccount
  encrypterStub: IEncrypter
}

const makeSut = (): ISutTypes => {
  class EncrypterStub {
    async encrypt (password: string): Promise<string> {
      return await new Promise((resolve, reject) => resolve('hashed_password'))
    }
  }

  const encrypterStub = new EncrypterStub()
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
})
