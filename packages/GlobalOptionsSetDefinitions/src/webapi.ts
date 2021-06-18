import WebApiClient from 'xrm-webapi-client'

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GlobalOptionSetDefinitions
////////////////////////////////////////////////////////////////////////////////////////////////////////////

export namespace GlobalOptionSetDefinitions {

    class Request extends WebApiClient.Requests.Request {
        method = 'GET'
        name = 'GlobalOptionSetDefinitions'
    
        constructor() {
            super()
        }

        buildUrl() {
            return super.buildUrl()
            // + '?$select=Name,OptionSetType'
        }
    }

    export type OptionSetType = 'Picklist' | 'Boolean' | string

    export type Metadata = {
        "@odata.type":          '#Microsoft.Dynamics.CRM.OptionSetMetadata',
        ParentOptionSetName:    string|null,
        IsCustomOptionSet:      boolean,
        IsGlobal:               boolean,
        IsManaged:              boolean,
        Name:                   string,
        ExternalTypeName:       string|null,
        OptionSetType:          OptionSetType,
        IntroducedVersion:      string,
        MetadataId:             string,
        HasChanged:             boolean|null,
        Options:                Array<Xrm.Metadata.OptionMetadata>  
    }

    export type Response = { 
        "@odata.context":string 
        value:Array<Metadata>
    } 
        
    export const Invoke = () => {

        const req = new Request()
        return WebApiClient.Execute<Response>( req ) as Promise<Response>
    
    }
}

