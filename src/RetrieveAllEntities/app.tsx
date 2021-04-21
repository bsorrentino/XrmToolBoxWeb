import React, { useCallback, useEffect, useState } from "react"
import { useMsal, useAccount } from "@azure/msal-react"
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList'
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection'
import { mergeStyles } from '@fluentui/react/lib/Styling'
import { Text } from '@fluentui/react/lib/Text'
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField'
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup'
import { Announced } from '@fluentui/react/lib/Announced'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    RetrieveAllEntities,
    RetrieveAllEntitiesResponse,
    EntityFiltersEnum
} from '../webapi';

initializeIcons();

const exampleChildClass = mergeStyles({
    display: 'block',
    marginBottom: '10px',
  });
  
  const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };
  
  export interface IDetailsListBasicExampleItem {
    key: number;
    name: string;
    value: number;
  }
  
  export interface IDetailsListBasicExampleState {
    items: IDetailsListBasicExampleItem[];
    selectionDetails: string;
  }
  
  /**
   * 
   * @param items 
   * @returns 
   */
  function EntityMetadataList( params:{ metadata?:Array<Xrm.Metadata.EntityMetadata> } ) {
    
    const items = params.metadata || [] 

    const selection = new Selection({
        onSelectionChanged: () => {
            //this.setState({ selectionDetails: this._getSelectionDetails() }
            console.log( 'onSelectionChanged!' )
        },
    });

    const columns: IColumn[] = [
        { key: 'column1', name: 'Name', fieldName: 'LogicalName', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Plural Name', fieldName: 'LogicalCollectionName', minWidth: 100, maxWidth: 200, isResizable: true },
    ]


    const onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
        alert(`Item invoked: ${item.name}`);
    };
  
    const getSelectionDetails = () => {
        const selectionCount = selection.getSelectedCount();
    
        switch (selectionCount) {
          case 0:
            return 'No items selected';
          case 1:
            return `1 item selected: ' + ${(selection.getSelection()[0] as IDetailsListBasicExampleItem).name}`;
          default:
            return `${selectionCount} items selected`;
        }
    }
  
    return (
        <div>
          <Text>
            Note: While focusing a row, pressing enter or double clicking will execute onItemInvoked, which in this
            example will show an alert.
          </Text>
          <Announced message={`Number of items: ${items.length}.`} />
          <MarqueeSelection selection={selection}>
            <DetailsList
              items={items}
              columns={columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.justified}
              selection={selection}
              selectionPreservedOnEmptyClick={true}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
              checkButtonAriaLabel="select row"
              onItemInvoked={onItemInvoked}
            />
          </MarqueeSelection>
        </div>
      );
}
  
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
    const [selectedKey, setSelectedKey] = useState(String(EntityFiltersEnum.All));
    const [result, setResult] = useState<Partial<RetrieveAllEntitiesResponse>>( { EntityMetadata: [] } );
    const [items, setItems] = useState<Array<Xrm.Metadata.EntityMetadata>>( [] );

    const onChange = useCallback((ev?:React.SyntheticEvent<HTMLElement>, option?:IChoiceGroupOption) => {
        if( option ) setSelectedKey(option.key);
    }, [])

    const options = enumToGroups( EntityFiltersEnum )

    const execute = () => {
        const filter:any = selectedKey
        RetrieveAllEntities( { EntityFilters: filter, RetrieveAsIfPublished:false })
            .then( metadata => {
                setResult(metadata)
                setItems(metadata.EntityMetadata) 
            })
            .catch( error => console.error( error) )
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
                    defaultSelectedKey={EntityFiltersEnum.All}
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
            <EntityMetadataList metadata={items}/>
        </Stack>
        );

}

/**
 * 
 * @returns 
 */
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