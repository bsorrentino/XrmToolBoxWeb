import * as WebApiClient from "xrmtoolboxweb-webapiclient";

export namespace WhoAmI {


    export interface Response {
        BusinessUnitId: string
        OrganizationId: string
        UserId: string
    }

    export const Invoke = () => 
        WebApiClient.Instance.Execute<Response>(WebApiClient.WhoAmIRequest) as Promise<Response>
    
        
    
}