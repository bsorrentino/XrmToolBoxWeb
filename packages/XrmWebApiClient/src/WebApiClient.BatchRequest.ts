import { BatchRequestParameters, Header, IBatchRequest } from "./WebApiClient.Base";

/**
 * Request used inside batches, used for all HTTP methods
 * @constructor
 * @see https://msdn.microsoft.com/en-us/library/mt607719.aspx#bkmk_BatchRequests
 * @param {Object} parameters
 * @param {String} parameters.method The HTTP method such as GET, POST, ... for this request
 * @param {String} parameters.url The url used for this request
 * @param {Object} [parameters.payload] The request body for this request. Will be stringified and embedded.
 * @param {Array<{key:string,value:string}>} [parameters.headers] Headers to append to this request
 * @param {String} parameters.contentId Content ID to set for this request
 * @memberof module:WebApiClient
 */
export class BatchRequest implements IBatchRequest {
    /**
     * @property {String} method - Method of the request such as GET, POST, ...
     * @this {BatchRequest}
     */
    method: string;
    /**
     * @property {String} url - URL for this request
     * @this {BatchRequest}
     */
    url?: string;
    /**
     * @property {Object} payload - Payload to send with this request
     * @this {BatchRequest}
     */
    payload: string|null;
    /**
     * @property {Array<{key: string, value:string}>} headers - Headers to append to this request
     * @this {BatchRequest}
     */
    headers: Array<Header>;
    /**
     * @property {String} contentId - Content ID for this request. Will be set on the responses as well, to match responses with requests
     * @this {BatchRequest}
     */
    contentId?: string;

    constructor(params: BatchRequestParameters) {
        this.method = params.method;
        this.url = params.url;
        this.payload = params.payload ?? null;
        this.contentId = params.contentId;
        this.headers = params.headers ?? []
    }

    /**
     * @description Converts current batch request into a string representation for including in the batch body
     * @return {String}
     * @this {BatchRequest}
     */
    stringify():string {
        let payload = "";

        if (this.contentId) {
            payload += "Content-ID: " + this.contentId + "\n\n";
        }

        payload += this.method + " " + this.url + " HTTP/1.1\n";

        for (var i = 0; i < this.headers.length; i++) {
            var header = this.headers[i];

            if (["accept", "content-type"].indexOf(header.key.toLowerCase()) === -1) {
                payload += header.key + ": " + header.value + "\n";
            }
        }

        if (this.method.toLowerCase() === "get") {
            payload += "Accept: application/json\n\n";
        } else {
            payload += "Content-Type: application/json;type=entry\n\n";
        }

        if (this.payload) {
            payload += JSON.stringify(this.payload);
        }
        else if (this.method.toLowerCase() === "delete") {
            // Delete requests need an empty payload, pass it if not already set
            payload += JSON.stringify({});
        }

        return payload + '\n';
    };

};


