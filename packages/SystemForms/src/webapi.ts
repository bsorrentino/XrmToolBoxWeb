import * as WebApiClient from 'xrmtoolboxweb-webapiclient'

// /systemforms?$select=formid,name,type&$filter=(objecttypecode eq 'softp_purchaseorderforsara' and formactivationstate eq 1)
// class Request extends WebApiClient.Request {
//     method = 'GET'
//     name = 'systemforms'

//     constructor(EntityName: string) {
//         super()
//         this.urlParams = { 
//             '$select': 'formid,name,type',
//             '$filter': `(objecttypecode eq '${EntityName}' and formactivationstate eq 1)`
//         }
//     }
// }

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

    const req = new WebApiClient.Request().with( {
        method: 'GET',
        name: 'systemforms',
        urlParams: { 
            '$select': 'formid,name,type',
            '$filter': `(objecttypecode eq '${EntityName}' and formactivationstate eq 1)`
        }
    })
    return WebApiClient.Instance.Execute<Response>(req) as Promise<Response>

}
