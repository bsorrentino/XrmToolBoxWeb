import React, { useEffect, useState, useCallback } from "react"
import { DefaultButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack'
import { Separator } from '@fluentui/react/lib/Separator'
import { useRenderAfterLogin } from '@bsorrentino/xrmtoolboxweb-core'
import { ITextFieldStyles, TextField } from "@fluentui/react/lib/TextField";
import { IIconProps } from "@fluentui/react/lib/Icon";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import * as CalculateRollupField from './webapi'

initializeIcons()

const play: IIconProps = { iconName: 'BoxPlaySolid' };

const textFieldStyles: Partial<ITextFieldStyles> = { 
    fieldGroup: { width: 300 } 
};
/**
 * 
 * @returns 
 */
export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState<Partial<CalculateRollupField.Response>>();
    const [entityPluralName, setEntityPluralName] = useState( '' )
    const [fieldName, setFieldName] = useState( '' )
    const [recordId, setRecordId] = useState( '' )

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent()
            //.then( () => RetrieveTotalRecordCount( ['systemuser']) )
            //.then( setResult )
            //.catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const [disabled, setDisabled] = useState( true )

    useEffect(() => 
        setDisabled( entityPluralName.trim().length === 0 || 
                     fieldName.trim().length === 0 || 
                     recordId.trim().length < 36 ) 
    , [entityPluralName,fieldName, recordId])


    const _run = useCallback( () => 
        CalculateRollupField.Invoke( entityPluralName, fieldName, recordId ).then( setResult ), 
                [entityPluralName,fieldName,recordId] )


    return renderAfterLogin( () =>  
    (<div>
        <h3>Scope: {scopes[0]}</h3><hr/>
        <Stack>
            <TextField placeholder="Please enter the plural entity name" styles={textFieldStyles} onChange={ (e,v) => setEntityPluralName(v!) }  />
            <TextField placeholder="Please enter the field name" styles={textFieldStyles} onChange={ (e,v) => setFieldName(v!) }  />
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField placeholder="Please enter the record id" styles={textFieldStyles} onChange={ (e,v) => setRecordId(v!) }  />
                <DefaultButton text="Run" iconProps={play} styles={textFieldStyles} onClick={_run} disabled={disabled}/>
            </Stack>
            <Separator alignContent="start">Result</Separator>
            <div>
                <pre>{JSON.stringify(result, undefined, 2)}</pre>
            </div>
        </Stack>
    </div>))
}