import express from 'express'
import { PageController } from '../controllers/page-controller.js'
import { loggedIn } from '../middlewares/loggedIN.js'

export const pageRouter = express.Router()
export const controller = new PageController()

pageRouter.get('/', controller.renderMain)
pageRouter.get('/login', loggedIn, controller.renderLoginPage)
pageRouter.get('/logout', controller.renderLogout, controller.logout)
