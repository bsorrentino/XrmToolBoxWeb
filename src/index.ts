

import * as WebApiClient from "xrm-webapi-client";
import * as msal from "@azure/msal-browser";
import { DependentComponentType } from './types'

// if using cdn version, 'Msal' will be available in the global scope

const POWERPLATFORM_ENV_URL = 'https://bsc-labs.crm.dynamics.com'

const msalConfig : msal.Configuration = {
    auth: {
        clientId: 'c43d3729-2e9c-4254-bd68-fbbe4a45301b',
        redirectUri: 'http://localhost:1234',
        //authority: "https://login.microsoftonline.com/common",
        //knownAuthorities: [],
        //navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: 'localStorage'
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);


const prepareWebApiRequest = ( auth:msal.AuthenticationResult ) => {
    
    let client = WebApiClient as any
    client.Token = auth.accessToken
    client.ClientUrl = POWERPLATFORM_ENV_URL
}

const whoAmIRequest = () => {
    
    WebApiClient.Execute(WebApiClient.Requests.WhoAmIRequest)
        .then( (response:any ) =>  console.log(response) )
        .catch( (error:any) => console.error(error) )

}


const componentId = [
    { 'ObjectId':'73015cdf-d6a6-4700-9bd2-22128b9933e8','ComponentType':DependentComponentType.Workflow},
    { 'ObjectId':'d06de78f-2062-eb11-a812-00224808901c', 'ComponentType':DependentComponentType.Entity },
]


const retrieveDependenciesForDeleteRequest = () => {

    let request = WebApiClient.Requests.RetrieveDependenciesForDeleteRequest.with( {  urlParams: componentId[1] } )
    WebApiClient.Execute( request )
        .then( (response:any ) =>  console.log(response) )
        .catch( (error:any) => console.error(error.message) )

    
}

function getAccount(): msal.AccountInfo | null {
    // need to call getAccount here?
    const currentAccounts = msalInstance.getAllAccounts();
    if (currentAccounts === null) {
        console.log("No accounts detected");
        return null;
    }

    if (currentAccounts.length > 1) {
        // Add choose account code here
        console.log("Multiple accounts detected, need to add choose account code.");
        return currentAccounts[0];
    } else if (currentAccounts.length === 1) {
        return currentAccounts[0];
    }

    return null;
}


function  aquireToken() {
    const accessTokenRequest:msal.PopupRequest = {
        scopes: [ `${POWERPLATFORM_ENV_URL}/user_impersonation` ] 
    }

    const account = getAccount()
    console.log( 'active account', account )
    if( account ) {
        // this avoid popup 
        msalInstance.setActiveAccount( account )
    }

    return msalInstance.acquireTokenSilent( accessTokenRequest )
        .catch( e => {
            console.error( 'acquireTokenSilent error', e )
            return msalInstance.loginPopup(accessTokenRequest) 
        })
}

aquireToken()
.then( prepareWebApiRequest ) 
.then( whoAmIRequest )
.then( retrieveDependenciesForDeleteRequest )
.catch(error => {
    console.error( error )
    alert( error )
});
