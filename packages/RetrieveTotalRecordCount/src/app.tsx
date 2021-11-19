import React, { useEffect, useState, useCallback } from "react"
import { Text } from '@fluentui/react/lib/Text'
import { DefaultButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';
import { Separator } from '@fluentui/react/lib/Separator';
import { TextField } from "@fluentui/react/lib/TextField";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import {  useRenderAfterLogin } from 'xrmtoolboxweb-core';
import * as RetrieveTotalRecordCount from './webapi'

initializeIcons()

const play: IIconProps = { iconName: 'BoxPlaySolid' };

/**
 * 
 * @returns 
 */
export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState<Partial<RetrieveTotalRecordCount.Response>>();
    const [entityName, setEntityName] = useState( '' )

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent() 
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
        <h3>Scope: {scopes[0]}</h3><hr/>
        <Stack tokens={{ childrenGap: 10 }}>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField placeholder="Please enter the entity name" onChange={ (e,v) => setEntityName(v!) }  />
                <DefaultButton text="Run" iconProps={play} onClick={_run}/>
            </Stack>
            <Separator alignContent="start">Result</Separator>

            <div>
             
            <Text variant="large">Total Record Count : [ {result?.EntityRecordCountCollection?.Values[0]} ]</Text>
            </div>
            
        </Stack>
    </div>))
}