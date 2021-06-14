import React, { useEffect, useState } from "react"
import { useAccount } from "@azure/msal-react";
import { Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { useRenderAfterLogin } from "../auth";

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    WhoAmIRequest,
    WhoAmIResponse,
} from '../webapi';

initializeIcons();

export function App() {

    const { instance, accounts, renderAfterLogin } = useRenderAfterLogin();
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

    return renderAfterLogin( () => 
        (<div>
            <Stack>
                <Text>UserId: {result.UserId}</Text>
                <Text>BusinessUnitId: {result.BusinessUnitId}</Text>
                <Text>OrganizationId: {result.OrganizationId}</Text>
            </Stack>
        </div>))
}