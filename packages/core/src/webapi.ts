import { AuthenticationResult } from "@azure/msal-browser";
import WebApiClient, {  } from "xrm-webapi-client";
const POWERPLATFORM_ENV_URL = 'https://bsc-labs.crm.dynamics.com'

export const scopes = [ `${POWERPLATFORM_ENV_URL}/user_impersonation` ]

export const prepareWebApiRequest = ( auth:AuthenticationResult ) => {
    
    let client = WebApiClient as any
    client.ApiVersion = '9.1'
    client.Token = auth.accessToken
    client.ClientUrl = POWERPLATFORM_ENV_URL
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENUMERATIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/dependency?view=dynamics-ce-odata-9
*/
export enum DependentComponentType	{
    'Entity' = 1,
    'Attribute' = 2,
    'Relationship' = 3,
    'Attribute Picklist Value' = 4,
    'Attribute Lookup Value' = 5,
    'View Attribute' = 6,
    'Localized Label' = 7,
    'Relationship Extra Condition' = 8,
    'Option Set' = 9,
    'Entity Relationship' = 10,
    'Entity Relationship Role' = 11,
    'Entity Relationship Relationships' = 12,
    'Managed Property' = 13,
    'Entity Key' = 14,
    'Privilege' = 16,
    'PrivilegeObjectTypeCode' = 17,
    'Role' = 20,
    'Role Privilege' = 21,
    'Display String' = 22,
    'Display String Map' = 23,
    'Form' = 24,
    'Organization' = 25,
    'Saved Query' = 26,
    'Workflow' = 29,
    'Report' = 31,
    'Report Entity' = 32,
    'Report Category' = 33,
    'Report Visibility' = 34,
    'Attachment' = 35,
    'Email Template' = 36,
    'Contract Template' = 37,
    'KB Article Template' = 38,
    'Mail Merge Template' = 39,
    'Duplicate Rule' = 44,
    'Duplicate Rule Condition' = 45,
    'Entity Map' = 46,
    'Attribute Map' = 47,
    'Ribbon Command' = 48,
    'Ribbon Context Group' = 49,
    'Ribbon Customization' = 50,
    'Ribbon Rule' = 52,
    'Ribbon Tab To Command Map' = 53,
    'Ribbon Diff' = 55,
    'Saved Query Visualization' = 59,
    'System Form' = 60,
    'Web Resource' = 61,
    'Site Map' = 62,
    'Connection Role' = 63,
    'Complex Control' = 64,
    'Field Security Profile' = 70,
    'Field Permission' = 71,
    'Plugin Type' = 90,
    'Plugin Assembly' = 91,
    'SDK Message Processing Step' = 92,
    'SDK Message Processing Step Image' = 93,
    'Service Endpoint' = 95,
    'Routing Rule' = 150,
    'Routing Rule Item' = 151,
    'SLA' = 152,
    'SLA Item' = 153,
    'Convert Rule' = 154,
    'Convert Rule Item' = 155,
    'Hierarchy Rule' = 65,
    'Mobile Offline Profile' = 161,
    'Mobile Offline Profile Item' = 162,
    'Similarity Rule' = 165,
    'Custom Control' = 66,
    'Custom Control Default Config' = 68,
    'Data Source Mapping' = 166,
    'SDKMessage' = 201,
    'SDKMessageFilter' = 202,
    'SdkMessagePair' = 203,
    'SdkMessageRequest' = 204,
    'SdkMessageRequestField' = 205,
    'SdkMessageResponse' = 206,
    'SdkMessageResponseField' = 207,
    'WebWizard' = 210,
    'Index' = 18,
    'Import Map' = 208,
    'Canvas App' = 300,
    'Connector1' = 371,
    'Connector2' = 372,
    'Environment Variable Definition' = 380,
    'Environment Variable Value' = 381,
    'AI Project Type' = 400,
    'AI Project' = 401,
    'AI Configuration' = 402,
    'Entity Analytics Configuration' = 430,
    'Attribute Image Configuration' = 431,
    'Entity Image Configuration' = 432,
    
    }

export enum EntityFiltersEnum {
    Entity = 'Entity', // Use this to retrieve only entity information.
    Attributes = 'Attributes', // Use this to retrieve entity information plus attributes for the entity.
    Privileges = 'Privileges', // Use this to retrieve entity information plus privileges for the entity.
    Relationships = 'Relationships', // Use this to retrieve entity information plus entity relationships for the entity.
    All = 'All', // Use this to retrieve all data for an entity.
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REQUEST
////////////////////////////////////////////////////////////////////////////////////////////////////////////



const retrieveDependenciesForDeleteRequest = ( params: { ObjectId:string, ComponentType:DependentComponentType} ) => 
WebApiClient.Execute<Xrm.Metadata.EntityMetadata>( WebApiClient.Requests.RetrieveDependenciesForDeleteRequest.with( {  urlParams: params } ) )


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RetrieveTotalRecordCount
////////////////////////////////////////////////////////////////////////////////////////////////////////////






