import React from "react";
import ReactDOM from "react-dom";

import { MsalProvider } from "@azure/msal-react";

import { PCA, scopes as WebApiScopes } from "xrmtoolboxweb-core";
import {Appactions, Appelements} from "./app";

// Component
const AppProvider = () => (
    <MsalProvider instance={PCA}>
        <h3>Scope: {WebApiScopes[0]}</h3>
        <hr/>
        <h2>Appactions</h2>
        <Appactions></Appactions>
        <hr/>
        <h2>AppElements</h2>
        <Appelements></Appelements>
    </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));