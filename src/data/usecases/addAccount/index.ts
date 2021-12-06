import { IAccountModel } from '../../../domain/models'
import { IAddAccount, IAddAccountModel } from '../../../domain/usecases/addAccount'
import { IEncrypter } from '../../protocols/encrypter'

export class DbAddAccount implements IAddAccount {
  constructor (private readonly encrypter: IEncrypter) {}

  public async add (account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)

    return await new Promise((resolve, reject) => resolve(null))
  }
}
