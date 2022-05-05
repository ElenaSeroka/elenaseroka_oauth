import express from 'express'
import dotenv from 'dotenv'
import { pageRouter } from './page-router.js'
import { oauthRouter } from './oauth-router.js'
import { checkSession } from '../middlewares/checkSession.js'
import { userRouter } from './user-router.js'
import createError from 'http-errors'

dotenv.config()
const router = express.Router()

router.use('/', pageRouter)
router.use('/oauth', oauthRouter)
router.use('/user', checkSession, userRouter)
router.use('/errorpage', pageRouter)
router.use('*', (req, res, next) =>
  next(createError(500, 'Internal Server Error'))
)

export default router
