import React from "react"
import ReactDOM from "react-dom"

import { MsalProvider } from "@azure/msal-react"

import { PCA } from 'xrmtoolboxweb-core'
import {App} from "./app";

// Component
const AppProvider = () => (
    <MsalProvider instance={PCA}>
        <App />
    </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById("root"));