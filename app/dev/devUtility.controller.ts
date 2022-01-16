import express, { NextFunction } from 'express'

export const usersData = (req: express.Request, res: express.Response, next: NextFunction): Promise<express.Response> => {
  return res.status(201).send('No users present as no DB configured')
}
export const noUsersData = (req: express.Request, res: express.Response, next: NextFunction): Promise<express.Response> => {
  return res.status(202).send('Returning random values 202')
}
