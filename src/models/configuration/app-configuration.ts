import { LoggerConfiguration } from './logger-configuration'
import { ServerConfiguration } from './server-configuration'
import { DatabaseConfiguration } from './database-configuration'

/**
 * Representation of application level configuration
 */
interface AppConfiguration {
  logger: LoggerConfiguration
  server: ServerConfiguration
  database: DatabaseConfiguration
}

export { AppConfiguration }
