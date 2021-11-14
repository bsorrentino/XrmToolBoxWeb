import { BatchParameters, IBatchRequest, IChangeSet, Header, IBatch } from './WebApiClient.Base';
export declare class Batch implements IBatch {
    name: string;
    changeSets: Array<IChangeSet>;
    requests: Array<IBatchRequest>;
    headers: Array<Header>;
    async?: boolean;
    isOverLengthGet?: boolean;
    constructor(params: BatchParameters);
    buildPayload(): string;
}
