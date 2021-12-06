import { IEncrypter, IAccountModel, IAddAccount, IAddAccountModel, IAddAccountRepository } from './protocols'

export class DbAddAccount implements IAddAccount {
  constructor (
    private readonly encrypter: IEncrypter,
    private readonly addAccountRepository: IAddAccountRepository
  ) {}

  public async add (accountData: IAddAccountModel): Promise<IAccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)

    await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))

    return await new Promise((resolve, reject) => resolve(null))
  }
}
