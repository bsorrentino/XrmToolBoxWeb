import React, { useEffect, useRef } from "react"
import { useRenderAfterLogin } from "@bsorrentino/xrmtoolboxweb-core";

// import { initializeIcons } from '@fluentui/font-icons-mdl2';
// import { Features } from "./features";

// initializeIcons();

// export function App() {
    
//     return  (<div>
//                 <Features></Features>
//             </div>)
// }

export function App() {

    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()
    const link = useRef<HTMLAnchorElement>(null)
    
    useEffect(() => {
        
        if (account) {
            acquireTokenSilent().then( () => link.current?.click() )
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => 
        (<div>
            <a ref={link} href="/notebooks?database=xrmtoolkitweb">LOADING NOTEBOOKS.....</a>
        </div>))
}