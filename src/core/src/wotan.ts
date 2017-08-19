import { Application } from './metadata/decorators'
import * as http from 'http'

export class Wotan {
    static bootstrapApplication<T>(ApplicationClass: new () => T): T {
        console.log("Wotan creates App: " + ApplicationClass.name)
        var app = new ApplicationClass()
        console.log(app)
        return app
    }
}