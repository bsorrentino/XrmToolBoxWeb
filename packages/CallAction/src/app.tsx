import React, { useCallback, useEffect, useState } from "react"
import { IIconProps, ITextFieldStyles, PrimaryButton, Separator, Stack, Text, TextField } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  useRenderAfterLogin } from '@bsorrentino/xrmtoolboxweb-core'

import * as CallAction from './webapi'

initializeIcons();

const play: IIconProps = { iconName: 'BoxPlaySolid' };

const textFieldStyles: Partial<ITextFieldStyles> = { 
    fieldGroup: { width: 300 } 
}

export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, _setResult] = useState<Partial<CallAction.Response>>( {} );

    const setResult = ( result:Partial<CallAction.Response> ) => {
        console.log( result )
        _setResult( result )
    }

    useEffect(() => {
        if (account) {
            acquireTokenSilent()
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const [operationName,setOperationName] = useState<string>('')
    const [disabled, setDisabled] = useState( true )

    useEffect(() => 
        setDisabled( operationName.trim().length === 0 ) 
    , [operationName])

    const callaction = useCallback( () => {

        class CustomApisampleRequest implements CallAction.ExecuteRequest {
            getMetadata(): CallAction.ExecuteRequestData {
                return {
                    boundParameter: null,
                    operationName: operationName,
                    operationType: CallAction.OperationType.Action,
                    parameterTypes: {}
                }
            }
        }
        CallAction.Invoke( new CustomApisampleRequest() )
                .then( setResult )
                .catch( err => console.log( 'call action error', err) )
    }, [ operationName ])

    return renderAfterLogin( () => 
        (<div>
            <h3>Scope: {scopes[0]}</h3><hr/>
            <Stack>
                <Stack horizontal tokens={{ childrenGap: 20 }}>
                    <TextField placeholder="Please enter operation bame" onChange={ (e,v) => setOperationName(v!) } style = {{ width:300 }} />
                    <PrimaryButton text="Run" iconProps={play} styles={textFieldStyles} onClick={callaction} disabled={disabled}/>
                </Stack>
    
                <Separator alignContent="start">Result</Separator>
                <div>
                    <pre>{JSON.stringify(result, undefined, 2)}</pre>
                </div>
            </Stack>
        </div>))
}