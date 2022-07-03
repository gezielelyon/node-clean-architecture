import request from 'supertest'

import { app } from '../../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/body-parser', (request, response) => response.send(request.body))

    await request(app).post('/body-parser').send({ name: 'Geziel' }).expect({ name: 'Geziel' })
  })
})
