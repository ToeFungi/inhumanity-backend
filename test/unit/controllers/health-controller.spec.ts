import { createSandbox } from 'sinon'
import { Request, Response } from 'express'
import { MockRequest, MockResponse, createResponse, createRequest } from 'node-mocks-http'

import { loggerMock } from '../../support/mocks/logger-mock'
import { LoggerFactory } from '../../../src/factories/logger-factory'
import { HealthController } from '../../../src/controllers/health-controller'

describe('HealthController', () => {
  const sandbox = createSandbox()
  const logger = loggerMock(sandbox)

  let request: MockRequest<Request>
  let response: MockResponse<Response>

  let loggerFactory: any
  let healthController: HealthController

  beforeEach(() => {
    request = createRequest()
    response = createResponse()

    loggerFactory = sandbox.createStubInstance(LoggerFactory)
    loggerFactory.getNamedLogger
      .returns(logger)

    healthController = new HealthController(loggerFactory)
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#getHealth', () => {
    it('resolves with appropriate payload and status when all dependencies are healthy', () => {
      const expectedData = {
        healthController: 'healthy'
      }

      return healthController.getHealth(request, response)
        .should.become(response)
        .then(() => {
          response.statusCode.should.deep.equal(200)
          response._getJSONData()
            .should.deep.equal(expectedData)
        })
    })
  })
})
