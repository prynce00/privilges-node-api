import * as express from 'express'

const router = express.Router()

router.post('/my-route', async (req, res) => {
  console.log('wow')
  res.send('Hello World')
})

export default router
