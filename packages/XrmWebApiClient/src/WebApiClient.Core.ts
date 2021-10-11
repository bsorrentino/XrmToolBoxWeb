/* @preserve
 * MIT License
 *
 * Copyright (c) 2016 Florian Krönert
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
*/
/** @preserve
 * WebApiClient build version v0.0.0
*/

import { Header, Key } from "./WebApiClient.Base";
import { Batch } from './WebApiClient.Batch'
import { BatchResponse } from './WebApiClient.BatchResponse'
import { BatchRequest } from './WebApiClient.BatchRequest'

export type SendParameters = {
    returnAllPages?: boolean,
    isOverLengthGet?: boolean,
    _previousResponse?: any,
    fetchXml?: string,
    headers?: Array<Header>
}

export type EntityParameters<Body = any> = {
    entityName?: string,
    overriddenSetName?: string,
    entityId?: string,
    alternateKey?: Array<Key>,
    queryParams?: string
}

export type SendRequestEntityParameters = SendParameters & EntityParameters & {
    asBatch?: boolean,
    async?: boolean
}

export interface IWebApiClient {
    ApiVersion: string,
    ReturnAllPages: boolean,
    PrettifyErrors: boolean,
    Async: boolean,
    ClientUrl?: string,
    Token?: string;
}

/**
 * This is the core functionality of Xrm-WebApi-Client
 * No instantiation needed, it's a singleton.
 * @module WebApiClient
 */
class WebApiClientClass {
    /**
     * @description The API version that will be used when sending requests. Default is "8.0"
     * @param {String}
     * @memberof module:WebApiClient
     */
    ApiVersion = "8.0";
    /**
     * @description Checks for more pages when retrieving results. If set to true, all pages will be retrieved, if set to false, only the first page will be retrieved.
     * @param {boolean}
     * @memberof module:WebApiClient
     */
    ReturnAllPages = false;
    /**
     * @description Set to true for retrieving formatted error in style 'xhr.statusText: xhr.error.Message'. If set to false, error json will be returned.
     * @param {boolean}
     * @memberof module:WebApiClient
     */
    PrettifyErrors = true;
    /**
     * @description Set to false for sending all requests synchronously. True by default.
     * @param {boolean}
     * @memberof module:WebApiClient
     */
    Async = true;
    /**
     * @description Connection to use when being used in a single page app.
     * @param {String}
     * @memberof module:WebApiClient
     */
    ClientUrl?: string;
    /**
     * @description Token to use for authenticating when being used in a single page app.
     * @param {String}
     * @memberof module:WebApiClient
     */
    Token?: string;


    private DefaultHeaders: Array<Header> = [
        { key: "Accept", value: "application/json" },
        { key: "OData-Version", value: "4.0" },
        { key: "OData-MaxVersion", value: "4.0" },
        // Prevent caching since it sometimes sends old data as unmodified
        { key: "If-None-Match", value: null },
        { key: "Content-Type", value: "application/json; charset=utf-8" }
    ];

    private GetClientUrl(): string {
        const context = GetCrmContext();

        if (context) {
            return context.getClientUrl();
        }

        if (this.ClientUrl) {
            return this.ClientUrl;
        }

        throw new Error("Failed to retrieve client url, is ClientGlobalContext.aspx available?");
    }
    /**
     * @description Builds the set name of a given entity name.
     * @method GetSetName
     * @param {String} entityName Logical name of the entity, such as "account"
     * @param {String}[overriddenSetName] Override set name if it can't be infered from plural rules
     * @memberof module:WebApiClient
     * @return {String}
     */
    GetSetName(entityName?: string, overriddenSetName?: string): string {
        if (overriddenSetName) {
            return overriddenSetName;
        }

        if (!entityName) throw new Error('neither entityName and overriddenSetName has been provided!')

        const ending = entityName.slice(-1);

        switch (ending) {
            case 's':
                return entityName + "es";
            case 'y':
                return entityName.substring(0, entityName.length - 1) + "ies";
            default:
                return entityName + "s";
        }
    };

    /**
     * @description Returns array of default headers.
     * @method GetDefaultHeaders
     * @return {Array<{key: String, value:String}>}
     * @memberof module:WebApiClient
     */
    GetDefaultHeaders(): Array<Header> {
        return this.DefaultHeaders;
    };

