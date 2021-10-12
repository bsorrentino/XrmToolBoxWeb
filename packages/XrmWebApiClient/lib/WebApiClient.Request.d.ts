import { Header, IRequest, RequestParameters } from "./WebApiClient.Base";
export declare class Request implements IRequest {
    method: string;
    name: string;
    bound: boolean;
    entityName: string;
    entityId: string;
    payload?: Record<string, any>;
    headers?: Array<Header>;
    urlParams?: Record<string, string | number>;
    async: boolean;
    with(parameters: RequestParameters): this;
    buildUrl(): string;
}
