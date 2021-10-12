import React, { useEffect, useState } from "react"

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    useRenderAfterLogin
} from 'xrmtoolboxweb-core';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";
import { List } from "@fluentui/react/lib/List";
import { DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from "@fluentui/react/lib/DetailsList";

import * as GlobalOptionSetDefinitions from './webapi'

initializeIcons()

const EMPTY_RESULT = { value:[] }

const _optionsColumns:IColumn[] = [
    { key:'label',name:'Label', minWidth:100, isResizable: true, 
        onRender: (item?:Xrm.Metadata.OptionMetadata) => 
                (<Text>{item?.Label.LocalizedLabels[0].Label}</Text>)
        
    },
    { key:'value',name:'Value',fieldName:'Value', minWidth:100, isResizable: false, data:'number' }, 
]

const sortCriteria = (a:GlobalOptionSetDefinitions.Metadata, b:GlobalOptionSetDefinitions.Metadata) => {
    const typeCompare = -(a.OptionSetType.localeCompare(b.OptionSetType))
    if( typeCompare == 0 )
        return a.Name.localeCompare(b.Name)
    return typeCompare
}
/**
 * 
 * @returns 
 */
export function App() {

    const { instance, account, renderAfterLogin } = useRenderAfterLogin()

    const [result, setResult] = useState<Partial<GlobalOptionSetDefinitions.Response>>(EMPTY_RESULT);

    useEffect(() => {
        
        if (account) {
            instance.acquireTokenSilent({
                scopes: webapiScopes,
                account: account
            })
            .then( prepareWebApiRequest ) 
            .then( () => GlobalOptionSetDefinitions.Invoke() )
            .then( (values) => 
                setResult( { ...values, value:values.value.sort(sortCriteria)})
            )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    const _onRenderCell = (item?: GlobalOptionSetDefinitions.Metadata, index?: number | undefined): JSX.Element => {
        return (
          <Stack styles={{ root: { maxWidth: 500 }}}>
              
              <Stack horizontal verticalAlign="center" tokens={{ childrenGap:20, padding: 5}}>
                <Text variant="xLargePlus">{item!.Name}</Text>
                <Text variant="xLarge">({item!.OptionSetType})</Text>
              </Stack>
              
            {  
            // <Text>{JSON.stringify(item!.Options, undefined, 2)}</Text> 
            }
              {item?.Options && item.Options.length > 0 &&
                <DetailsList
                    compact={true}
                    items={item?.Options ?? []}
                    columns={_optionsColumns}
                    layoutMode={DetailsListLayoutMode.justified}
                    selectionMode={SelectionMode.none}
                    isHeaderVisible={true}
                    />
              }         
          </Stack>
        );
      };


    return renderAfterLogin( () => ( 
        <div>
            <List items={result.value!} onRenderCell={_onRenderCell} />            
        </div>
    ))
}