    /**
     * @description Function for building the set name of a given entity name.
     * @method AppendToDefaultHeaders
     * @param {...{key:String, value:String}} var_args Headers as variable arguments
     * @memberof module:WebApiClient
     * @return {void}
     */
    AppendToDefaultHeaders(...headers: Header[]): void {
        if (!headers.length) {
            return;
        }

        for (var i = 0; i < headers.length; i++) {
            const argument = headers[i];

            VerifyHeader(argument);

            this.DefaultHeaders.push(argument);
        }
    }

    private GetRecordUrl(params: {
        entityName?: string,
        overriddenSetName?: string,
        entityId?: string,
        alternateKey?: Array<Key>
    }): string {

        if ((!params.entityName && !params.overriddenSetName) || (!params.entityId && !params.alternateKey)) {
            throw new Error("Need entity name or overridden set name and entity id or alternate key for getting record url!");
        }

        var url = this.GetApiUrl() + this.GetSetName(params.entityName!, params.overriddenSetName);

        if (params.alternateKey) {
            url += BuildAlternateKeyUrl(params);
        } else {
            url += "(" + RemoveIdBrackets(params.entityId) + ")";
        }

        return url;
    }

    private FormatError(xhr: XMLHttpRequest): string {
        if (xhr && xhr.response) {
            var response = ParseResponse(xhr);

            if (response instanceof BatchResponse) {
                let errors = "";
                if (response.errors.length > 0) {
                    errors = response.errors.map(e =>
                        e.code + ": " + e.message
                    ).join("\n\r");
                }

                return xhr.status + " - " + errors;
            }

            var json = JSON.parse(xhr.response);

            if (!this.PrettifyErrors) {
                json.xhrStatusText = xhr.statusText;

                return JSON.stringify(json);
            } else {
                var error = "";

                if (json.error) {
                    error = json.error.message;
                }

                return xhr.statusText + ": " + error;
            }
        }

        return "";
    }


    SendAsync(method: string, url: string, payload: string | null,
        parameters: EntityParameters & SendParameters): Promise<any> {
        const {
            returnAllPages,
            isOverLengthGet,
            _previousResponse,
            headers: pHeaders = []
        } = parameters

        const xhr = new XMLHttpRequest();

        const promise = new Promise((resolve, reject) => {
            xhr.onload = () => {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status === 200) {
                    let response = ParseResponse(xhr);

                    if (response instanceof BatchResponse) {
                        // If it was an overlength fetchXml, that was sent as batch automatically, we don't want it to behave as a batch
                        if (isOverLengthGet) {
                            response = response.batchResponses[0].payload;
                        }
                        // If we received multiple responses, but not from overlength get, it was a custom batch. Just resolve all matches
                        else {
                            resolve(response);
                        }
                    }

                    const nextLink = GetNextLink(response);
                    const pagingCookie = GetPagingCookie(response);

                    // Since 9.X paging cookie is always added to response, even in queryParams retrieves
                    // In 9.X the morerecords flag can signal whether there are more records to be found
                    // In 8.X the flag was not present and instead the pagingCookie was only set if more records were available
                    const moreRecords = "@Microsoft.Dynamics.CRM.morerecords" in response ? response["@Microsoft.Dynamics.CRM.morerecords"] : true;

                    response = MergeResults(_previousResponse, response);

                    // Results are paged, we don't have all results at this point
                    if (moreRecords && nextLink && (this.ReturnAllPages || returnAllPages)) {
                        SetPreviousResponse(parameters, response);

                        resolve(this.SendAsync("GET", nextLink, null, parameters));
                    }
                    else if (parameters.fetchXml && moreRecords && pagingCookie && (this.ReturnAllPages || returnAllPages)) {
                        var nextPageFetch = SetCookie(pagingCookie, parameters);

                        SetPreviousResponse(parameters, response);

                        parameters.fetchXml = nextPageFetch;

                        resolve(this.Retrieve(parameters));
                    }
                    else {
                        resolve(response);
                    }
                }
                else if (xhr.status === 201) {
                    resolve(ParseResponse(xhr));
                }
                else if (xhr.status === 204) {
                    if (method.toLowerCase() === "post") {
                        resolve(xhr.getResponseHeader("OData-EntityId"));
                    }
                    // No content returned for delete, update, ...
                    else {
                        resolve(xhr.statusText);
                    }
                }
                else {
                    reject(new Error(this.FormatError(xhr)));
                }
            };
            xhr.onerror = () => reject(new Error(this.FormatError(xhr)));

        });

