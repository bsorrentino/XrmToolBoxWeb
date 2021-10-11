import { Header, IRequest, RequestParameters } from "./WebApiClient.Base";

/**
 * @description This is the collection of all preimplemented Web API actions and functions
 * @module Requests
 */
import { Instance as WebApiClient } from './WebApiClient.Core'

function AppendRequestParams(url: string, params: Record<string, any>) {
    url += "(";
    let paramCount = 1;

    for (let parameter in params) {
        if (!params.hasOwnProperty(parameter)) {
            continue;
        }

        if (paramCount !== 1) {
            url += ",";
        }

        url += parameter + "=@p" + paramCount++;
    }

    url += ")";

    return url;
}

function AppendParamValues(url: string, params: Record<string, any>) {
    let paramCount = 1;

    for (let parameter in params) {
        if (!params.hasOwnProperty(parameter)) {
            continue;
        }

        if (paramCount === 1) {
            url += "?@p1=";
        }
        else {
            url += "&@p" + paramCount + "=";
        }
        paramCount++;

        url += params[parameter];
    }

    return url;
}

/**
 * @description Base class for all actions and functions.
 * @constructor
 * @param {Object} parameters
 * @param {String} parameters.method The HTTP method of the request, such as GET / POST / ...
 * @param {String} parameters.name The name of the request
 * @param {bool} [parameters.bound] Determines if request is bound, i.e. always executed regarding a distinct record, or not. Defaults to false
 * @param {String} [parameters.entityName] Name of the request if it is bound to an entity
 * @param {String} [parameters.entityId] Record ID if bound to an entity
 * @param {Object} [parameters.payload] Message body for this request
 * @param {Array<{key:string, value:string}>} [parameters.headers] Headers to append to this request
 * @param {Object} [parameters.urlParams] Object with key-value pairs that will be appended to the URL of a GET request. Used for calling functions with parameters
 * @param {bool} [parameters.async] Determines if request is sent async or not. Defaults to async
 * @memberof module:Requests
 * @this {Request}
 * @alias WebApiClient.export const Request
 */
export class Request implements IRequest {
    method = "";
    name = "";
    bound = false;
    entityName = "";
    entityId = "";
    payload?: Record<string, any>;
    headers?: Array<Header>;
    urlParams?: Record<string, string>;
    async = true;

    /**
     * @description Applies properties of parameters object to the current request and returns it
     * @param {Object} parameters Pass object with properties that will be applied to current request
     * @return {Request}
     * @memberof module:Requests
     * @this {Request}
     */
    with(parameters: RequestParameters): ThisType<Request> {
        const request = Object.create(this);

        for (let parameter in parameters) {

            if (!parameters.hasOwnProperty(parameter)) {
                continue;
            }

            request[parameter] = (<any>parameters)[parameter];
        }

        return request;
    }

    /**
     * @description Builds URL for sending a HTTP request based on the information provided by the request
     * @return {String}
     * @this {Request}
     */
    buildUrl(): string {
        const baseUrl = WebApiClient.GetApiUrl();
        let url = baseUrl;

        if (this.bound && this.entityId) {
            var entityId = this.entityId.replace("{", "").replace("}", "");
            url += WebApiClient.GetSetName(this.entityName) + "(" + entityId + ")/";
        }

        if (this.bound && this.name.indexOf("Microsoft.Dynamics.CRM.") === -1) {
            url += "Microsoft.Dynamics.CRM.";
        }
        url += this.name;

        if (this.urlParams) {
            url = AppendRequestParams(url, this.urlParams);
            url = AppendParamValues(url, this.urlParams);
        } else {
            url += "()";
        }

        return url;
    }

}

