import { IAccountModel } from '../../domain/models'
import { IAddAccountModel } from '../../domain/usecases'

export interface IAddAccountRepository {
  add: (values: IAddAccountModel) => Promise<IAccountModel>
}