        if (IsOverlengthGet(method, url)) {
            var batch = new Batch({
                requests: [new BatchRequest({
                    method: method,
                    url: url,
                    payload: payload,
                    headers: pHeaders
                })],
                async: true,
                isOverLengthGet: true
            });

            return this.SendBatch(batch);
        }

        xhr.open(method, url, true);

        const headers = MergeHeaders([], pHeaders, this.DefaultHeaders);

        AppendHeaders(xhr, headers);

        // Bugfix for IE. If payload is undefined, IE would send "undefined" as request body
        if (payload) {
            // For batch requests, we just want to send a string body
            if (typeof (payload) === "string") {
                xhr.send(payload);
            }
            else {
                xhr.send(JSON.stringify(payload));
            }
        } else {
            xhr.send();
        }

        return promise;
    }

    SendSync(method: string, url: string, payload: any | null,
        params: EntityParameters & SendParameters): any | undefined {
        const {
            returnAllPages,
            isOverLengthGet,
            _previousResponse,
            fetchXml,
            headers: pHeaders = []
        } = params

        const xhr = new XMLHttpRequest();
        let response: any;
        let headers = Array<Header>();

        if (IsOverlengthGet(method, url)) {
            var batch = new Batch({
                requests: [new BatchRequest({
                    method: method,
                    url: url,
                    payload: payload,
                    headers: pHeaders
                })],
                async: false,
                isOverLengthGet: true
            });

            return this.SendBatch(batch);
        }

        xhr.open(method, url, false);

        headers = MergeHeaders(headers, pHeaders, this.DefaultHeaders);

        AppendHeaders(xhr, headers);

        // Bugfix for IE. If payload is undefined, IE would send "undefined" as request body
        if (payload) {
            // For batch requests, we just want to send a string body
            if (typeof (payload) === "string") {
                xhr.send(payload);
            }
            else {
                xhr.send(JSON.stringify(payload));
            }
        } else {
            xhr.send();
        }

        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status === 200) {
            response = ParseResponse(xhr);

            // If we received multiple responses, it was a custom batch. Just resolve all matches
            if (response instanceof BatchResponse) {
                // If it was an overlength fetchXml, that was sent as batch automatically, we don't want it to behave as a batch
                if (isOverLengthGet) {
                    response = response.batchResponses[0].payload;
                } else {
                    return response;
                }
            }

            var nextLink = GetNextLink(response);
            var pagingCookie = GetPagingCookie(response);

            // Since 9.X paging cookie is always added to response, even in queryParams retrieves
            // In 9.X the morerecords flag can signal whether there are more records to be found
            // In 8.X the flag was not present and instead the pagingCookie was only set if more records were available
            var moreRecords = "@Microsoft.Dynamics.CRM.morerecords" in response ? response["@Microsoft.Dynamics.CRM.morerecords"] : true;

            response = MergeResults(_previousResponse, response);

            // Results are paged, we don't have all results at this point
            if (moreRecords && nextLink && (this.ReturnAllPages || returnAllPages)) {
                SetPreviousResponse(params, response);

                this.SendSync("GET", nextLink, null, params);
            }
            else if (fetchXml && moreRecords && pagingCookie && (this.ReturnAllPages || returnAllPages)) {
                var nextPageFetch = SetCookie(pagingCookie, params);

                SetPreviousResponse(params, response);

                params.fetchXml = nextPageFetch;

                this.Retrieve(params);
            }
        }
        else if (xhr.status === 201) {
            response = ParseResponse(xhr);
        }
        else if (xhr.status === 204) {
            if (method.toLowerCase() === "post") {
                response = xhr.getResponseHeader("OData-EntityId");
            }
            // No content returned for delete, update, ...
            else {
                response = xhr.statusText;
            }
        }
        else {
            throw new Error(this.FormatError(xhr));
        }

        return response;
    }

    GetAsync(parameters: { async?: boolean }): boolean {
        if (typeof (parameters.async) !== "undefined") {
            return parameters.async;
        }
        return this.Async;
    }

    /**
     * @description Sends request using given parameters.
     * @method SendRequest
     * @param {String} method Method type of request to send, such as "GET"
     * @param {String} url Target URL for request.
     * @param {Object} [payload] Payload for request.
     * @param {Object} [parameters] - Parameters for sending the request
     * @param {Boolean} [parameters.async] - True for sending async, false for sync. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] - Headers for appending to request
     * @memberof module:WebApiClient
     * @return {Promise<Object>|Object}
     */
    SendRequest<Res>(method: string, url: string, payload: any,
        parameters: Array<Header> | SendRequestEntityParameters): Promise<Res> | Res | BatchRequest {

        let params: SendRequestEntityParameters =
            // Fallback for request headers array as fourth parameter
            (Array.isArray(parameters)) ?
                { headers: parameters } :
                parameters


        if (this.Token) {
            params.headers = params.headers || [];
            params.headers.push({ key: "Authorization", value: "Bearer " + this.Token });
        }

        if (params.asBatch) {
            return new BatchRequest({
                method: method,
                url: url,
                payload: payload,
                headers: params.headers
            })
        }

        const asynchronous = this.GetAsync(params);

        return (asynchronous) ?
            this.SendAsync(method, url, payload, params) :
            this.SendSync(method, url, payload, params);
    }


    /**
     * @description Applies configuration to WebApiClient.
     * @method Configure
     * @param {Object} configuration Object with keys named after WebApiClient Members, such as "Token"s
     * @memberof module:WebApiClient
     * @return {void}
     * @Deprecated
     */
    Configure(configuration: Record<string, any>): void {
        for (var property in configuration) {
            if (!configuration.hasOwnProperty(property)) {
                continue;
            }

            (<any>this)[property] = configuration[property];
        }
    }

    /**
     * @description Gets the current base API url that is used.
     * @method GetApiUrl
     * @memberof module:WebApiClient
     * @return {String}
     */
    GetApiUrl(): string {
        return this.GetClientUrl() + "/api/data/v" + this.ApiVersion + "/";
    }

    /**
     * @description Creates a given record in CRM.
     * @method Create
     * @param {Object} parameters Parameters for creating record
     * @param {String} parameters.entityName Entity name of record that should be created
     * @param {String} [parameters.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {Object} parameters.entity Object containing record data
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<String>|Promise<object>|String|Object} - Returns Promise<Object> if return=representation header is set, otherwise Promise<String>. Just Object or String if sent synchronously.
     */
    Create(params: EntityParameters & SendParameters & { entity: any }): Promise<any> | any {

        if ((!params.entityName && !params.overriddenSetName) || !params.entity) {
            throw new Error("Entity name and entity object have to be passed!");
        }

        const url = this.GetApiUrl() + this.GetSetName(params.entityName, params.overriddenSetName);

        return this.SendRequest("POST", url, params.entity, params);
    }

    /**
     * @description Retrieves records from CRM
     * @method Retrieve
     * @param {Object} parameters Parameters for retrieving records
     * @param {String} parameters.entityName Entity name of records that should be retrieved
     * @param {String} [parameters.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} [parameters.queryParams] Query Parameters to append to URL, such as ?$select=*
     * @param {String} [parameters.fetchXml] Fetch XML query
     * @param {String} [parameters.entityId] ID of entity to retrieve, will return single record
     * @param {Array<property:string,value:string>} [parameters.alternateKey] Alternate key array for retrieving single record
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<object>|Object} - Returns Promise<Object> if asyncj, just Object if sent synchronously.
     */
    Retrieve(params: EntityParameters & SendParameters): Promise<any> | any {

        if (!params.entityName && !params.overriddenSetName) {
            throw new Error("Entity name has to be passed!");
        }

        let url = this.GetApiUrl() + this.GetSetName(params.entityName, params.overriddenSetName);

        if (params.entityId) {
            url += "(" + RemoveIdBrackets(params.entityId) + ")";
        }
        else if (params.fetchXml) {
            url += "?fetchXml=" + escape(params.fetchXml);
        }
        else if (params.alternateKey) {
            url += BuildAlternateKeyUrl(params);
        }

        if (params.queryParams) {
            url += params.queryParams;
        }

        return this.SendRequest("GET", url, null, params);
    }

    /**
     * @description Updates a given record in CRM.
     * @method Update
     * @param {Object} parameters Parameters for updating record
     * @param {String} parameters.entityName Entity name of records that should be updated
     * @param {String} [parameters.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} [parameters.entityId] ID of entity to update
     * @param {Array<property:string,value:string>} [parameters.alternateKey] Alternate key array for updating record
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<String>|Promise<object>|String|Object} - Returns Promise<Object> if return=representation header is set, otherwise Promise<String>. Just Object or String if sent synchronously.
     */
    Update(params: EntityParameters & SendParameters & { entity: any }): Promise<any> | any {

        if (!params.entity) {
            throw new Error("Update object has to be passed!");
        }

        const url = this.GetRecordUrl(params);

        return this.SendRequest("PATCH", url, params.entity, params);
    }

    /**
     * @description Deletes a given record in CRM.
     * @method Delete
     * @param {Object} parameters Parameters for deleting record
     * @param {String} parameters.entityName Entity name of records that should be deleted
     * @param {String} [parameters.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} [parameters.entityId] ID of entity to delete
     * @param {Array<property:string,value:string>} [parameters.alternateKey] Alternate key array for deleting record
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<String>|String} - Returns Promise<String> if async, just String if sent synchronously.
     */
    Delete(params: EntityParameters & SendParameters): Promise<any> | any {

        let url = this.GetRecordUrl(params);

        if (params.queryParams) {
            url += params.queryParams;
        }

        return this.SendRequest("DELETE", url, null, params);
    }

    /**
     * @description Associates given records in CRM.
     * @method Associate
     * @param {Object} parameters Parameters for associating records
     * @param {String} parameters.relationShip Name of relation ship to use for associating
     * @param {Object} parameters.source Source entity for disassociating
     * @param {String} [parameters.source.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} parameters.source.entityId ID of entity
     * @param {String} parameters.source.entityName Logical name of entity, such as "account"
     * @param {Object} parameters.target Target entity for disassociating
     * @param {String} [parameters.target.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} parameters.target.entityId ID of entity
     * @param {String} parameters.target.entityName Logical name of entity, such as "account"
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<String>|String} - Returns Promise<String> if async, just String if sent synchronously.
     */
    Associate<T = any>(params: {
        relationShip: string,
        source: EntityParameters,
        target: EntityParameters
    } & SendRequestEntityParameters): Promise<T> | T | BatchRequest {


        if (!params.relationShip) {
            throw new Error("Relationship has to be passed!");
        }

        if (!params.source || !params.target) {
            throw new Error("Source and target have to be passed!");
        }

        const targetUrl = this.GetRecordUrl(params.target);
        const relationShip = "/" + params.relationShip + "/$ref";

        const url = targetUrl + relationShip;

        const payload = { "@odata.id": this.GetRecordUrl(params.source) };

        return this.SendRequest("POST", url, payload, params);
    }

    /**
     * @description Disassociates given records in CRM.
     * @method Disassociate
     * @param {Object} parameters Parameters for disassociating records
     * @param {String} parameters.relationShip Name of relation ship to use for disassociating
     * @param {Object} parameters.source Source entity for disassociating
     * @param {String} [parameters.source.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} parameters.source.entityId ID of entity
     * @param {String} parameters.source.entityName Logical name of entity, such as "account"
     * @param {Object} parameters.target Target entity for disassociating
     * @param {String} [parameters.target.overriddenSetName] Plural name of entity, if not according to plural rules
     * @param {String} parameters.target.entityId ID of entity
     * @param {String} parameters.target.entityName Logical name of entity, such as "account"
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<String>|String} - Returns Promise<String> if async, just String if sent synchronously.
     */
    Disassociate<T = any>(params: {
        relationShip: string,
        source: EntityParameters,
        target: EntityParameters
    } & SendRequestEntityParameters): Promise<T> | T | BatchRequest {

        if (!params.relationShip) {
            throw new Error("Relationship has to be passed!");
        }

        if (!params.source || !params.target) {
            throw new Error("Source and target have to be passed!");
        }

        if (!params.source.entityId) {
            throw new Error("Source needs entityId set!");
        }

        const targetUrl = this.GetRecordUrl(params.target);
        const relationShip = "/" + params.relationShip + "(" + RemoveIdBrackets(params.source.entityId) + ")/$ref";

        const url = targetUrl + relationShip;

        return this.SendRequest("DELETE", url, null, params);
    }

    /**
     * @description Executes the given request in CRM.
     * @method Execute
     * @param {Object} request Request to send, must be in prototype chain of WebApiClient.Requests.Request.
     * @param {Boolean} [request.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [request.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<Object>|Object} - Returns Promise<Object> if async, just Object if sent synchronously.
     */
    Execute<T = any>(request: any): Promise<T> | T | BatchRequest {
        if (!request) {
            throw new Error("You need to pass a request!");
        }

        // if (!(request instanceof WebApiClient.Requests.Request)) {
        //     throw new Error("Request for execution must be in prototype chain of WebApiClient.Request");
        // }

        return this.SendRequest<T>(request.method, request.buildUrl(), request.payload, request);
    }

    /**
     * @description Sends the given batch to CRM.
     * @method SendBatch
     * @param {Object} batch Batch to send to CRM
     * @param {Boolean} [batch.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [batch.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<Object>|Object} - Returns Promise<Object> if async, just Object if sent synchronously.
     */
    SendBatch<T = any>(batch: Batch): Promise<T> | T | BatchRequest {
        if (!batch) {
            throw new Error("You need to pass a batch!");
        }

        if (!(batch instanceof Batch)) {
            throw new Error("Batch for execution must be a WebApiClient.Batch object");
        }

        const url = this.GetApiUrl() + "$batch";

        //batch.headers = batch.headers || [];
        batch.headers.push({ key: "Content-Type", value: "multipart/mixed;boundary=" + batch.name });

        const payload = batch.buildPayload();

        return this.SendRequest<T>("POST", url, payload, batch);
    }

    /**
     * @description Expands all odata.nextLink (deferred) properties for an array of records.
     * @method Expand
     * @param {Object} parameters Configuration for expanding
     * @param {Array<Object>} parameters.records Array of records to expand
     * @param {Boolean} [parameters.async] True for sending asynchronous, false for synchronous. Defaults to true.
     * @param {Array<key:string,value:string>} [parameters.headers] Headers to attach to request
     * @memberof module:WebApiClient
     * @return {Promise<Object>|Object} - Returns Promise<Object> if async, just Object if sent synchronously.
     */
    Expand<T = any>(params: { records: Array<T>, async?: boolean }): Promise<T[]> | T[] {
        /// <summary>Expands all odata.nextLink / deferred properties for an array of records</summary>
        /// <param name="parameters" type="Object">Object that contains 'records' array or object. Optional 'headers'.</param>
        /// <returns>Promise for sent request or result if sync.</returns>
        const records = params.records;

        let requests = Array<Promise<T>>()

        const asynchronous = this.GetAsync(params);

        for (let i = 0; i < records.length; i++) {
            const record = records[i] as any;

            for (let attribute in record) {
                if (!record.hasOwnProperty(attribute)) {
                    continue;
                }

                const name = attribute.replace("@odata.nextLink", "");

                // If nothing changed, this was not a deferred attribute
                if (!name || name === attribute) {
                    continue;
                }

                record[name] = this.SendRequest<T>("GET", record[attribute], null, params);

                // Delete @odata.nextLink property
                delete record[attribute];
            }

            if (asynchronous) {
                throw new Error("Promise.props not implemented yet in ES6 Promises")
                //requests.push(Promise.props(record));
            }
        }

        if (asynchronous) {
            return Promise.all(requests);
        } else {
            return records;
        }
    }



}

