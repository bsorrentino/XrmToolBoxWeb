import { ChangeSetParameters, IBatchRequest, IChangeSet } from "./WebApiClient.Base";

let instanceCount = 1;

/**
 * Change sets are containers for requests inside batch requests.
 * All requests inside a change set fail or succeed together.
 * No GET requests are allowed inside change sets.
 * @constructor
 * @see https://msdn.microsoft.com/en-us/library/mt607719.aspx#bkmk_ChangeSets
 * @param {Object} [parameters]
 * @param {String} [parameters.name] The name of the change set (should be unique for this batch). Auto generated if ommitted
 * @param {Array<Request>} [parameters.requests] Array of _POST_ requests for this change set. No get requests are allowed inside change sets. Initialized as empty array if ommitted
 * @memberof module:WebApiClient
 */
export class ChangeSet implements IChangeSet {
    /**
     * @property {String} name - Name of the change set
     * @this {ChangeSet}
     */
    name: string;

    /**
     * @property {Array<Request>} requests - Requests included in the change set. Only non GET requests are allowed.
     * @this {ChangeSet}
     */
    requests: Array<IBatchRequest>;

    constructor(params: ChangeSetParameters) {

        this.name = params.name ?? "changeset_" + instanceCount++;
        this.requests = params.requests ?? [];
    }

    /**
     * @description Converts current change set into a string representation for including in the batch body
     * @return {String}
     * @this {ChangeSet}
     */
    stringify(): string {
        let payload = "";
        let contentId = 1;

        for (let i = 0; i < this.requests.length; i++) {
            payload += "--" + this.name + "\n";

            payload += "Content-Type: application/http\n";
            payload += "Content-Transfer-Encoding:binary\n";

            const request = this.requests[i];
            request.contentId = request.contentId || String(contentId++);

            payload += request.stringify() + "\n";

            // When all requests are stringified, we need a closing changeSet tag
            if (i === this.requests.length - 1) {
                payload += "--" + this.name + "--\n\n";
            }
        }

        return payload;
    }

}



