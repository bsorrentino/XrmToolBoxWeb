import { Header, Key } from "./WebApiClient.Base";
import { Batch } from './WebApiClient.Batch';
import { BatchRequest } from './WebApiClient.BatchRequest';
import { Request } from './WebApiClient.Request';
export declare type SendParameters = {
    returnAllPages?: boolean;
    isOverLengthGet?: boolean;
    _previousResponse?: any;
    fetchXml?: string;
    headers?: Array<Header>;
};
export declare type EntityParameters<Body = any> = {
    entityName?: string;
    overriddenSetName?: string;
    entityId?: string;
    alternateKey?: Array<Key>;
    queryParams?: string;
};
export declare type SendRequestEntityParameters = SendParameters & EntityParameters & {
    asBatch?: boolean;
    async?: boolean;
};
export interface IWebApiClient {
    ApiVersion: string;
    ReturnAllPages: boolean;
    PrettifyErrors: boolean;
    Async: boolean;
    ClientUrl?: string;
    Token?: string;
}
declare class WebApiClientClass {
    ApiVersion: string;
    ReturnAllPages: boolean;
    PrettifyErrors: boolean;
    Async: boolean;
    ClientUrl?: string;
    Token?: string;
    private DefaultHeaders;
    private GetClientUrl;
    GetSetName(entityName?: string, overriddenSetName?: string): string;
    GetDefaultHeaders(): Array<Header>;
    AppendToDefaultHeaders(...headers: Header[]): void;
    private GetRecordUrl;
    private FormatError;
    SendAsync(method: string, url: string, payload: string | null, parameters: EntityParameters & SendParameters): Promise<any>;
    SendSync(method: string, url: string, payload: any | null, params: EntityParameters & SendParameters): any | undefined;
    GetAsync(parameters: {
        async?: boolean;
    }): boolean;
    SendRequest<Res>(method: string, url: string, payload: any, parameters: Array<Header> | SendRequestEntityParameters): Promise<Res> | Res | BatchRequest;
    Configure(configuration: Record<string, any>): void;
    GetApiUrl(): string;
    Create(params: EntityParameters & SendParameters & {
        entity: any;
    }): Promise<any> | any;
    Retrieve(params: EntityParameters & SendParameters): Promise<any> | any;
    Update(params: EntityParameters & SendParameters & {
        entity: any;
    }): Promise<any> | any;
    Delete(params: EntityParameters & SendParameters): Promise<any> | any;
    Associate<T = any>(params: {
        relationShip: string;
        source: EntityParameters;
        target: EntityParameters;
    } & SendRequestEntityParameters): Promise<T> | T | BatchRequest;
    Disassociate<T = any>(params: {
        relationShip: string;
        source: EntityParameters;
        target: EntityParameters;
    } & SendRequestEntityParameters): Promise<T> | T | BatchRequest;
    Execute<T = any>(request: Request): Promise<T> | T | BatchRequest;
    SendBatch<T = any>(batch: Batch): Promise<T> | T | BatchRequest;
    Expand<T = any>(params: {
        records: Array<T>;
        async?: boolean;
    }): Promise<T[]> | T[];
}
export declare const Instance: WebApiClientClass;
export {};
