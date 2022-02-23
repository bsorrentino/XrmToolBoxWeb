import React, { useEffect, useState } from "react"
import { Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  useRenderAfterLogin } from '@bsorrentino/xrmtoolboxweb-core'

import * as WhoAmI from './webapi'

initializeIcons();

export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState<Partial<WhoAmI.Response>>( {} );

    useEffect(() => {
        if (account) {
            acquireTokenSilent()
            .then( WhoAmI.Invoke )
            .then( setResult )
            ;
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => 
        (<div>
            <h3>Scope: {scopes[0]}</h3><hr/>
            <Stack>
                <Text>UserId: {result.UserId}</Text>
                <Text>BusinessUnitId: {result.BusinessUnitId}</Text>
                <Text>OrganizationId: {result.OrganizationId}</Text>
            </Stack>
        </div>))
}