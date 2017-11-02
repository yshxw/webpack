const KoaRouter = require('koa-router')
const router = new KoaRouter()
const Mock = require('mockjs')
const Random = Mock.Random

const Sleep = require('./utils').Sleep

router.get('/', async (ctx, next) => {
  ctx.body = {
    version: '1.0.0',
    name: 'Mock server'
  }
})

router.get('/user_info', async (ctx, next) => {
  // make api sleep 1s
  await Sleep(1)
  ctx.body = Mock.mock(
    {
      'error_code': 0,
      'data': {
        'uid': () => Random.integer(1, 1000),
        'username': 'yugasun',
        'email': 'yuga.sun.bj@gmail.com'
      }
    }
  )
})

module.exports = router
