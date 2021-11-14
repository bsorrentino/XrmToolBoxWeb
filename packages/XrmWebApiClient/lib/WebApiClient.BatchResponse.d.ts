import { BatchResponseParameters, ChangeSetResponse, IBatchResponse, IResponse } from "./WebApiClient.Base";
export declare class BatchResponse implements IBatchResponse {
    name?: string;
    changeSetResponses: Array<ChangeSetResponse>;
    batchResponses: Array<IResponse>;
    isFaulted: boolean;
    errors: Array<Record<string, any>>;
    xhr?: XMLHttpRequest;
    constructor(params: BatchResponseParameters);
}
