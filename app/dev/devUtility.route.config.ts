import express from 'express'
import * as devController from './devUtility.controller'

const devUtilityRouter: express.Router = express.Router()

devUtilityRouter.get('/data', devController.usersData)

export default devUtilityRouter
