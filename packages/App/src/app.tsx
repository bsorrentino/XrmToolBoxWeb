import React from "react"
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { Features } from "./features";

initializeIcons();

export function App() {
    
    return  (<div>
                <Features></Features>
            </div>)
}

// export function AppWithLogin() {

//     const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()

//     useEffect(() => {
        
//         if (account) {
//             acquireTokenSilent()
//         }
//     }, [account?.localAccountId, instance]);

//     return renderAfterLogin( () => 
//         (<div>
//                 <Features></Features>
//         </div>))
// }