import { PublicClientApplication } from "@azure/msal-browser";
import { useMsal, useAccount } from "@azure/msal-react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";
import React from "react";
const configuration = {
    auth: {
        clientId: 'c43d3729-2e9c-4254-bd68-fbbe4a45301b',
        redirectUri: 'http://localhost:1234',
    },
};
export const PCA = new PublicClientApplication(configuration);
export const useRenderAfterLogin = () => {
    var _a;
    const msalContext = useMsal();
    const account = useAccount((_a = msalContext.accounts[0]) !== null && _a !== void 0 ? _a : {});
    return Object.assign({ renderAfterLogin: (render) => {
            if (msalContext.accounts.length > 0) {
                return render();
            }
            else if (msalContext.inProgress === "login") {
                return React.createElement("span", null, "Login is currently in progress!");
            }
            else {
                return (React.createElement(Stack, { horizontal: true },
                    React.createElement(Text, null, "There are currently no users signed in!"),
                    React.createElement(PrimaryButton, { text: "Login", onClick: () => msalContext.instance.loginPopup() })));
            }
        }, account: account }, msalContext);
};
