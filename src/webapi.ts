import { AuthenticationResult } from "@azure/msal-browser";
import WebApiClient, {  } from "xrm-webapi-client";
import { DependentComponentType, EntityFilters} from './types'
const POWERPLATFORM_ENV_URL = 'https://bsc-labs.crm.dynamics.com'

export const scopes = [ `${POWERPLATFORM_ENV_URL}/user_impersonation` ]

export const prepareWebApiRequest = ( auth:AuthenticationResult ) => {
    
    let client = WebApiClient as any
    client.ApiVersion = '9.0'
    client.Token = auth.accessToken
    client.ClientUrl = POWERPLATFORM_ENV_URL
}

export interface WhoAmIResult {
    BusinessUnitId: string
    OrganizationId: string
    UserId: string
}
export const WhoAmIRequest = () => 
    WebApiClient.Execute<WhoAmIResult>(WebApiClient.Requests.WhoAmIRequest) as Promise<WhoAmIResult>
        

const retrieveDependenciesForDeleteRequest = ( params: { ObjectId:string, ComponentType:DependentComponentType} ) => 
    WebApiClient.Execute( WebApiClient.Requests.RetrieveDependenciesForDeleteRequest.with( {  urlParams: params } ) )


export const RetrieveAllEntities = ( params: { EntityFilters:EntityFilters, RetrieveAsIfPublished:Boolean}) =>   
    WebApiClient.Execute(WebApiClient.Requests.RetrieveAllEntitiesRequest.with( {  urlParams: params } ))

