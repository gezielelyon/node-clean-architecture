import request from 'supertest'

import { app } from '../../config/app'

describe('Cors Middleware', () => {
  test('Should enable Cors', async () => {
    app.get('/test-cors', (_, response) => response.send())

    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
