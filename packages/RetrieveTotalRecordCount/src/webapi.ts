import * as WebApiClient from '@bsorrentino/xrmtoolboxweb-webapiclient'

// class Request extends WebApiClient.Request {
//     method = 'GET'
//     name = 'RetrieveTotalRecordCount'

//     constructor(EntityNames: Array<string>) {
//         super()
//         this.urlParams = { EntityNames: JSON.stringify(EntityNames) }
//     }
// }

export interface Response {
    "@odata.context": string
    EntityRecordCountCollection: {
        Count: number,
        IsReadOnly: boolean,
        Keys: Array<string>
        Values: Array<number>
    }
}

export const Invoke = (EntityNames: Array<string>) => {

    const req = new WebApiClient.Request().with({
            method:'GET',
            name: 'RetrieveTotalRecordCount',
            urlParams: { EntityNames: JSON.stringify(EntityNames) }
        })

    return WebApiClient.Instance.Execute<Response>(req) as Promise<Response>

}
