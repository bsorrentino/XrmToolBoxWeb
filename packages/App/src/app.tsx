import React, { useEffect } from "react"
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { useRenderAfterLogin } from "@bsorrentino/xrmtoolboxweb-core";

//import { Features } from "./features";

initializeIcons();

// export function App() {
    
//     return  (<div>
//                 <Features></Features>
//             </div>)
// }

export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent()
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => 
        (<div>
            <a href="/notebooks?database=xrmtoolkitweb">NOTEBOOKS</a>
        </div>))
}