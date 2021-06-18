import React, { useEffect } from "react"
import { useAccount } from "@azure/msal-react";
import { PrimaryButton, Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {  scopes as webapiScopes,useRenderAfterLogin } from 'xrmtoolboxweb-core';

import { Features } from "./features";

initializeIcons();

export function App() {

    const { instance, accounts, renderAfterLogin } = useRenderAfterLogin();
    
    const account = useAccount(accounts[0] || {});
    //const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

    useEffect(() => {
        
        if (account) {
            //console.log( accounts )
            instance.acquireTokenSilent({
                scopes: webapiScopes,
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