import express, { Express, Request, Response } from 'express'
import HelloRouter from './HelloRouter'
import { LogInfo } from '../utils/logger'

// server instance of express
const server: Express = express()

// root router
const RootRouter = express.Router()

// Activate for requests to http://localhost:8000/api
// Get: http://localhost:8000/api
RootRouter.get('/', (req:Request, res:Response) => {
    LogInfo('Get: http://localhost:8000/api')
    res.send('welcome to my exercise 3')
})

// Redirections to Routers & Controllers
server.use('/', RootRouter)
server.use('/hello', HelloRouter)

export default server
