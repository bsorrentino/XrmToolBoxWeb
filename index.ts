import * as WebApiClient from "xrm-webapi-client";
import * as Msal from "@azure/msal-browser";

// if using cdn version, 'Msal' will be available in the global scope

const POWERPLATFORM_ENV_URL = 'https://bsc-labs.crm.dynamics.com'

const msalConfig : Msal.Configuration = {
    auth: {
        clientId: 'c43d3729-2e9c-4254-bd68-fbbe4a45301b',
        redirectUri: 'http://localhost:1234',
        //authority: "https://login.microsoftonline.com/common",
        //knownAuthorities: [],
        //navigateToLoginRequestUrl: true
    }
};

const prepareWebApiRequest = ( auth:Msal.AuthenticationResult ) => {
    let client = WebApiClient as any
    client.Token = auth.accessToken
    client.ClientUrl = POWERPLATFORM_ENV_URL
}

const whoAmIRequest = () => {
    
    WebApiClient.Execute(WebApiClient.Requests.WhoAmIRequest)
        .then( (response:any ) =>  console.log(response) )
        .catch( (error:any) => console.error(error) )

}

const componentId = 'ccd31a17-987c-4f5e-8858-81c5e5c88cc2'

const retrieveDependenciesForDeleteRequest = () => {

    let request = WebApiClient.Requests.RetrieveDependenciesForDeleteRequest.with( { 'ObjectId':componentId } )
    WebApiClient.Execute( request )
        .then( (response:any ) =>  console.log(response) )
        .catch( (error:any) => console.error(error) )

    
}

const msalInstance = new Msal.PublicClientApplication(msalConfig);


function  aquireTokenUsingPopupVindow() {
        const accessTokenRequest:Msal.PopupRequest = {
            scopes: [ `${POWERPLATFORM_ENV_URL}/user_impersonation` ] 
        }

        msalInstance.loginPopup(accessTokenRequest)
            .then( prepareWebApiRequest ) 
            .then( whoAmIRequest )
            .then( retrieveDependenciesForDeleteRequest )
            .catch(error => {
                console.error( error )
                alert( error )
            });
    }

    aquireTokenUsingPopupVindow()