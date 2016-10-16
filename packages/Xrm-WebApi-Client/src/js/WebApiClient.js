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
(function (WebApiClient, undefined) {
    var Promise = require("bluebird");
    
    var apiVersion = "8.0";
    
    function GetCrmContext() {
        if (typeof (GetGlobalContext) !== "undefined") {
            return GetGlobalContext();
        }
        
        if (typeof (Xrm) !== "undefined"){
            return Xrm.Page.context;
        }
        
        throw ("Failed to retrieve context");
    }
    
    function GetClientUrl () {
        var context = GetCrmContext();
        
        return context.getClientUrl();
    }
    
    function RemoveIdBrackets (id) {
        if (!id) {
            return id;
        }
        
        return id.replace("{", "").replace("}", "");
    }
    
    WebApiClient.SetApiVersion = function(version) {
        apiVersion = version;
    };
    
    WebApiClient.GetSetName = function (entityName) {
        var ending = entityName.slice(-1);
        
        switch(ending)
        {
            case 's':
                return entityName + "es";
            case 'y':
                return entityName.substring(0, entityName.length - 1) + "ies";
            default:
                return entityName + "s";
        }
    };
    
    // Private function
    function SendRequest (method, url, payload) {
        var xhr = new XMLHttpRequest();
      
        var promise = new Promise(function(resolve, reject) {
            xhr.onload = function() {
                if(xhr.readyState !== 4) { 
                    return;
                }

                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
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
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function() {
                reject(xhr.statusText);
            };
        });

        xhr.open(method, url, true);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("OData-Version", "4.0");
        xhr.setRequestHeader("OData-MaxVersion", "4.0");
        
        // Prevent caching since it sometimes sends old data as unmodified
        xhr.setRequestHeader("If-None-Match", null);
        
        xhr.send(JSON.stringify(payload));
        
        return promise;
    }
    
    WebApiClient.GetApiUrl = function() {
        return GetClientUrl() + "/api/data/v" + apiVersion + "/";
    };
    
    WebApiClient.Create = function(parameters) {
        var params = parameters || {};
        
        if (!params.entityName || !params.entity) {
            throw ("Entity name and entity object have to be passed!");
        }
        
        var url = WebApiClient.GetApiUrl() + WebApiClient.GetSetName(params.entityName);
        
        return SendRequest("POST", url, params.entity);
    };
    
    WebApiClient.Retrieve = function(parameters) {
        var params = parameters || {};
        
        if (!params.entityName) {
            throw ("Entity name has to be passed!");
        }
        
        var url = WebApiClient.GetApiUrl() + WebApiClient.GetSetName(params.entityName);

        if (params.entityId) {
            url += "(" + RemoveIdBrackets(params.entityId) + ")";
        }
        
        url += params.queryParams;
        
        return SendRequest("GET", url);
    };
    
    WebApiClient.Update = function(parameters) {
        var params = parameters || {};
        
        if (!params.entityName || !params.entity || !params.entityId) {
            throw ("Entity name, ID and entity update object have to be passed!");
        }
        
        var url = WebApiClient.GetApiUrl() + WebApiClient.GetSetName(params.entityName) + "(" + RemoveIdBrackets(params.entityId) + ")";
        
        return SendRequest("PATCH", url, params.entity);
    };
    
    WebApiClient.Delete = function(parameters) {   
        var params = parameters || {};
        
        if (!params.entityName || !params.entityId) {
            throw ("Entity name and entity id have to be passed!");
        }
        
        var url = WebApiClient.GetApiUrl() + WebApiClient.GetSetName(params.entityName) + "(" + RemoveIdBrackets(params.entityId) + ")";
        
        return SendRequest("DELETE", url);
    };
} (window.WebApiClient = window.WebApiClient || {}));