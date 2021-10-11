import { BatchResponseParameters, ChangeSetResponse, IBatchResponse, IResponse } from "./WebApiClient.Base";
import * as WebApiClient from './WebApiClient.Response'

/**
 * Response returned from WebApiClient.SendBatch method. You will usually not instantiate this yourself.
 * @constructor
 * @see https://msdn.microsoft.com/en-us/library/mt607719.aspx#bkmk_Example
 * @param {Object} [parameters]
 * @param {String} [parameters.name] The name of the batch response
 * @param {Array<{name:string, responses:Array<Response>}>} [parameters.changeSetResponses] Array of responses for change sets, each change set has a separate response
 * @param {Array<Response>} [parameters.batchResponses] Array of responses for GET batch requests
 * @param {bool} [parameters.isFaulted] Indicates whether any of the requests failed
 * @param {Array<string>} [parameters.errors] List of error messages if requests failed
 * @param {XMLHttpRequest} [parameters.xhr] XMLHttpRequest to use for parsing the results and filling the other properties
 * @memberof module:WebApiClient
 */
export class BatchResponse implements IBatchResponse {
    /**
     * @property {String} name - Name of the batch response
     * @this {BatchResponse}
     */
    name?: string;
    /**
     * @property {Array<{name:string, responses:Array<Response>}>} changeSetResponses - Array of responses for change sets, each change set has a separate response
     * @this {BatchResponse}
     */
    changeSetResponses: Array<ChangeSetResponse>;
    /**
     * @property {Array<Response>} batchResponses - Array of responses for GET batch requests
     * @this {BatchResponse}
     */
    batchResponses: Array<IResponse>;
    /**
     * @property {bool} isFaulted - Indicates whether any of the requests failed
     * @this {BatchResponse}
     */

    isFaulted: boolean;
    /**
     * @property {Array<string>} errors - List of error messages if requests failed
     * @this {BatchResponse}
     */

    errors: Array<string>;

    xhr?: XMLHttpRequest;

    constructor(params: BatchResponseParameters) {

        this.name = params.name;

        this.changeSetResponses = params.changeSetResponses || [];

        this.batchResponses = params.batchResponses || [];

        this.isFaulted = params.isFaulted || false;

        this.errors = params.errors || [];

        if (params.xhr) {
            const xhr = params.xhr;
            const responseText = xhr.responseText;

            const responseContentType = xhr.getResponseHeader("Content-Type");
            if (responseContentType) {
                this.name = responseContentType.substring(responseContentType.indexOf("boundary=")).replace("boundary=", "");
            }

            const changeSetBoundaries = responseText.match(/boundary=changesetresponse.*/g);

            for (let i = 0; changeSetBoundaries && i < changeSetBoundaries.length; i++) {
                const changeSetName = changeSetBoundaries[i].replace("boundary=", "");

                // Find all change set responses in responseText
                const changeSetRegex = new RegExp("--" + changeSetName + "[\\S\\s]*?(?=--" + changeSetName + ")", "gm");

                const changeSetResponse = {
                    name: changeSetName,
                    responses: Array<WebApiClient.Response>()
                };

                const changeSets = responseText.match(changeSetRegex);

                if (changeSets) {
                    for (var k = 0; k < changeSets.length; k++) {
                        const response = new WebApiClient.Response({
                            rawData: changeSets[k]
                        });

                        if (response.payload && response.payload.error) {
                            this.isFaulted = true;
                            this.errors.push(response.payload.error);
                        }

                        changeSetResponse.responses.push(response);
                    }
                }
                this.changeSetResponses.push(changeSetResponse);
            }

            // Find all batch responses in responseText
            const batchRegex = new RegExp("--" + this.name + "[\\r\\n]+Content-Type: application\\/http[\\S\\s]*?(?=--" + this.name + ")", "gm");
            const batchResponsesRaw = responseText.match(batchRegex);

            for (let j = 0; batchResponsesRaw && j < batchResponsesRaw.length; j++) {
                const batchResponse = new WebApiClient.Response({
                    rawData: batchResponsesRaw[j]
                });

                if (batchResponse.payload && batchResponse.payload.error) {
                    this.isFaulted = true;
                    this.errors.push(batchResponse.payload.error);
                }

                this.batchResponses.push(batchResponse);
            }
        }
    };

}

