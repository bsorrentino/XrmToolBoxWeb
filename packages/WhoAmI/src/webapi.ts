import WebApiClient from "xrm-webapi-client";

export namespace WhoAmI {


    export interface Response {
        BusinessUnitId: string
        OrganizationId: string
        UserId: string
    }

    export const Invoke = () => 
        WebApiClient.Execute<Response>(WebApiClient.Requests.WhoAmIRequest) as Promise<Response>
    
        
    
}