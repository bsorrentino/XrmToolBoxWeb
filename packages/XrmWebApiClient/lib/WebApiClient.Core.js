import { Batch } from './WebApiClient.Batch';
import { BatchResponse } from './WebApiClient.BatchResponse';
import { BatchRequest } from './WebApiClient.BatchRequest';
import { Request } from './WebApiClient.Request';
class WebApiClientClass {
    constructor() {
        this.ApiVersion = "8.0";
        this.ReturnAllPages = false;
        this.PrettifyErrors = true;
        this.Async = true;
        this.DefaultHeaders = [
            { key: "Accept", value: "application/json" },
            { key: "OData-Version", value: "4.0" },
            { key: "OData-MaxVersion", value: "4.0" },
            { key: "If-None-Match", value: null },
            { key: "Content-Type", value: "application/json; charset=utf-8" }
        ];
    }
    GetClientUrl() {
        const context = GetCrmContext();
        if (context) {
            return context.getClientUrl();
        }
        if (this.ClientUrl) {
            return this.ClientUrl;
        }
        throw new Error("Failed to retrieve client url, is ClientGlobalContext.aspx available?");
    }
    GetSetName(entityName, overriddenSetName) {
        if (overriddenSetName) {
            return overriddenSetName;
        }
        if (!entityName)
            throw new Error('neither entityName and overriddenSetName has been provided!');
        const ending = entityName.slice(-1);
        switch (ending) {
            case 's':
                return entityName + "es";
            case 'y':
                return entityName.substring(0, entityName.length - 1) + "ies";
            default:
                return entityName + "s";
        }
    }
    ;
    GetDefaultHeaders() {
        return this.DefaultHeaders;
    }
    ;
    AppendToDefaultHeaders(...headers) {
        if (!headers.length) {
            return;
        }
        for (let i = 0; i < headers.length; i++) {
            const argument = headers[i];
            VerifyHeader(argument);
            this.DefaultHeaders.push(argument);
        }
    }
    GetRecordUrl(params) {
        if ((!params.entityName && !params.overriddenSetName) || (!params.entityId && !params.alternateKey)) {
            throw new Error("Need entity name or overridden set name and entity id or alternate key for getting record url!");
        }
        let url = this.GetApiUrl() + this.GetSetName(params.entityName, params.overriddenSetName);
        if (params.alternateKey) {
            url += BuildAlternateKeyUrl(params);
        }
        else {
            url += "(" + RemoveIdBrackets(params.entityId) + ")";
        }
        return url;
    }
    FormatError(xhr) {
        if (xhr && xhr.response) {
            const response = ParseResponse(xhr);
            if (response instanceof BatchResponse) {
                let errors = "";
                if (response.errors.length > 0) {
                    errors = response.errors.map(e => e.code + ": " + e.message).join("\n\r");
                }
                return xhr.status + " - " + errors;
            }
            const json = JSON.parse(xhr.response);
            if (!this.PrettifyErrors) {
                json.xhrStatusText = xhr.statusText;
                return JSON.stringify(json);
            }
            else {
                let error = "";
                if (json.error) {
                    error = json.error.message;
                }
                return xhr.statusText + ": " + error;
            }
        }
        return "";
    }
    SendAsync(method, url, payload, parameters) {
        const { returnAllPages, isOverLengthGet, _previousResponse, headers: pHeaders = [] } = parameters;
        const xhr = new XMLHttpRequest();
        const promise = new Promise((resolve, reject) => {
            xhr.onload = () => {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (xhr.status === 200) {
                    let response = ParseResponse(xhr);
                    if (response instanceof BatchResponse) {
                        if (isOverLengthGet) {
                            response = response.batchResponses[0].payload;
                        }
                        else {
                            resolve(response);
                        }
                    }
                    const nextLink = GetNextLink(response);
                    const pagingCookie = GetPagingCookie(response);
                    const moreRecords = "@Microsoft.Dynamics.CRM.morerecords" in response ? response["@Microsoft.Dynamics.CRM.morerecords"] : true;
                    response = MergeResults(_previousResponse, response);
                    if (moreRecords && nextLink && (this.ReturnAllPages || returnAllPages)) {
                        SetPreviousResponse(parameters, response);
                        resolve(this.SendAsync("GET", nextLink, null, parameters));
                    }
                    else if (parameters.fetchXml && moreRecords && pagingCookie && (this.ReturnAllPages || returnAllPages)) {
                        const nextPageFetch = SetCookie(pagingCookie, parameters);
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
            const batch = new Batch({
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
        if (payload) {
            if (typeof (payload) === "string") {
                xhr.send(payload);
            }
            else {
                xhr.send(JSON.stringify(payload));
            }
        }
        else {
            xhr.send();
        }
        return promise;
    }
    SendSync(method, url, payload, params) {
        const { returnAllPages, isOverLengthGet, _previousResponse, fetchXml, headers: pHeaders = [] } = params;
        const xhr = new XMLHttpRequest();
        let response;
        let headers = Array();
        if (IsOverlengthGet(method, url)) {
            const batch = new Batch({
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
        if (payload) {
            if (typeof (payload) === "string") {
                xhr.send(payload);
            }
            else {
                xhr.send(JSON.stringify(payload));
            }
        }
        else {
            xhr.send();
        }
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 200) {
            response = ParseResponse(xhr);
            if (response instanceof BatchResponse) {
                if (isOverLengthGet) {
                    response = response.batchResponses[0].payload;
                }
                else {
                    return response;
                }
            }
            const nextLink = GetNextLink(response);
            const pagingCookie = GetPagingCookie(response);
            const moreRecords = "@Microsoft.Dynamics.CRM.morerecords" in response ? response["@Microsoft.Dynamics.CRM.morerecords"] : true;
            response = MergeResults(_previousResponse, response);
            if (moreRecords && nextLink && (this.ReturnAllPages || returnAllPages)) {
                SetPreviousResponse(params, response);
                this.SendSync("GET", nextLink, null, params);
            }
            else if (fetchXml && moreRecords && pagingCookie && (this.ReturnAllPages || returnAllPages)) {
                const nextPageFetch = SetCookie(pagingCookie, params);
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
            else {
                response = xhr.statusText;
            }
        }
        else {
            throw new Error(this.FormatError(xhr));
        }
        return response;
    }
    GetAsync(parameters) {
        if (typeof (parameters.async) !== "undefined") {
            return parameters.async;
        }
        return this.Async;
    }
    SendRequest(method, url, payload, parameters) {
        let params = (Array.isArray(parameters)) ?
            { headers: parameters } :
            parameters;
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
            });
        }
        const asynchronous = this.GetAsync(params);
        return (asynchronous) ?
            this.SendAsync(method, url, payload, params) :
            this.SendSync(method, url, payload, params);
    }
    Configure(configuration) {
        for (const property in configuration) {
            if (!configuration.hasOwnProperty(property)) {
                continue;
            }
            this[property] = configuration[property];
        }
    }
    GetApiUrl() {
        return this.GetClientUrl() + "/api/data/v" + this.ApiVersion + "/";
    }
    Create(params) {
        if ((!params.entityName && !params.overriddenSetName) || !params.entity) {
            throw new Error("Entity name and entity object have to be passed!");
        }
        const url = this.GetApiUrl() + this.GetSetName(params.entityName, params.overriddenSetName);
        return this.SendRequest("POST", url, params.entity, params);
    }
    Retrieve(params) {
        if (!params.entityName && !params.overriddenSetName) {
            throw new Error("Entity name has to be passed!");
        }
        let url = this.GetApiUrl() + this.GetSetName(params.entityName, params.overriddenSetName);
        if (params.entityId) {
            url += `(${RemoveIdBrackets(params.entityId)})`;
        }
        else if (params.fetchXml) {
            url += `?fetchXml=${escape(params.fetchXml)}`;
        }
        else if (params.alternateKey) {
            url += BuildAlternateKeyUrl(params);
        }
        if (params.queryParams) {
            url += `?${params.queryParams}`;
        }
        return this.SendRequest("GET", url, null, params);
    }
    Update(params) {
        if (!params.entity) {
            throw new Error("Update object has to be passed!");
        }
        const url = this.GetRecordUrl(params);
        return this.SendRequest("PATCH", url, params.entity, params);
    }
    Delete(params) {
        let url = this.GetRecordUrl(params);
        if (params.queryParams) {
            url += params.queryParams;
        }
        return this.SendRequest("DELETE", url, null, params);
    }
    Associate(params) {
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
    Disassociate(params) {
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
    Execute(request) {
        if (!request) {
            throw new Error("You need to pass a request!");
        }
        if (!(request instanceof Request)) {
            throw new Error("Request for execution must be in prototype chain of WebApiClient.Request");
        }
        return this.SendRequest(request.method, request.buildUrl(), request.payload, request);
    }
    SendBatch(batch) {
        if (!batch) {
            throw new Error("You need to pass a batch!");
        }
        if (!(batch instanceof Batch)) {
            throw new Error("Batch for execution must be a WebApiClient.Batch object");
        }
        const url = this.GetApiUrl() + "$batch";
        batch.headers.push({ key: "Content-Type", value: "multipart/mixed;boundary=" + batch.name });
        const payload = batch.buildPayload();
        return this.SendRequest("POST", url, payload, batch);
    }
    Expand(params) {
        const records = params.records;
        let requests = Array();
        const asynchronous = this.GetAsync(params);
        for (let i = 0; i < records.length; i++) {
            const record = records[i];
            for (let attribute in record) {
                if (!record.hasOwnProperty(attribute)) {
                    continue;
                }
                const name = attribute.replace("@odata.nextLink", "");
                if (!name || name === attribute) {
                    continue;
                }
                record[name] = this.SendRequest("GET", record[attribute], null, params);
                delete record[attribute];
            }
            if (asynchronous) {
                throw new Error("Promise.props not implemented yet in ES6 Promises");
            }
        }
        if (asynchronous) {
            return Promise.all(requests);
        }
        else {
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
function MergeResults(firstResponse, secondResponse) {
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
function RemoveIdBrackets(id) {
    if (!id) {
        return id;
    }
    return id.replace("{", "").replace("}", "");
}
function VerifyHeader(header) {
    if (!header.key || typeof (header.value) === "undefined") {
        throw new Error("Each request header needs a key and a value!");
    }
}
function AppendHeaders(xhr, headers) {
    if (headers) {
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            VerifyHeader(header);
            xhr.setRequestHeader(header.key, header.value);
        }
    }
}
function GetNextLink(response) {
    return response["@odata.nextLink"];
}
function GetPagingCookie(response) {
    return response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"];
}
function SetCookie(pagingCookie, parameters) {
    if (parameters.fetchXml)
        throw Error('required param "fetchXml" is undefined');
    const parser = new DOMParser();
    const cookieXml = parser.parseFromString(pagingCookie, "text/xml");
    const cookie = cookieXml.documentElement;
    let cookieAttribute = cookie.getAttribute("pagingcookie");
    if (cookieAttribute && cookieAttribute.indexOf("%253ccookie%2520page") === 0) {
        cookieAttribute = unescape(cookieAttribute);
    }
    const cookieValue = unescape(cookieAttribute);
    const pageNumber = parseInt(/<cookie page="([\d]+)">/.exec(cookieValue)[1]) + 1;
    const fetchXml = parser.parseFromString(parameters.fetchXml, "text/xml");
    const fetch = fetchXml.documentElement;
    fetch.setAttribute("page", String(pageNumber));
    fetch.setAttribute("paging-cookie", cookieValue);
    const serializer = new XMLSerializer();
    return serializer.serializeToString(fetchXml);
}
function SetPreviousResponse(parameters, response) {
    parameters._previousResponse = response;
}
function MergeHeaders(...args) {
    let headers = Array();
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
            for (let k = 0; k < headers.length; k++) {
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
function IsBatch(responseText) {
    return responseText && /^--batchresponse_[a-fA-F0-9\-]+$/m.test(responseText);
}
function ParseResponse(xhr) {
    const responseText = xhr.responseText;
    if (IsBatch(responseText)) {
        return new BatchResponse({
            xhr: xhr
        });
    }
    else {
        return JSON.parse(xhr.responseText);
    }
}
function IsOverlengthGet(method, url) {
    return method && method.toLowerCase() === "get" && url && url.length > 2048;
}
function BuildAlternateKeyUrl(params) {
    if (!params || !params.alternateKey) {
        return "";
    }
    let url = "(";
    for (let i = 0; i < params.alternateKey.length; i++) {
        const key = params.alternateKey[i];
        let value = key.value;
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
export const Instance = new WebApiClientClass();
