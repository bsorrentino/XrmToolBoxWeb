import * as WebApiClient from '@bsorrentino/xrmtoolboxweb-webapiclient'

export interface Response {
    BusinessUnitId: string
    OrganizationId: string
    UserId: string
}

export const Invoke = () => 
    WebApiClient.Instance.Execute<Response>(WebApiClient.WhoAmIRequest) as Promise<Response>
    
