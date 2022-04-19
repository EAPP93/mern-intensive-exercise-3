import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { HelloResponse } from '../controller/types'
import { LogInfo } from '../utils/logger'

// router from express
const HelloRouter = express.Router()

// http://localhost:8000/api/hello
HelloRouter.route('/')
    .get(async (req:Request, res: Response) => {
        // get query params
        const name: any = req?.query?.name
        const date: String = new Date().toLocaleDateString()
        LogInfo(`query params name = ${name} and date = ${date}`)

        // instance of hellocontroller
        const controller: HelloController = new HelloController()

        // obtain the response
        const response: HelloResponse = await controller.getMessage(name, date)

        // send to the client the response
        return res.send(response)
    })

export default HelloRouter
