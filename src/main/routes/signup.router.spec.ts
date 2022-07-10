import request from 'supertest'

import { app } from '../config/app'
import MongoHelper from '../../infra/db/mongodb/helpers/mongoHelper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')

    await accountCollection.deleteMany({})
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Name',
        email: 'email@email.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
      .expect(200)
  })
})
