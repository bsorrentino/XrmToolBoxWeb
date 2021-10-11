import { IResponse, ResponseParameters } from "./WebApiClient.Base";
export declare class Response implements IResponse {
    rawData?: string;
    contentId?: string;
    payload?: Record<string, any>;
    status?: string;
    headers?: any;
    constructor(params: ResponseParameters);
}
