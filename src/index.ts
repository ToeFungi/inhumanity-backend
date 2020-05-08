import { configuration } from './configuration'
import { AppFactory } from './factories/app-factory'
import { ExpressServer } from './services/express-server'
import { LoggerFactory } from './factories/logger-factory'
import { HealthController } from './controllers/health-controller'

/**
 * Start the HTTP service
 */
const startService = () => {
  // Logging
  const loggerFactory = new LoggerFactory(configuration.logger)
  const processLogger = loggerFactory.getNamedLogger('inhumanity-backend')

  // Controllers
  const healthController = new HealthController(loggerFactory)

  // Application
  const app = AppFactory.getInstance(healthController)
  const expressServer = new ExpressServer(app, loggerFactory, configuration.server)

  const handleError = (error: Error) => processLogger.error('Process error', { message: error.message })

  expressServer.run()
    .catch(handleError)
}

Promise.resolve()
  .then(startService)
  .catch(console.error)
