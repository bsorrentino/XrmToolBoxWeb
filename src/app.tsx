import React, { useEffect } from "react"
import { useMsal, useAccount } from "@azure/msal-react";
import { PrimaryButton, Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {  scopes as webapiScopes, } from './webapi';

import { Features } from "./features";

initializeIcons();

export function App() {

    console.log( 'App' )
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    //const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

    useEffect(() => {
        
        if (account) {
            //console.log( accounts )
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            ;
        }
    }, [account?.localAccountId, instance]);

    if (accounts.length > 0) {
        
        return (
            <div>
                <Features></Features>
            </div>
            );
    } else if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return (
            <Stack horizontal>
                <Text>There are currently no users signed in!</Text>
                <PrimaryButton text="Login" onClick={() => instance.loginPopup()} />
            </Stack>
        );
    }
}