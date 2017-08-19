/*export function classDecoratorFactory<T extends Object>(decoratorName: String): (props: T) => ClassDecorator {
    let func = function (props: T) {
        return (target: object) => {
            Reflect.defineMetadata(decoratorName, props, target)
        }
    }
    Object.defineProperty(func, 'name', { value: decoratorName }) //Give function the Name of the classDecorator
    return func
}*/

export class DecoratorFactory {
    static createClassDecorator<T extends Object>(decoratorName: String): (props: T) => ClassDecorator {
        let func = function (props: T) {
            return (target: object) => {
                Reflect.defineMetadata(decoratorName, props, target)
            }
        }
        Object.defineProperty(func, 'name', { value: decoratorName }) //Give function the Name of the classDecorator
        return func
    }
}