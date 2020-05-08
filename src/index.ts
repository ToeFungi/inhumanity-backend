import * as express from 'express'
import * as HTTPContext from 'express-http-context'

import { configuration } from './configuration'
import { LoggerFactory } from './factories/logger-factory'
import { CorrelationIdMiddleware } from './middleware/correlation-id-middleware'

const server = express()
  .use(HTTPContext.middleware)
  .use(CorrelationIdMiddleware.getMiddleware())

const loggerFactory = new LoggerFactory(configuration.logger)
const logger = loggerFactory.getNamedLogger('application')

const healthListener = (request: express.Request, response: express.Response) => {
  logger.debug('health listener endpoint reached', { status: 200 })
  return response.status(200)
    .send('healthy')
}

server.get('/health', healthListener)

server.listen(configuration.server.port, () => logger.info('Listening on specified port', {
  port: configuration.server.port
}))
