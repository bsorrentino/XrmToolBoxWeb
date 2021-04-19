import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

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
