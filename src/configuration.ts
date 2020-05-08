import { AppConfiguration } from './models/configuration/app-configuration'

const configuration: AppConfiguration = {
  logger: {
    level: process.env.LOGGER_LEVEL,
    service: process.env.LOGGER_SERVICE,
    logglyToken: process.env.LOGGER_LOGGLY_TOKEN,
    logglySubdomain: process.env.LOGGER_LOGGLY_SUBDOMAIN
  },
  server: {
    port: process.env.PORT
  }
}

export { configuration }
