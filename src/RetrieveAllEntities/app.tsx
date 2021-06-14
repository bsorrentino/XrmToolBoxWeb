import React, { useCallback, useEffect, useState } from "react"
import { useAccount } from "@azure/msal-react"
import { DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList'
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection'
import { mergeStyles } from '@fluentui/react/lib/Styling'
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField'
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup'
import { Announced } from '@fluentui/react/lib/Announced'
import { PrimaryButton } from '@fluentui/react/lib/Button'
import { Stack } from '@fluentui/react/lib/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { useRenderAfterLogin } from "../auth";
import {  
    scopes as webapiScopes, 
    prepareWebApiRequest,
    RetrieveAllEntities,
    RetrieveAllEntitiesResponse,
    EntityFiltersEnum
} from '../webapi';
import { Icon } from "@fluentui/react/lib/Icon"
import { ShimmeredDetailsList } from "@fluentui/react/lib/ShimmeredDetailsList"

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
  function EntityMetadataList( params:{ 
      metadata?:Array<Xrm.Metadata.EntityMetadata>,
      loading:boolean
    }) 
    {
    
    const selection = new Selection({
        onSelectionChanged: () => {
            //this.setState({ selectionDetails: this._getSelectionDetails() }
            console.log( 'onSelectionChanged!' )
        },
    });

    const copyToClipboard = ( text:string ) => {
        if( navigator.clipboard ) {
            navigator.clipboard.writeText(text)
            .then( () => console.log( `text '${text}' copied to clipboard`))
            .catch( err => console.error( 'error coping to clipboard', err ))
        }
    }

    const renderer = ( item: Record<string,any>, index?:number, col?:IColumn) => {

        return ( 
            <Stack horizontal verticalAlign="center" >
                <div>{item[col!.fieldName!]}</div>
                <Icon  iconName="Copy" styles={{root:{ paddingLeft:5 }}} onClick={ () => copyToClipboard(item[col!.fieldName!]) } />
            </Stack> 
        )

    }
    const columns: IColumn[] = [
        {   
            key: 'column1', 
            name: 'Name', 
            fieldName: 'LogicalName', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true,
            onRender:renderer,
        },
        { 
            key: 'column2', 
            name: 'Plural Name', 
            fieldName: 'LogicalCollectionName', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true,
            onRender:renderer,
        },
        { 
            key: 'column3', 
            name: 'Primary Name', 
            fieldName: 'PrimaryIdAttribute', 
            minWidth: 100, 
            maxWidth: 200, 
            isResizable: true,
            onRender:renderer,
        },
    ]


    const onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
        alert(`Item invoked: ${item.name}`);
    };
  
  
    const items = params.metadata ?? []
    return (
        <div>
          {/*  
          <Text>
            Note: While focusing a row, pressing enter or double clicking will execute onItemInvoked, which in this
            example will show an alert.
          </Text>
          */}
          <Announced message={`Number of items: ${items.length}.`} />
          <MarqueeSelection selection={selection}>
            <ShimmeredDetailsList
              items={items}
              columns={columns}
              enableShimmer={params.loading}
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
    const [selectedKey, setSelectedKey] = useState(String(EntityFiltersEnum.Entity));
    const [result, setResult] = useState<Partial<RetrieveAllEntitiesResponse>>( { EntityMetadata: [] } );
    const [items, setItems] = useState<Array<Xrm.Metadata.EntityMetadata>>( [] );
    const [loading, setLoading] = useState<boolean>( false )

    const onChange = useCallback((ev?:React.SyntheticEvent<HTMLElement>, option?:IChoiceGroupOption) => {
        if( option ) setSelectedKey(option.key);
    }, [])

    const options = enumToGroups( EntityFiltersEnum )

    const execute = () => {
        const filter:any = selectedKey
        setLoading(true)
        RetrieveAllEntities( { EntityFilters: filter, RetrieveAsIfPublished:false })
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

    const { instance, accounts, renderAfterLogin } = useRenderAfterLogin();
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

    return renderAfterLogin( () => ( <div><Main/></div> ))
}