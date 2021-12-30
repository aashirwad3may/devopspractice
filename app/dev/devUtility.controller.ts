import express, { NextFunction } from 'express'

export const usersData = (req: express.Request, res: express.Response, next: NextFunction): Promise<express.Response> => {
  return res.status(201).send('No users preset as no Db configured')
}
