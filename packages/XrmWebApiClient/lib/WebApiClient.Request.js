import { Instance as WebApiClient } from './WebApiClient.Core';
function AppendRequestParams(url, params) {
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
function AppendParamValues(url, params) {
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
export class Request {
    constructor() {
        this.method = "";
        this.name = "";
        this.bound = false;
        this.entityName = "";
        this.entityId = "";
        this.async = true;
    }
    static of(parameters) {
        return new Request().with(parameters);
    }
    with(parameters) {
        const request = Object.create(this);
        for (let parameter in parameters) {
            if (!parameters.hasOwnProperty(parameter)) {
                continue;
            }
            request[parameter] = parameters[parameter];
        }
        return request;
    }
    buildUrl() {
        const baseUrl = WebApiClient.GetApiUrl();
        let url = baseUrl;
        if (this.bound && this.entityId) {
            const entityId = this.entityId.replace("{", "").replace("}", "");
            url += WebApiClient.GetSetName(this.entityName) + "(" + entityId + ")/";
        }
        if (this.bound && this.name.indexOf("Microsoft.Dynamics.CRM.") === -1) {
            url += "Microsoft.Dynamics.CRM.";
        }
        url += this.name;
        if (this.urlParams) {
            url = AppendRequestParams(url, this.urlParams);
            url = AppendParamValues(url, this.urlParams);
        }
        else {
            url += "()";
        }
        return url;
    }
}
