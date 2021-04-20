import React, { useEffect, useState } from "react"
import { useMsal, useAccount } from "@azure/msal-react";
import { PrimaryButton, Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    WhoAmIRequest,
    WhoAmIResponse,
} from '../webapi';

initializeIcons();

export function App() {

    console.log( 'App' )
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [result, setResult] = useState<Partial<WhoAmIResponse>>( {} );

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( WhoAmIRequest )
            .then( setResult )
            ;
        }
    }, [account?.localAccountId, instance]);

    if (accounts.length > 0) {
        
        return (
            <div>
                <Stack>
                    <Text>UserId: {result.UserId}</Text>
                    <Text>BusinessUnitId: {result.BusinessUnitId}</Text>
                    <Text>OrganizationId: {result.OrganizationId}</Text>
                </Stack>
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