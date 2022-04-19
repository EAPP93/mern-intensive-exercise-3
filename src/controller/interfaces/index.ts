import { HelloResponse } from '../types/index'

export interface HelloInterface {
    getMessage(name?:String, date?: String) : Promise<HelloResponse>
}
