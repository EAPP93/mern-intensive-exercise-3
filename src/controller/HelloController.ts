import { HelloResponse } from './types'
import { HelloInterface } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class HelloController implements HelloInterface {
    public async getMessage (name?: String, date?: String): Promise<HelloResponse> {
        LogSuccess('[/api/hello] Get Request')
        return {
            name: `Hola ${name || 'world'}`,
            date: `${date}`
        }
    }
}
