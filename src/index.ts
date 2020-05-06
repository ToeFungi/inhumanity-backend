import * as express from 'express'

const server = express()

const port = process.env.PORT || 3000

const healthListener = (request: express.Request, response: express.Response) => {
  return response.status(200)
    .send('healthy')
}

server.get('/health', healthListener)
  .listen(port, () => console.log('listening on port', { port }))
