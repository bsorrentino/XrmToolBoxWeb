import * as WebApiClient from './WebApiClient.Response';
export class BatchResponse {
    constructor(params) {
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
                const changeSetRegex = new RegExp("--" + changeSetName + "[\\S\\s]*?(?=--" + changeSetName + ")", "gm");
                const changeSetResponse = {
                    name: changeSetName,
                    responses: Array()
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
    }
    ;
}
