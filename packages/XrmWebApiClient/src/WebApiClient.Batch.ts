import { BatchParameters, Header, IBatch } from './WebApiClient.Base'
import { BatchRequest } from './WebApiClient.BatchRequest';
import { ChangeSet } from './WebApiClient.ChangeSet';

/**
 * Batch to send using WebApiClient.SendBatch.
 * Batches can be used for sending multiple requests at once.
 * All requests inside a change set will be executed as a transaction, i.e. fail or succeed together.
 * @constructor
 * @see https://msdn.microsoft.com/en-us/library/mt607719.aspx#bkmk_BatchRequests
 * @param {Object} parameters
 * @param {String} [parameters.name] Name to set for this batch. Will be set to a default name if ommitted
 * @param {Array<IChangeSet>} [parameters.changeSets] Change Sets to include in this batch. Defaults to an empty array
 * @param {Array<Request>} [parameters.requests] GET requests to include in this batch. GET requests must be contained in here and are forbidden in change sets. Defaults to an empty array 
 * @param {Array<{key:string,value:string}>} [parameters.headers] Headers to append to the batch.
 * @param {bool} [parameters.async] True for sending async, false for sending sync. WebApiClient default is async
 * @param {bool} [parameters.isOverLengthGet] Used internally for flagging a GET request that was originally not a batch but had to be transformed to a batch request automatically since the url was too long
 * @memberof module:WebApiClient
 */
export class Batch implements IBatch {

    name: string;
    changeSets: Array<ChangeSet>;
    requests: Array<BatchRequest>;
    headers: Array<Header>;
    async?: boolean;
    isOverLengthGet?: boolean;

    constructor(params: BatchParameters) {
        const {
            name = 'batch_AAA123',
            changeSets = [],
            requests = [],
            headers = []
        } = params

        this.name = name
        this.changeSets = changeSets
        this.requests = requests
        this.headers = headers
        this.async = params.async
        this.isOverLengthGet = params.isOverLengthGet
    }

    buildPayload() {
        let payload = "";

        for (let i = 0; i < this.changeSets.length; i++) {
            payload += "--" + this.name + "\n";
            payload += "Content-Type: multipart/mixed;boundary=" + this.changeSets[i].name + "\n\n";
            var changeSet = this.changeSets[i];

            payload += changeSet.stringify();
        }

        for (var j = 0; j < this.requests.length; j++) {
            payload += "--" + this.name + "\n";

            payload += "Content-Type: application/http\n";
            payload += "Content-Transfer-Encoding:binary\n\n";

            var request = this.requests[j];

            payload += request.stringify();

            // When all requests are stringified, we need a closing batch tag
            if (j === this.requests.length - 1) {
                payload += "--" + this.name + "--\n";
            }
        }

        return payload;
    };

}

