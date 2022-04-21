import express, { Express, Request, Response } from 'express'

// security
import cors from 'cors'
import helmet from 'helmet'

// root router
import RootRouter from '../routes/index'

// create express server
const server: Express = express()

// define server to use "/api" and use rootRouter from 'index.ts' in routes
server.use('/api', RootRouter)

// static server
server.use(express.static('public'))

// security config
server.use(cors())
server.use(helmet())

// content type
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// redirect to /api
server.get('/', (req:Request, res: Response) => {
    res.redirect('/api')
})

export default server
