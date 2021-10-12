export interface Key {
    property: string;
    value: string | number;
}
export interface Header {
    key: string;
    value: string | null;
}
export interface IBatchRequest {
    method: string;
    url?: string;
    payload: string | null;
    headers: Array<Header>;
    contentId?: string;
    stringify(): string;
}
export declare type BatchRequestParameters = Partial<IBatchRequest> & {
    method: string;
};
export interface IChangeSet {
    name: string;
    requests: Array<IBatchRequest>;
    stringify(): string;
}
export declare type ChangeSetParameters = Partial<IChangeSet>;
export interface IBatch {
    name: string;
    changeSets: Array<IChangeSet>;
    requests: Array<IBatchRequest>;
    headers: Array<Header>;
    async?: boolean;
    isOverLengthGet?: boolean;
    buildPayload(): string;
}
export declare type BatchParameters = Partial<IBatch>;
export interface IResponse {
    rawData?: string;
    contentId?: string;
    payload?: object;
    status?: string;
    headers?: any;
}
export declare type ResponseParameters = Partial<IResponse>;
export interface ChangeSetResponse {
    name?: string;
    responses?: Array<IResponse>;
}
export interface IBatchResponse {
    name?: string;
    changeSetResponses: Array<ChangeSetResponse>;
    batchResponses: Array<IResponse>;
    isFaulted: boolean;
    errors: Array<Record<string, any>>;
    xhr?: XMLHttpRequest;
}
export declare type BatchResponseParameters = Partial<IBatchResponse>;
export interface IRequest<Payload = Record<string, any>> {
    method: string;
    name: string;
    bound?: boolean;
    entityName?: string;
    entityId?: string;
    payload?: Payload;
    headers?: Array<Header>;
    urlParams?: Record<string, string | number>;
    async?: boolean;
}
export declare type RequestParameters = Partial<IRequest>;
