import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { IMsalContext, useMsal } from "@azure/msal-react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";
import React from "react";

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


type RenderAfterLogin = IMsalContext & { renderAfterLogin:( render:() => JSX.Element) => JSX.Element } 

export const useRenderAfterLogin = ():RenderAfterLogin =>  {

    const msalContext = useMsal()

    return { 
        renderAfterLogin : ( render:() => JSX.Element) =>  { 
            if (msalContext.accounts.length > 0) {   
                return render()    
            } 
            else if (msalContext.inProgress === "login") {
                return <span>Login is currently in progress!</span>
            } else {
            return (
                <Stack horizontal>
                    <Text>There are currently no users signed in!</Text>
                    <PrimaryButton text="Login" onClick={() => msalContext.instance.loginPopup()} />
                </Stack>
                )
            }
    }, ...msalContext}

}
