import React, { useCallback, useEffect, useState } from "react"
import { mergeStyles } from '@fluentui/react/lib/Styling'
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField'
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  useRenderAfterLogin, EntityFiltersEnum } from '@bsorrentino/xrmtoolboxweb-core'
import * as RetrieveAllEntities from './webapi'
import { EntityMetadataList } from "./EntityMetadataList"

initializeIcons();

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
});
  
const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };
  
/**
 * 
 * @param enumObject 
 * @returns 
 */
function enumToGroups( enumObject:object):Array<IChoiceGroupOption>  {

    const result = Array<IChoiceGroupOption>()

    for (const [propertyKey, propertyValue] of Object.entries(enumObject)) {  
        if (!Number.isNaN(Number(propertyKey))) continue
        result.push({ text: propertyKey + '\u00A0\u00A0', key: String(propertyValue) })
  }  

  return result
}

/**
 * 
 * @returns 
 */
function Main() {
    const [selectedKey, setSelectedKey] = useState(String(EntityFiltersEnum.Entity));
    const [result, setResult] = useState<Partial<RetrieveAllEntities.Response>>( { EntityMetadata: [] } );
    const [items, setItems] = useState<Array<Xrm.Metadata.EntityMetadata>>( [] );
    const [loading, setLoading] = useState<boolean>( false )

    const onChange = useCallback((ev?:React.SyntheticEvent<HTMLElement>, option?:IChoiceGroupOption) => {
        if( option ) setSelectedKey(option.key);
    }, [])

    const options = enumToGroups( EntityFiltersEnum )

    const execute = () => {
        const filter:any = selectedKey
        setLoading(true)
        RetrieveAllEntities.Invoke( { EntityFilters: filter, RetrieveAsIfPublished:false })
            .then( metadata => {
                setResult(metadata)
                setItems(metadata.EntityMetadata) 
                setLoading(false)
            })
            .catch( error => {
                console.error( error)
                setLoading(false) 
            })
    }

    const onFilter = (ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
        console.log( 'onFilter', text )

        if( text && result.EntityMetadata ) {
            setItems( result.EntityMetadata.filter( md => text.length==0 || md.LogicalName.toLowerCase().indexOf(text) > -1))               
        }
    };

    return (
        <Stack>
            <Stack horizontal>          
                <ChoiceGroup 
                    styles={{flexContainer: { display: "flex" } }}
                    defaultSelectedKey={EntityFiltersEnum.Entity}
                    options={options} 
                    onChange={onChange} 
                    label="Set Metadata Filter" 
                    required={true} />

                <PrimaryButton text="Run" onClick={execute} allowDisabledFocus />
            </Stack>
            <TextField
                className={exampleChildClass}
                label="Filter by name:"
                onChange={onFilter}
                styles={textFieldStyles}
            />
            <EntityMetadataList metadata={items} loading={loading}/>
        </Stack>
        );

}

/**
 * 
 * @returns 
 */
export function App() {
    const { instance, account, scopes, acquireTokenSilent, renderAfterLogin } = useRenderAfterLogin()

    useEffect(() => {
        
        if (account) {
            acquireTokenSilent() 
            //.then( () => RetrieveAllEntities( { EntityFilters:{} }) )
            //.then( setResult )
            .catch( error => console.error(error))
            ;
        }
    }, [account?.localAccountId, instance]);

    return renderAfterLogin( () => ( 
        <div>
            <h3>Scope: {scopes[0]}</h3><hr/>
            <Main/>
        </div> 
        ))
}