const batchName = "batch_UrlLimitExeedingRequest";

function GetCrmContext() {
    if (typeof (GetGlobalContext) !== "undefined") {
        return GetGlobalContext();
    }

    if (typeof (Xrm) !== "undefined") {
        return Xrm.Page.context;
    }
}

function MergeResults(firstResponse: any, secondResponse: any) {
    if (!firstResponse && !secondResponse) {
        return null;
    }

    if (firstResponse && !secondResponse) {
        return firstResponse;
    }

    if (!firstResponse && secondResponse) {
        return secondResponse;
    }

    firstResponse.value = firstResponse.value.concat(secondResponse.value);

    delete firstResponse["@odata.nextLink"];
    delete firstResponse["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"];

    return firstResponse;
}

function RemoveIdBrackets(id?: string) {
    if (!id) {
        return id;
    }

    return id.replace("{", "").replace("}", "");
}

function VerifyHeader(header: Header) {
    if (!header.key || typeof (header.value) === "undefined") {
        throw new Error("Each request header needs a key and a value!");
    }
}

function AppendHeaders(xhr: XMLHttpRequest, headers?: Array<Header>) {
    if (headers) {
        for (let i = 0; i < headers.length; i++) {
            var header = headers[i];

            VerifyHeader(header);

            xhr.setRequestHeader(header.key, header.value!);
        }
    }
}

