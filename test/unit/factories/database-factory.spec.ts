import { MongoClient } from 'mongodb'

import { DatabaseFactory } from '../../../src/factories/database-factory'
import { DatabaseConfiguration } from '../../../src/models/configuration/database-configuration'

describe('DatabaseConnectionFactory', () => {
  const configuration = {
    url: 'some-url',
    username: 'some-username',
    password: 'some-password'
  } as DatabaseConfiguration

  describe('#getInstance', () => {
    it('returns an instance of a Mongo client', () => {
      return DatabaseFactory.getInstance(configuration)
        .should.be.instanceof(MongoClient)
    })
  })
})
