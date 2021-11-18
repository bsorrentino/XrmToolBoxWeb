import React from "react";
import ReactDOM from "react-dom";

import { MsalProvider } from "@azure/msal-react";

import { PCA , scopes as WebApiScopes } from "xrmtoolboxweb-core";
import {App} from "./app";

// Component
const AppProvider = () => (
    <MsalProvider instance={PCA}>
        <h3>Scope: {WebApiScopes[0]}</h3>
        <hr/>
        <App />
    </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));