function GetNextLink(response: Record<string, any>) {
    return response["@odata.nextLink"];
}

function GetPagingCookie(response: Record<string, any>) {
    return response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"];
}

function SetCookie(pagingCookie: string, parameters: { fetchXml?: string }) {
    if (parameters.fetchXml) throw Error('required param "fetchXml" is undefined')

    // Parse cookie that we retrieved with response
    const parser = new DOMParser();
    const cookieXml = parser.parseFromString(pagingCookie, "text/xml");

    const cookie = cookieXml.documentElement;

    let cookieAttribute = cookie.getAttribute("pagingcookie");

    // In CRM 8.X orgs, fetch cookies where escaped twice. Since 9.X, they are only escaped once.
    // Below indexOf check checks for the double escaped cookie string '<cookie page'.
    // In CRM 9.X this will lead to no matches, as cookies start as '%3ccookie%20page'.
    if (cookieAttribute && cookieAttribute.indexOf("%253ccookie%2520page") === 0) {
        cookieAttribute = unescape(cookieAttribute);
    }

    const cookieValue = unescape(cookieAttribute!);
    const pageNumber = parseInt(/<cookie page="([\d]+)">/.exec(cookieValue)![1]) + 1;

    // Parse our original fetch XML, we will inject the paging information in here
    const fetchXml = parser.parseFromString(parameters.fetchXml!, "text/xml");
    const fetch = fetchXml.documentElement;

    fetch.setAttribute("page", String(pageNumber));
    fetch.setAttribute("paging-cookie", cookieValue);

    // Serialize modified fetch with paging information
    var serializer = new XMLSerializer();
    return serializer.serializeToString(fetchXml);
}

