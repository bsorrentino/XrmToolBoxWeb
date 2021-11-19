import { IResponse, ResponseParameters } from "./WebApiClient.Base";

function ParseContentId(rawData: any) {
    var contentIdRaw = (/^Content-ID: ([0-9]+)$/m).exec(rawData);

    if (contentIdRaw && contentIdRaw.length > 1) {
        return contentIdRaw[1];
    }
}

function ParsePayload(rawData: any) {
    var payloadRaw = (/^{[\s\S]*}/m).exec(rawData);

    if (payloadRaw && payloadRaw.length > 0) {
        return JSON.parse(payloadRaw[0]);
    }
}

function ParseStatus(rawData: any) {
    var statusRaw = (/^HTTP\/1\.1 ([0-9]{3,3}).*$/m).exec(rawData);

    if (statusRaw && statusRaw.length > 1) {
        return statusRaw[1];
    }
}

function ParseHeaders(rawData: any) {
    var headersRaw = (/HTTP\/1.1.*[\r\n]+([\S\s]*)?(?={|$)/g).exec(rawData);

    if (headersRaw && headersRaw.length > 1) {
        var headers: Record<string, any> = {};

        var headersSplit = headersRaw[1].split(/[\r\n]/);

        for (var i = 0; i < headersSplit.length; i++) {
            var line = headersSplit[i];

            var delimiterIndex = line.indexOf(": ");

            var key = line.substring(0, delimiterIndex);

            if (!key) {
                continue;
            }

            // Start after delimiterIndex (which is two chars long)
            var value = line.substring(delimiterIndex + 2);

            headers[key] = value;
        }

        return headers;
    }
}

/**
 * Response returned for every requests inside a batch.
 * @constructor
 * @see https://msdn.microsoft.com/en-us/library/mt607719.aspx#bkmk_Example
 * @param {Object} [parameters]
 * @param {String} [parameters.contentId] Content ID for this response. You can identify which request this response belongs to, if the Content-Id was set on the request as well
 * @param {Object} [parameters.payload] Message body returned for this response, parsed JSON object
 * @param {string} [parameters.status] HTTP status code returned for this response
 * @param {Object} [parameters.headers] Headers returned for this response. Header keys are set as object keys with the corresponding values
 * @param {string} [parameters.rawData] Text fragment returned for this response. Will be used for parsing other properties if passed
 * @memberof module:WebApiClient
 */
export class Response implements IResponse {
    rawData?: string;
    /**
     * @property {String} contentId - Content ID for this response. You can identify which request this response belongs to, if the Content-Id was set on the request as well
     * @this {Response}
     */
    contentId?: string;
    /**
     * @property {Object} payload - Message body returned for this response, parsed JSON object
     * @this {Response}
     */
    payload?: Record<string,any>;
    /**
     * @property {String} status - HTTP status code returned for this response
     * @this {Response}
     */
    status?: string;
    /**
     * @property {String} headers - Headers returned for this response. Header keys are set as object keys with the corresponding values
     * @this {Response}
     */
    headers?: any;

    constructor(params: ResponseParameters) {

        if (!params.rawData) {
            this.contentId = params.contentId;
            this.payload = params.payload;
            this.status = params.status;
            this.headers = params.headers;
        } else {
            let rawData = params.rawData;
            this.contentId = ParseContentId(rawData);
            this.payload = ParsePayload(rawData);
            this.status = ParseStatus(rawData);
            this.headers = ParseHeaders(rawData);
        }
    };
}
