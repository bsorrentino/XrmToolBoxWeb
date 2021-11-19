import React, { useEffect, useState, useCallback } from "react"
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog'
import { TextField } from '@fluentui/react/lib/TextField'
import { Stack } from '@fluentui/react/lib/Stack'
import { Separator } from '@fluentui/react/lib/Separator'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { IIconProps } from "@fluentui/react/lib/Icon";

import { useRenderAfterLogin } from 'xrmtoolboxweb-core';

import * as API from './webapi'

initializeIcons()

const deleteIcon: IIconProps = { iconName: 'Delete' };

/**
 * 
 * @returns 
 */
export function Appactions() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState<Partial<API.Response>>();
    const [entityId, setEntityId ] = useState<string>('')
    const [isDialogOpen, setDialogOpen ] = useState(false)

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent()
            .then( () => API.GetAppactions() )
            .then( setResult )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const deleteAppaction = useCallback( () => {
        console.log( entityId )
        API.DeleteAppaction( entityId )
            .then( () => console.log('deleted!') )
            .catch( e => console.error('errorn on deleted!', e)) 
            .finally( () => setDialogOpen(false) ) 
    }, [entityId] )

    return renderAfterLogin( () =>  
    (<div>
        <h3>Scope: {scopes[0]}</h3><hr/>
        <Stack>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField placeholder="Please enter the entity Id" onChange={ (e,v) => setEntityId(v!) } style = {{ width:300 }} />
                <PrimaryButton text="Delete" iconProps={deleteIcon} onClick={() => setDialogOpen(true) } disabled={entityId.length===0} />
            </Stack>

            <Separator alignContent="start">Result</Separator>
            <div>
                <pre>{JSON.stringify(result?.value, undefined, 2)}</pre>
            </div>
        </Stack>
        <Dialog 
          isOpen={isDialogOpen} 
          type={DialogType.close} 
          onDismiss={ () => setDialogOpen(false) } 
          title='Confirm Deletion' 
          //subText='Dialog subText' 
          isBlocking={false} 
          closeButtonAriaLabel='Close'  
        > 
          <h1>Delete Entity?</h1> 
          <DialogFooter> 
            <PrimaryButton onClick={deleteAppaction}>OK</PrimaryButton> 
          </DialogFooter> 
        </Dialog> 
    </div>))
}

export function Appelements() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const [result, setResult] = useState<Partial<API.Response>>();
    const [entityId, setEntityId ] = useState<string>('')
    const [isDialogOpen, setDialogOpen ] = useState(false)

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent()
            .then( () => API.GetAppelements() )
            .then( setResult )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const deleteAppelement = useCallback( () => {
        console.log( entityId )
        API.DeleteAppelement( entityId )
            .then( () => console.log('deleted!') )
            .catch( e => console.error('errorn on deleted!', e))
            .finally( () => setDialogOpen(false) )        
    }, [entityId] )

    return renderAfterLogin( () =>  
    (<div>
        <h3>Scope: {scopes[0]}</h3><hr/>
        <Stack>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField placeholder="Please enter the entity Id" onChange={ (e,v) => setEntityId(v!) } style = {{ width:300 }} />
                <PrimaryButton text="Delete" iconProps={deleteIcon} onClick={() => setDialogOpen(true) } disabled={entityId.length===0} />
            </Stack>

            <Separator alignContent="start">Result</Separator>
            <div>
                <pre>{JSON.stringify(result?.value, undefined, 2)}</pre>
            </div>
        </Stack>
        <Dialog 
          isOpen={isDialogOpen} 
          type={DialogType.close} 
          onDismiss={ () => setDialogOpen(false) } 
          title='Confirm Deletion' 
          //subText='Dialog subText' 
          isBlocking={false} 
          closeButtonAriaLabel='Close'  
        > 
          <h1>Delete Entity?</h1> 
          <DialogFooter> 
            <PrimaryButton onClick={deleteAppelement}>OK</PrimaryButton> 
          </DialogFooter> 
        </Dialog> 
    </div>))
}
