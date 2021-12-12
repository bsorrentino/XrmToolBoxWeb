import { AccountInfo, AuthenticationResult, Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { IMsalContext, useMsal, useAccount } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import { useSessionStorage } from "./storage";

// ===============================================================
// FLUENT UI
// ===============================================================
// import { PrimaryButton } from "@fluentui/react/lib/Button";
// import { Stack } from "@fluentui/react/lib/Stack";
// import { Text } from "@fluentui/react/lib/Text";
// import { TextField } from "@fluentui/react/lib/TextField";
// ===============================================================

import * as WebApiClient from '@bsorrentino/xrmtoolboxweb-webapiclient'

// MSAL configuration
const configuration : Configuration = {
    auth: {
        clientId: 'c43d3729-2e9c-4254-bd68-fbbe4a45301b',
        redirectUri: 'http://localhost:1234',
        //authority: "https://login.microsoftonline.com/common",
        //knownAuthorities: [],
        //navigateToLoginRequestUrl: true
    },
    // cache: {
    //     cacheLocation: 'localStorage'
    // }
};

export const PCA = new PublicClientApplication(configuration);

type RenderAfterLogin = IMsalContext & { 
    renderAfterLogin:( render:() => JSX.Element) => JSX.Element
    acquireTokenSilent: () => Promise<void>
    scopes:Array<string>
    account: AccountInfo|null
} 

export const useRenderAfterLogin = ():RenderAfterLogin =>  {

    const msalContext = useMsal()
    const account = useAccount(msalContext.accounts[0] ?? {});
    const [storedEnvUrl, storeEnvUrl] = useSessionStorage('envurl')
    const [inputEnvUrl, setInputEnvUrl] = useState('')
    
    const [scopes, setScopes] = useState<Array<string>>([])

    useEffect( () => {
        if( storedEnvUrl ) {
            setScopes( [
                `${storedEnvUrl}/user_impersonation`
            ])
        }
    }, [storedEnvUrl])


    return { 
        renderAfterLogin : ( render:() => JSX.Element) =>  { 

            if( storedEnvUrl ) {

                if (msalContext.accounts.length > 0) {   
                    return render()    
                } 
                else if (msalContext.inProgress === 'login') {
                    return <span>Login is currently in progress!</span>
                } else {
                    return (
                        <div>
                            <p>There are currently no users signed in!</p>
                            <button onClick={() => msalContext.instance.loginPopup()}>Login</button>
                        </div>
                        /*
                        <Stack horizontal>
                            <Text>There are currently no users signed in!</Text>
                            <PrimaryButton text="Login" onClick={() => msalContext.instance.loginPopup()} />
                        </Stack>
                        */
                    )
                }
            }
            else {
                return ( 
                    <div>
                        <input  type="text" 
                                placeholder="Please enter the environment url" 
                                onChange={ (e) => setInputEnvUrl(e.target.value) } 
                                style = {{ width:350 }} />
                        <button onClick={() => storeEnvUrl(inputEnvUrl)}>Apply</button>        
                    </div>
                    /*
                    <Stack horizontal verticalAlign="end" tokens={{ childrenGap: 10 }}>
                    <TextField  label="Environment Url" 
                                placeholder="Please enter the environment url" 
                                onChange={ (_,v) => setInputEnvUrl(v!) } 
                                style = {{ width:350 }} />
                    <PrimaryButton text="Apply" onClick={() => storeEnvUrl(inputEnvUrl)} />
                    </Stack>
                    */
                )
            }
    }, 
    acquireTokenSilent: () => 
        msalContext.instance.acquireTokenSilent({
            scopes: scopes,
            account: account ?? undefined
        })
        .then( (auth:AuthenticationResult) => {
            console.log( `environment url ${storedEnvUrl} scopes: ${scopes}`)
            WebApiClient.Instance.ApiVersion = '9.1'
            WebApiClient.Instance.ClientUrl = storedEnvUrl!
            WebApiClient.Instance.Token     = auth.accessToken
    }),
    scopes,
    account:account, 
    ...msalContext
    }

}


// type RenderAfterLogin = IMsalContext & { 
//     renderAfterLogin:( render:() => JSX.Element) => JSX.Element,
//     account: AccountInfo|null
// } 

// export const useRenderAfterLogin = ():RenderAfterLogin =>  {

//     const msalContext = useMsal()
//     const account = useAccount(msalContext.accounts[0] ?? {});

//     return { 
//         renderAfterLogin : ( render:() => JSX.Element) =>  { 

//             if (msalContext.accounts.length > 0) {   
//                 return render()    
//             } 
//             else if (msalContext.inProgress === 'login') {
//                 return <span>Login is currently in progress!</span>
//             } else {
//                 return (
//                     <Stack horizontal>
//                         <Text>There are currently no users signed in!</Text>
//                         <PrimaryButton text="Login" onClick={() => msalContext.instance.loginPopup()} />
//                     </Stack>
//                 )
//             }    
//         },
//         account:account, 
//         ...msalContext
//     }

// }
