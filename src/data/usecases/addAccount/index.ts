import { IEncrypter, IAccountModel, IAddAccount, IAddAccountModel } from './protocols'

export class DbAddAccount implements IAddAccount {
  constructor (private readonly encrypter: IEncrypter) {}

  public async add (account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)

    return await new Promise((resolve, reject) => resolve(null))
  }
}
