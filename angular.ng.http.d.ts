/// <reference path="angular.d.ts" />

declare module angular.ng {

    interface HttpConfig {
        method?: string;
        url?: string;
        params?: Object;
        data?: any;
        headers?: Object;
        // transformRequest and transformResponse are either a function or an array of functions, so the best common type is any;
        transformRequest?: any;
        transformResponse?: any;
        cache?: any; // bool or Cache
        timeout?: number;
        withCredentials?: bool;
    }
    
    interface HeadersFunction {
        (key: string): string;
    }
    interface HttpResponse { 
        data: any; 
        status: number; 
        headers: HeadersFunction; 
        config: HttpConfig; 
    }

    interface HttpPromise extends ng.Promise, HttpResponse {
        then(successCallback: (response: HttpResponse) => any, errorCallback?: (response: HttpResponse) => any): Promise;
        success(fn: (data: any, status?: number, headers?: HeadersFunction, config?: HttpConfig) => any): HttpPromise;
        error(fn: (data: any, status?: number, headers?: HeadersFunction, config?: HttpConfig) => any): HttpPromise;
    }

    interface HttpHeaders {
        common: Object;
        get: Object;
        post: Object;
        put: Object;
        delete: Object;
    }
    interface HttpDefaults {
        headers: HttpHeaders;
    }

    interface HttpService {
        (config: HttpConfig): HttpPromise;

        delete(url: string, config?: HttpConfig): HttpPromise;
        get(url: string, config?: HttpConfig): HttpPromise;
        post(url: string, config?: HttpConfig): HttpPromise;
        put(url: string, config?: HttpConfig): HttpPromise;
        head(url: string, config?: HttpConfig): HttpPromise;
        jsonp(url: string, config?: HttpConfig): HttpPromise;

        defaults: HttpDefaults;
        pendingRequests: HttpConfig[];
    }

    interface HttpProvider {
        defaults: HttpDefaults;
    }
}