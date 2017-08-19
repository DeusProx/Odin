"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("../util/decorator");
exports.App = decorator_1.DecoratorFactory.createClassDecorator('App');
exports.Route = decorator_1.DecoratorFactory.createClassDecorator('Route');
class Application {
    listen() {
        console.log("test!");
    }
}
exports.Application = Application;
function ApplicationDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.newProperty = "new property";
            this.hello = "overridfe";
        }
    };
}
exports.ApplicationDecorator = ApplicationDecorator;
function ApplicationDecorator2(ob) {
    return (target) => {
    };
}
exports.ApplicationDecorator2 = ApplicationDecorator2;
