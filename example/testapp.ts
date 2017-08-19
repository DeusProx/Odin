import { Wotan, ApplicationDecorator, App, } from './../src/core'
import 'reflect-metadata'
import * as http from 'http'

const port: number = 8000
const server = http.createServer();


@ApplicationDecorator
@App({
    server: [
        {
            http: true,
            port: 8000
        },
        {
            https: false
        },
        {
            wss: false
        }
    ],
    endpoints: true
})
class TestApp {
    property = "property";
    hello: string;
    constructor() { }
}

var app = Wotan.bootstrapApplication(TestApp);

console.log(Reflect.getMetadataKeys(app.constructor))

console.log(Reflect.hasMetadata('App', app.constructor))
console.log(Reflect.getMetadata('App', app.constructor))

/*
 *To get the annotations from a class/component in angular2, you have to use:
 *Reflect.getMetadata('annotations', ComponentClass); //@Component({}), @Pipe({}), ...
 *
 *To get the annotations from the constructor paramaters in angular2, you have to use:
 *Reflect.getMetadata('parameters', ComponentClass); //@Inject()
 *
 *To get the annotations from a property in a class in angular2, you have to use:
 *Reflect.getMetadata('propMetadata', ComponentClass); //@HostBinding(), @Input(), ...
 */

