import React from "react";
import ReactDOM from "react-dom";

import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";

import {App} from "./app";

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

const pca = new PublicClientApplication(configuration);

// Component
const AppProvider = () => (
    <MsalProvider instance={pca}>
        <App />
    </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));