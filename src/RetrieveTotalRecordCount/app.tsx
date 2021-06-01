import React, { useEffect, useState, useCallback } from "react"
import { useMsal, useAccount } from "@azure/msal-react"
import { Text } from '@fluentui/react/lib/Text'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    RetrieveTotalRecordCount,
    RetrieveTotalRecordCountResponse,
} from '../webapi';
import { TextField } from "@fluentui/react/lib/TextField";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { initializeIcons } from "@fluentui/font-icons-mdl2";


initializeIcons()

/**
 * 
 * @returns 
 */
export function App() {

    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [result, setResult] = useState<Partial<RetrieveTotalRecordCountResponse>>();
    const [entityName, setEntityName] = useState( '' )

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            //.then( () => RetrieveTotalRecordCount( ['systemuser']) )
            //.then( setResult )
            //.catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const _run = useCallback( () => 
        RetrieveTotalRecordCount( [ entityName ]).then( setResult ), [entityName] )

    if (accounts.length > 0) {   
        const play: IIconProps = { iconName: 'BoxPlaySolid' };
        return ( <div>
            <Stack horizontal>
                <TextField placeholder="Please enter the entity name" onChange={ (e,v) => setEntityName(v!) }  />
                <DefaultButton text="Run" iconProps={play} onClick={_run}/>

                <Text>Result: {result?.EntityRecordCountCollection?.Values[0]}</Text>
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