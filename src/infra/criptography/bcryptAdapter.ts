import bcrypt from 'bcrypt'

import { IEncrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements IEncrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  public async encrypt (value: string): Promise<string> {
    const passwordHashed = await bcrypt.hash(value, this.salt)

    return passwordHashed
  }
}
