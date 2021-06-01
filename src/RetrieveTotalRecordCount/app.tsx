import React, { useEffect, useState } from "react"
import { useMsal, useAccount } from "@azure/msal-react"
import { Text } from '@fluentui/react/lib/Text'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    RetrieveTotalRecordCount,
} from '../webapi';



/**
 * 
 * @returns 
 */
export function App() {

    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [result, setResult] = useState<Partial<any>>();
    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( () => RetrieveTotalRecordCount( ['systemuser']) )
            .then( setResult )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    if (accounts.length > 0) {   

        return ( <div>
            <Stack>
                <Text>Result: {result}</Text>
            </Stack>
        </div>)
    
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