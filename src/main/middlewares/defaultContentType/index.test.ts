import request from 'supertest'

import { app } from '../../config/app'

describe('Default Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test-content-type', (_, response) => response.send())

    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test-content-type-xml', (_, response) => {
      response.type('xml')
      response.send()
    })

    await request(app).get('/test-content-type-xml').expect('content-type', /xml/)
  })
})
