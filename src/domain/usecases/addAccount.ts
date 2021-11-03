import { IAccountModel } from '../models'

export interface IAddAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (account: IAddAccountModel) => IAccountModel
}

// interfaces da regra de negócio
