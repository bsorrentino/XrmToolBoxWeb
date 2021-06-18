import React, { useEffect, useState, useCallback } from "react"
import { useAccount } from "@azure/msal-react"
import { Text } from '@fluentui/react/lib/Text'
import { DefaultButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    useRenderAfterLogin
} from 'xrmtoolboxweb-core';

import { TextField } from "@fluentui/react/lib/TextField";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import { RetrieveTotalRecordCount } from './webapi'

initializeIcons()

const play: IIconProps = { iconName: 'BoxPlaySolid' };

/**
 * 
 * @returns 
 */
export function App() {

    const { instance, account, renderAfterLogin } = useRenderAfterLogin();
    const [result, setResult] = useState<Partial<RetrieveTotalRecordCount.Response>>();
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
        RetrieveTotalRecordCount.Invoke( [ entityName ]).then( setResult ), [entityName] )

    return renderAfterLogin( () =>  
        (<div>
            <Stack horizontal>
                <TextField placeholder="Please enter the entity name" onChange={ (e,v) => setEntityName(v!) }  />
                <DefaultButton text="Run" iconProps={play} onClick={_run}/>

                <Text>Result: {result?.EntityRecordCountCollection?.Values[0]}</Text>
            </Stack>
        </div>))
}