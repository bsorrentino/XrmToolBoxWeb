import React, { useState, useEffect } from "react"
import { useMsal, useAccount } from "@azure/msal-react";
import { PrimaryButton, Stack, Text } from "@fluentui/react";
import {  useBoolean } from '@fluentui/react-hooks';
import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    whoAmIRequest,
} from './webapi';

export function App() {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

    useEffect(() => {
        console.log('in effect')
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( whoAmIRequest )
            ;
        }
    }, [account, instance]);

    if (accounts.length > 0) {
        return (
            <Stack horizontal>
                <Text>
                    There are currently {accounts.length} users signed in!
                </Text>
            </Stack>
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