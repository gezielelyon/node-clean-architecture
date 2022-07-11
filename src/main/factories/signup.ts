import { SignUpController } from '../../presentation/controllers/signup'
import { EmailValidatorAdapter } from '../../utils/emailValidatorAdapter'
import { DbAddAccount } from '../../data/usecases/addAccount'
import { BcryptAdapter } from '../../infra/criptography/bcryptAdapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/accountRepository'

export const makeSignUpController = (): SignUpController => {
  const salt = 12

  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const addAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  return new SignUpController(emailValidatorAdapter, addAccount)
}
