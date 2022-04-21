import { Get, Query, Route, Tags } from 'tsoa'
import { HelloResponse } from './types'
import { HelloInterface } from './interfaces'
import { LogSuccess } from '../utils/logger'

@Route('/api/hello')
@Tags('HelloController')

export class HelloController implements HelloInterface {
    /**
     * Endpoint to retreive a message "hello {name}" in JSON
     * @param {String | Undefined}name Name of user to be greeted
     * @returns {HelloResponse | Undefined} Promise of helloresponse
     */
    @Get('/')
    public async getMessage (@Query()name?: String, @Query()date?: String): Promise<HelloResponse> {
        LogSuccess('[/api/hello] Get Request')
        return {
            name: `Hola ${name || 'world'}`,
            date: `${date}`
        }
    }
}
