import { LoggerConfiguration } from './logger-configuration'
import { ServerConfiguration } from './server-configuration'

/**
 * Representation of application level configuration
 */
interface AppConfiguration {
  logger: LoggerConfiguration
  server: ServerConfiguration
}

export { AppConfiguration }
