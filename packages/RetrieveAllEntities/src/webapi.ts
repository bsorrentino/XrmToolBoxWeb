import * as WebApiClient from '@bsorrentino/xrmtoolboxweb-webapiclient'


export interface Response {
    EntityMetadata: Array<Xrm.Metadata.EntityMetadata>
    Timestamp: String
}

export const Invoke = ( params: { EntityFilters:string, RetrieveAsIfPublished:Boolean}) => { 
    
    const req = WebApiClient.RetrieveAllEntitiesRequest.with( 
        {  
            urlParams: { 
                EntityFilters:`Microsoft.Dynamics.CRM.EntityFilters'${params.EntityFilters}'`, 
                RetrieveAsIfPublished:false
            },
            headers: [
                { key:'Access-Control-Allow-Origin', value:'*.crm.dynamics.com'},
                { key:'Access-Control-Allow-Credentials', value:'true' },
                { key:'Access-Control-Allow-Methods', value:'GET, POST, PUT, DELETE, OPTIONS' },
                { key:'Access-Control-Allow-Headers', value:'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token' },
            ]
        })
    
    return WebApiClient.Instance.Execute<Response>(req) as Promise<Response>
}
    
