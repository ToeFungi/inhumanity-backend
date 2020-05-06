import express from 'express'

const server = express()

const port = process.env.PORT || 3000
server.get('/health', (req, res) => res.status(200).send('healthy'))
  .listen(port, () => console.log('listening on port', { port }))
