import React, { useEffect, useState } from "react"
import { useMsal, useAccount } from "@azure/msal-react"

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    GlobalOptionSetDefinitions,
} from '../webapi';
import { TextField } from "@fluentui/react/lib/TextField";
import { initializeIcons } from "@fluentui/font-icons-mdl2";



initializeIcons()

/**
 * 
 * @returns 
 */
export function App() {

    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [result, setResult] = useState<Partial<GlobalOptionSetDefinitions.Response>>();

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( () => GlobalOptionSetDefinitions.Invoke() )
            .then( setResult )
            //.catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);


    return (

        <div>
            <TextField label="Standard" multiline rows={100} readOnly value={JSON.stringify(result,undefined,2)}/>
        </div>

    )

    

    // const _run = useCallback( () => 
    //     RetrieveTotalRecordCount( [ entityName ]).then( setResult ), [entityName] )

    // if (accounts.length > 0) {   
    //     const play: IIconProps = { iconName: 'BoxPlaySolid' };
    //     return ( <div>
    //         <Stack horizontal>
    //             <TextField placeholder="Please enter the entity name" onChange={ (e,v) => setEntityName(v!) }  />
    //             <DefaultButton text="Run" iconProps={play} onClick={_run}/>

    //             <Text>Result: {result?.EntityRecordCountCollection?.Values[0]}</Text>
    //         </Stack>
    //     </div>)
    
    // } else if (inProgress === "login") {
    //     return <span>Login is currently in progress!</span>
    // } else {
    //     return (
    //         <Stack horizontal>
    //             <Text>There are currently no users signed in!</Text>
    //             <PrimaryButton text="Login" onClick={() => instance.loginPopup()} />
    //         </Stack>
    //     );
    // }
}