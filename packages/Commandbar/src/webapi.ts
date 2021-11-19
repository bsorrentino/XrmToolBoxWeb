import * as WebApiClient from 'xrmtoolboxweb-webapiclient'

interface Appelement extends Record<string,any> {
    '@odata.etag': string
}

// https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/systemform?view=dynamics-ce-odata-9
export interface Response {
    "@odata.context": string
    value: Array<Appelement>
}


export const GetAppelements = () => {

    const req:WebApiClient.EntityParameters & WebApiClient.SendParameters = {
        entityName: 'appelement',
        queryParams: '$select=appelementid,uniquename,name'    
    }

    return WebApiClient.Instance.Retrieve<Response>(req) as Promise<Response>

}

export const DeleteAppelement = ( id: string ) => {

    const req:WebApiClient.EntityParameters & WebApiClient.SendParameters = {
        entityName: 'appelement',
        entityId: id

    }

    return WebApiClient.Instance.Delete(req) as Promise<any>

}

export const GetAppactions = () => {

    const req:WebApiClient.EntityParameters & WebApiClient.SendParameters = {
        entityName: 'appaction',
        queryParams: '$select=appactionid,uniquename,name,buttontooltiptitle,buttontooltipdescription,hidden'
    }

    return WebApiClient.Instance.Retrieve<Response>(req) as Promise<Response>

}


export const DeleteAppaction = ( id: string ) => {

    const req:WebApiClient.EntityParameters & WebApiClient.SendParameters = {
        entityName: 'appaction',
        entityId: id 
    }

    return WebApiClient.Instance.Delete(req) as Promise<any>

}
