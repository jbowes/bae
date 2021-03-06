const micro = require('micro')
const match = require('micro-route/match')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = micro(async (req, res) => {
  const parsedUrl = parse(req.url, true)
  const { query } = parsedUrl

  if (match(req, '/env')) {
    micro.send(res, 200, process.env);
    return
  }

  return handle(req, res, parsedUrl)
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
