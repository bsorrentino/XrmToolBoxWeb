import React, { useCallback, useEffect, useState } from "react"
import { useMsal, useAccount } from "@azure/msal-react";
import { PrimaryButton, Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    RetrieveAllEntities,
    RetrieveAllEntitiesResponse,
    EntityFiltersEnum
} from '../webapi';

initializeIcons();

function enumToGroups( enumObject:object):Array<IChoiceGroupOption>  {

    const result = Array<IChoiceGroupOption>()

    for (const [propertyKey, propertyValue] of Object.entries(enumObject)) {  
        if (!Number.isNaN(Number(propertyKey))) continue
        result.push({ text: propertyKey + '\u00A0\u00A0', key: String(propertyValue) })
  }  

  return result
}

function Main() {
    const [selectedKey, setSelectedKey] = useState(String(EntityFiltersEnum.All));
    const [result, setResult] = useState<Partial<RetrieveAllEntitiesResponse>>( {} );

    const onChange = useCallback((ev?:React.SyntheticEvent<HTMLElement>, option?:IChoiceGroupOption) => {
        if( option ) setSelectedKey(option.key);
    }, [])

    const options = enumToGroups( EntityFiltersEnum )

    //console.log( options )

    function execute() {
        const filter:any = selectedKey
        RetrieveAllEntities( { EntityFilters: filter, RetrieveAsIfPublished:false })
            .then( result => console.log(result))
            .catch( error => console.error( error) )
    }

    return (

        <Stack>
            <Stack horizontal>
                
                <ChoiceGroup 
                    styles={{flexContainer: { display: "flex" } }}
                    defaultSelectedKey={EntityFiltersEnum.All}
                    options={options} 
                    onChange={onChange} 
                    label="Set Metadata Filter" 
                    required={true} />

                <PrimaryButton text="Run" onClick={execute} allowDisabledFocus />
            </Stack>
        </Stack>
        );

}


export function App() {

    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            //.then( () => RetrieveAllEntities( { EntityFilters:{} }) )
            //.then( setResult )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    if (accounts.length > 0) {   

        return ( <div><Main/></div> )
    
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