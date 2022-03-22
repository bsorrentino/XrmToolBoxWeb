import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./components/Layout/Layout";

import "./global.scss";

import { MsalProvider } from "@azure/msal-react";
import { PCA } from '@bsorrentino/xrmtoolboxweb-core'

ReactDOM.render(
  <MsalProvider instance={PCA}>
      <Layout>
        <App />
      </Layout>
  </MsalProvider>,
  document.getElementById("root")
);
