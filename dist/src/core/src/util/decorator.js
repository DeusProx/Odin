"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoratorFactory {
    static createClassDecorator(decoratorName) {
        let func = function (props) {
            return (target) => {
                Reflect.defineMetadata(decoratorName, props, target);
            };
        };
        Object.defineProperty(func, 'name', { value: decoratorName });
        return func;
    }
}
exports.DecoratorFactory = DecoratorFactory;
