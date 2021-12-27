import { IAddAccountRepository } from '../../../../data/protocols/addAccountRepository'
import { IAccountModel } from '../../../../domain/models'
import { IAddAccountModel } from '../../../../domain/usecases'

import MongoHelper from '../helpers/mongoHelper'

export class AccountMongoRepository implements IAddAccountRepository {
  public async add (accountData: IAddAccountModel): Promise<IAccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    const result = await accountCollection.insertOne(accountData)

    const account = await accountCollection.findOne(result.insertedId)

    const { _id, ...accountWithoutId } = account as any

    return Object.assign({}, accountWithoutId, { id: String(_id) })
  }
}
