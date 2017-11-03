
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const port = 3010

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)

console.log(`Mock server is start on: http://localhost:${port}`)
