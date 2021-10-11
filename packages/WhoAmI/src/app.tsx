import React, { useEffect, useState } from "react"
import { Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { 
    scopes as webapiScopes, 
    prepareWebApiRequest,
    useRenderAfterLogin 
} from "xrmtoolboxweb-core";

import * as WhoAmI from './webapi'

initializeIcons();

export function App() {

    const { instance, account, renderAfterLogin } = useRenderAfterLogin();
    const [result, setResult] = useState<Partial<WhoAmI.Response>>( {} );

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( WhoAmI.Invoke )
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