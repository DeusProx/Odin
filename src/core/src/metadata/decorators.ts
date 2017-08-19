import { DecoratorFactory } from '../util/decorator'

export interface App {
    middlewares?: any
    endpoints?: any
    server: any
}

export const App = DecoratorFactory.createClassDecorator<App>('App')

//------------------------

export interface Route {

}

export const Route = DecoratorFactory.createClassDecorator<Route>('Route')

//------------------------

export class Application {
    listen() {
        console.log("test!");
    }
}

export function ApplicationDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "overridfe"
    }
}

export function ApplicationDecorator2(ob: Object) {
    return (target: Object) => {

    }
}

//------------------------

//type factory = <TFunction extends Function>(target: TFunction) => void | ClassDecorator

/*export function makeDecorator(props: AppMetadata): ClassDecorator {
    const propsKeys = Object.keys(props)
    console.log(props)
    //console.log(props instanceof AppMetadata)
    console.log(implementsInterface<AppMetadata>(props))

    return (target: object) => {
        for (const property in props) {
            if (props.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, props[property], target)
            }
        }
    }
}*/

/*
 * //https://github.com/kamilmysliwiec/nest/blob/master/src/common/utils/decorators/component.decorator.ts
 *export const Component = (): ClassDecorator => {
 *    return (target: object) => {};
 *};
 */

// export interface AppDecorator {
//     (obj: App): TypeDecorator
//     new(obj: App): App
// }

// export interface App {
//     middlewares?: any
//     endpoints?: any
// }

// export const App: AppDecorator = makeDecorator('App', (c: App = {}) => c)




// https://github.com/angular/angular/blob/master/packages/core/src/util/decorators.ts

// export interface TypeDecorator {
//     /**
//      * Invoke as ES7 decorator.
//      */
//     <T extends Type<any>>(type: T): T;

//     // Make TypeDecorator assignable to built-in ParameterDecorator type.
//     // ParameterDecorator is declared in lib.d.ts as a `d
//             return this;
//         }

//         const annotationInstance = new (<any>DecoratorFactory)(objOrType);
//         const TypeDecorator: TypeDecorator = <TypeDecorator>function TypeDecorator(cls: Type<any>) {
//             // Use of Object.defineProperty is important since it creates non-enumerable property which
//             // prevents the property is copied during subclassing.
//             const annotations = cls.hasOwnProperty(ANNOTATIONS) ?
//                 (cls as any)[ANNOTATIONS] :
//                 Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
//             annotations.push(annotationInstance);
//             return cls;
//         };
//         if (chainFn) chainFn(TypeDecorator);
//         return TypeDecorator;
//     }

//     if (parentClass) {
//         DecoratorFactory.prototype = Object.create(parentClass.prototype);
//     }

//     DecoratorFactory.prototype.ngMetadataName = name;
//     (<any>DecoratorFactory).annotationCls = DecoratorFactory;
//     return DecoratorFactory as any;
// }

// function makeMetadataCtor(props?: (...args: any[]) => any): any {
//     return function ctor(...args: any[]) {
//         if (props) {
//             const values = props(...args);
//             for (const propName in values) {
//                 this[propName] = values[propName];
//             }
//         }
//     };
// }

// // https://github.com/angular/angular/blob/master/packages/core/src/type.ts

// /**
//  * @license
//  * Copyright Google Inc. All Rights Reserved.
//  *
//  * Use of this source code is governed by an MIT-style license that can be
//  * found in the LICENSE file at https://angular.io/license
//  */

// /**
//  * @whatItDoes Represents a type that a Component or other object is instances of.
//  *
//  * @description
//  *
//  * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
//  * the `MyCustomComponent` constructor function.
//  *
//  * @stable
//  */
// export const Type = Function;

// export function isType(v: any): v is Type<any> {
//     return typeof v === 'function';
// }

// export interface Type<T> extends Function { new(...args: any[]): T; }args: any[]): (cls: any) => any; } {
//     const metaCtor = makeMetadataCtor(props);

//     function DecoratorFactory(objOrType: any): (cls: any) => any {
//         if (this instanceof DecoratorFactory) {
//             metaCtor.call(this, objOrType);
//             return this;
//         }

//         const annotationInstance = new (<any>DecoratorFactory)(objOrType);
//         const TypeDecorator: TypeDecorator = <TypeDecorator>function TypeDecorator(cls: Type<any>) {
//             // Use of Object.defineProperty is important since it creates non-enumerable property which
//             // prevents the property is copied during subclassing.
//             const annotations = cls.hasOwnProperty(ANNOTATIONS) ?
//                 (cls as any)[ANNOTATIONS] :
//                 Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
//             annotations.push(annotationInstance);
//             return cls;
//         };
//         if (chainFn) chainFn(TypeDecorator);
//         return TypeDecorator;
//     }

//     if (parentClass) {
//         DecoratorFactory.prototype = Object.create(parentClass.prototype);
//     }

//     DecoratorFactory.prototype.ngMetadataName = name;
//     (<any>DecoratorFactory).annotationCls = DecoratorFactory;
//     return DecoratorFactory as any;
// }

// function makeMetadataCtor(props?: (...args: any[]) => any): any {
//     return function ctor(...args: any[]) {
//         if (props) {
//             const values = props(...args);
//             for (const propName in values) {
//                 this[propName] = values[propName];
//             }
//         }
//     };
// }

// // https://github.com/angular/angular/blob/master/packages/core/src/type.ts

// /**
//  * @license
//  * Copyright Google Inc. All Rights Reserved.
//  *
//  * Use of this source code is governed by an MIT-style license that can be
//  * found in the LICENSE file at https://angular.io/license
//  */

// /**
//  * @whatItDoes Represents a type that a Component or other object is instances of.
//  *
//  * @description
//  *
//  * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
//  * the `MyCustomComponent` constructor function.
//  *
//  * @stable
//  */
// export const Type = Function;

// export function isType(v: any): v is Type<any> {
//     return typeof v === 'function';
// }

// export interface Type<T> extends Function { new(...args: any[]): T; }