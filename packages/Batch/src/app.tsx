import React, { useEffect, useState } from "react"
import { Separator, Stack } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  useRenderAfterLogin } from '@bsorrentino/xrmtoolboxweb-core'

import * as Batch from './webapi'

initializeIcons();

export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState( {} );

    useEffect(() => {
        if (account) {
            acquireTokenSilent()
            .then( Batch.Invoke )
            .then( setResult )
            ;
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => 
        (<div>
            <h3>Scope: {scopes[0]}</h3><hr/>
            <Stack>
                <Separator alignContent="start">Result</Separator>
                <div>
                    <pre>{JSON.stringify(result, undefined, 2)}</pre>
                </div>
            </Stack>
        </div>))
}