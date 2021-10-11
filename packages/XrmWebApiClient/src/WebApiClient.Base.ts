export interface Key {
    property: string;
    value: string | number;
}

export interface Header {
    key: string;
    value: string | null;
}

export interface IBatchRequest {
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
    payload: string | null;
    headers: Array<Header>;
    contentId?: string;
    stringify(): string
}

export type BatchRequestParameters = Partial<IBatchRequest> & { method: string }

export interface IChangeSet {
    name: string;
    requests: Array<IBatchRequest>;
    stringify(): string
}

export type ChangeSetParameters = Partial<IChangeSet>

export interface IBatch {
    /**
     * @property name - Name of the batch
     */
    name: string;
    /**
     * @property changeSets - Change sets included in this batch. Only non GET requests may be included here. Each change set will execute as a separate transaction
     */
    changeSets: Array<IChangeSet>;
    /**
     * @property requests - GET Requests included in this batch. GET request may only be included in here
     */
    requests: Array<IBatchRequest>;
    /**
     * @property async - False for executing the batch synchronously, defaults to async
     */
    headers: Array<Header>;
    /**
     * @property async - False for executing the batch synchronously, defaults to async
     */
    async?: boolean;
    /**
     * @property isOverLengthGet - Used internally for flagging a GET request that was originally not a batch but had to be transformed to a batch request automatically since the url was too long
     */
    isOverLengthGet?: boolean;

    /**
     * @description Creates a text representation of the whole batch for sending as message body
     * @return {String}
     * @this {Batch}
     */
    buildPayload(): string

}

export type BatchParameters = Partial<IBatch>

export interface IResponse {
    rawData?: string;
    contentId?: string;
    payload?: object;
    status?: string;
    headers?: any;
}

export type ResponseParameters = Partial<IResponse>

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

export type BatchResponseParameters = Partial<IBatchResponse>


export interface IRequest<Payload = Record<string,any>>  {
    method: string;
    name: string;
    bound?: boolean;
    entityName?: string;
    entityId?: string;
    payload?: Payload;
    headers?: Array<Header>;
    urlParams?: Record<string,string>;
    async?: boolean;

}

export type RequestParameters = Partial<IRequest>
