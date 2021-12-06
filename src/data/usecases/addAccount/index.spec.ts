import { IEncrypter } from '../../protocols/encrypter'
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
})
