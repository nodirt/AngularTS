/// <reference path="angular.d.ts" />

declare module angular.ng {
    interface CloneAttachFunction {
        (clonedElement: HTMLElement, scope: Scope): void;
    }
    interface TranscludeFunction {
        (scope: Scope, cloneAttachFn?: CloneAttachFunction): any;
    }
    function Compile(element: HTMLElement, transclude: TranscludeFunction, maxPriority: number): TranscludeFunction;


    interface CompileProvider {
        directive(name: string, directiveFactory: (...args: any[]) => Directive): CompileProvider;
    }

    interface Controller {
        // TODO
    }
    interface ControllerService {
        (constructor: Function, locals: Object): Object;
    }

    interface ControllerRegistrationFunction {
        (name: string, constructor: { new (...args: any[]): Controller; }): void;
        (name: string, constructor: string[]): void;
    }
    interface ControllerProvider {
        register: ControllerRegistrationFunction;
    }

    interface Directive {
        name?: string;
        priority?: number;
        terminal?: bool;
        scope?: any; // bool or Object
        controller?: ($scope?: Scope, $element?: JQuery, $attrs?: Attributes, $transclude?: TranscludeFunction) => Controller;
        require?: string;
        restrict?: string;
        template?: string;
        templateUrl?: string;
        replace?: bool;
        transclude?: any; // bool or 'element' string
        compile?: (tElement: JQuery, tAttrs: Attributes, transclude: TranscludeFunction) => any; // returns Function or Object
        link?: (scope: Scope, element: HTMLElement, attrs: Attributes, controller: Controller) => void;
    }

    interface Attributes {
        $set(name: string, value): void;
        $attr: Object;
    }

    interface Module extends AUTO.ProvideBase, CompileProvider {
        config(configFn: Function);
        config(configs: any[]);
        controller: ControllerRegistrationFunction;
        run(initializationFn: Function): void;
        name: string;
        requires: string[];
    }

    interface Scope {
        $apply(exp: Function);
        $apply(exp: string);
        $broadcast(name: string, ...args: any[]): void;
        $destroy(): void;
        $digest(): void;
        $emit(name: string, ...args: any[]): Event;
        $eval(exp: Function);
        $eval(exp: string);
        $evalAsync(exp: Function);
        $evalAsync(exp: string);
        $new(isolate: bool): Scope;
        $on(name: string, listener: EventListener);
        $watch(watchExpression: string, listener: ScopeWatchListener, objectEquality?: bool);
        $id: number;
    }

    interface ScopeWatchListener {
        (expression: string);
        (newValue, oldValue, scope: Scope);
    }

    interface ExceptionHandler {
        (exception: Error, cause?: string): void;
    }

    interface FilterFunction extends Function {
    }
    interface Filter {
        (name: string): FilterFunction;
    }
    interface FilterProvider {
        register(name: string, fn: Function): void;
    }

    interface Locale {
        id: string;
    }

    interface WriteLog {
        (...messages: string[]): void;
    }
    interface Log {
        error: WriteLog;
        info: WriteLog;
        log: WriteLog;
        warn: WriteLog;
    }

    interface Expression {
        (context: Object, locals: Object);
        assign(context: Object, newValue): void;
    }

    interface Parse {
        (expression: string): Expression;
    }
    
    interface Timeout {
        (fn: Function, delay?: number, invokeApply?: bool): Promise;
        cancel(promise: Promise): bool;
    }

    interface Event {
        stopPropagation(): void;
        preventDefault(): void;
        defaultPrevented: bool;
        targetScope: Scope;
        currentScope: Scope;
        name: string;
    }
    interface EventListener {
        (event: Event, ...args: any[]);
    }

    // $q service
     interface Promise { 
        then(successCallback: (result) => any, errorCallback?: (reason) => any): Promise;
    }
   interface Deferred {
        resolve(value);
        reject(reason);
        promise: Promise;
    }
    interface Q {
        defer(): Deferred;
        all(promises: Promise[]): Promise;
        reject(reason): Promise;
        when(value): Promise;
    }
}