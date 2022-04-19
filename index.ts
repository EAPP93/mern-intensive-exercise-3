import server from './src/server'
import dotenv from 'dotenv'
import { LogError, LogSuccess } from './src/utils/logger'

// config dotenv file
dotenv.config()

// define port of the server
const port: String | Number = process.env.PORT || 8000

// execute server
server.listen(port, () => { LogSuccess(`server is running in http://localhost:${port}/api`) })
server.on('error', (error) => LogError(`${error}`))
