import express from 'express'
import * as devController from './devUtility.controller'
import redisClient from '../common/redisClient'

const devUtilityRouter: express.Router = express.Router()

devUtilityRouter.get('/data', devController.usersData)

devUtilityRouter.get('/nodata', devController.noUsersData)

console.log(redisClient.get('fhfjkfh'))

export default devUtilityRouter
