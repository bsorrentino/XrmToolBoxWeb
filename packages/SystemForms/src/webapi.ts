import * as WebApiClient from 'xrmtoolboxweb-webapiclient'

// https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/systemform?view=dynamics-ce-odata-9
export interface Response {
    "@odata.context": string
     value: [{
        '@odata.etag': string,
        formid: string,
        name: string
        type: number
    }]
}


export const Invoke = (EntityName: string) => {

    const req:WebApiClient.EntityParameters & WebApiClient.SendParameters = {
        entityName: 'systemform',
        queryParams: `$select=formid,name,type&$filter=(objecttypecode eq '${EntityName}' and formactivationstate eq 1)`
    }

    return WebApiClient.Instance.Retrieve<Response>(req) as Promise<Response>

}
