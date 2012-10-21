/// <reference path="jquery.d.ts" />
/// <reference path="angular.ng.d.ts" />


declare module angular {
    function boostrap(element: HTMLElement, modules?: any[]): AUTO.$injector;
    function element(html: string): JQuery;
    function element(html: HTMLElement): JQuery;
    function injector(modules: any[]): AUTO.$injector;
    function module(name?: string, requires?: string[], configFn?: Function): ng.Module;
    function module(name: string, configFn: Function): ng.Module;

    // type check functions
    function isArray(value): bool;
    function isDate(value): bool;
    function isDefined(value): bool;
    function isElement(value): bool;
    function isFunction(value): bool;
    function isObject(value): bool;
    function isString(value): bool;
    function isUndefined(value): bool;

    // util funtions
    function bind(self: Object, fn: (self: Object, ...args: any[]) => any, ...args: any[]): Function;
    function copy(source, destination: Object);
    function copy(source, destination: Array);
    function copy(source);
    function forEach(obj: Object, iterator: (value, key) => any, context?: Object): Object;
    function forEach(Array: any[], iterator: (element, i: number) => any, context?: Object): any[];
    function noop(...args: any[]): void;
    function identity(x);
    function equals(o1, o2): bool;
    function extend(dst: Object, ...src: Object[]): void;

    function fromJson(json: string);
    function toJson(obj, pretty?: bool): string;
    function upperCase(text: string): string;
    function lowerCase(text: string): string;

    // fields
    var version: {
        full: string;
        major: number;
        minor: number;
        dot: number;
        codeName: string;
    }

    export module AUTO {
        interface FunctionWith$inject extends Function {
            $inject?: string[];
        }
        interface $injector {
            $annotate(fn: FunctionWith$inject): string[];
            $annotate(fn: any[]): string[];
            get(name: string): Object;
            instantiate(Type: Function, locals?: Object): Object;
            invoke(fn: Function, self?: Object, locals?: Object);
        }

        interface ProvideBase {
            constant(name: string, object);
            factory(name: string, $getFn: Function): Object;
            provider(name: string, provider: { $get: Function; }): Object;
            provider(name: string, provider: Function): Object;
            service(name: string, constructor: Function): Object;
            value(name: string, value): Object;
        }
        interface $provide extends ProvideBase {
            decorator(name: string, decorator: ($delegate: Object, ...args: any[]) => any): Object;
        }
    }
}