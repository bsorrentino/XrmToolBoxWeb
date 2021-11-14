import { BatchRequestParameters, Header, IBatchRequest } from "./WebApiClient.Base";
export declare class BatchRequest implements IBatchRequest {
    method: string;
    url?: string;
    payload: string | null;
    headers: Array<Header>;
    contentId?: string;
    constructor(params: BatchRequestParameters);
    stringify(): string;
}
