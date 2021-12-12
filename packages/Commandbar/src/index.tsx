import React from "react";
import ReactDOM from "react-dom";

import { MsalProvider } from "@azure/msal-react";

import { PCA } from '@bsorrentino/xrmtoolboxweb-core'
import {Appactions, Appelements} from "./app";

// Component
const AppProvider = () => (
    <MsalProvider instance={PCA}>
        <h2>Appactions</h2>
        <Appactions></Appactions>
        <hr/>
        <h2>AppElements</h2>
        <Appelements></Appelements>
    </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));