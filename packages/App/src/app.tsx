import React, { useEffect } from "react"
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {  scopes as WebApiScopes,useRenderAfterLogin } from 'xrmtoolboxweb-core';

import { Features } from "./features";

initializeIcons();

export function App() {

    const { instance, account, renderAfterLogin } = useRenderAfterLogin();
    
    //const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

    useEffect(() => {
        
        if (account) {
            //console.log( accounts )
            instance.acquireTokenSilent({
                scopes: WebApiScopes,
                account: account
            })
            ;
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => 
        (<div>
                <Features></Features>
        </div>))
}