function SetPreviousResponse(parameters: any, response: any) {
    // Set previous response
    parameters._previousResponse = response;
}

function MergeHeaders(...args: Array<Array<Header>>): Array<Header> {
    let headers = Array<Header>();

    if (!args) {
        return headers;
    }

    for (let i = 0; i < args.length; i++) {
        const headersToAdd = args[i];

        if (!headersToAdd || !Array.isArray(headersToAdd)) {
            continue;
        }

        for (let j = 0; j < headersToAdd.length; j++) {
            const header = headersToAdd[j];
            VerifyHeader(header);

            let addHeader = true;

            for (var k = 0; k < headers.length; k++) {
                if (headers[k].key === header.key) {
                    addHeader = false;
                    break;
                }
            }

            if (addHeader) {
                headers.push(header);
            }
        }
    }

    return headers;
}

function IsBatch(responseText: string) {
    return responseText && /^--batchresponse_[a-fA-F0-9\-]+$/m.test(responseText);
}

function ParseResponse(xhr: XMLHttpRequest) {
    var responseText = xhr.responseText;

    // Check if it is a batch response
    if (IsBatch(responseText)) {
        return new BatchResponse({
            xhr: xhr
        });
    }
    else {
        return JSON.parse(xhr.responseText);
    }
}

function IsOverlengthGet(method: string, url: string) {
    return method && method.toLowerCase() === "get" && url && url.length > 2048;
}


function BuildAlternateKeyUrl(params?: { alternateKey?: Array<Key> }) {
    if (!params || !params.alternateKey) {
        return "";
    }

    var url = "(";

    for (var i = 0; i < params.alternateKey.length; i++) {
        var key = params.alternateKey[i];
        var value = key.value;

        if (typeof (key.value) !== "number") {
            value = "'" + key.value + "'";
        }

        url += key.property + "=" + value;

        if (i + 1 === params.alternateKey.length) {
            url += ")";
        }
        else {
            url += ",";
        }
    }

    return url;
}

export const Instance = new WebApiClientClass()





