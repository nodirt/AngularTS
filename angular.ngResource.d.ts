/// <reference path="angular.d.ts" />

declare module angular.ngResource {
    interface Action {
        method: string;
        params?: Object;
        isArray?: bool;
    }
    interface ResourceService {
        (url: string, paramDefaults?: Object, actions?: Object): ResourceStatic;
    }
    interface ResourceStatic {
        new(properties?: Object): Resource;
        query(fn: Function);
    }
    interface Resource {
        $save();
        $change(newValues: Object);
    }
}