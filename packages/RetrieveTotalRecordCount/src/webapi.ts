import WebApiClient from "xrm-webapi-client";

export namespace RetrieveTotalRecordCount {

    class Request extends WebApiClient.Requests.Request {
        method = 'GET'
        name = 'RetrieveTotalRecordCount'
    
        constructor( EntityNames:Array<string> ) {
            super()
            this.urlParams = { EntityNames:JSON.stringify(EntityNames) }
        }
    }
    
    export interface Response {
        "@odata.context":string
        EntityRecordCountCollection: {
            Count: number,
            IsReadOnly: boolean,
            Keys: Array<string>
            Values: Array<number>
        }
    }
    
    
    export const Invoke = ( EntityNames:Array<string> ) => {
    
        const req = new Request( EntityNames )
        return WebApiClient.Execute<Response>( req ) as Promise<Response>
    
    }
    
}