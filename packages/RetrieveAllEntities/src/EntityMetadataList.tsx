import { Announced, Icon, MarqueeSelection, ShimmeredDetailsList, Stack } from '@fluentui/react';
import { DetailsListLayoutMode, Selection, IColumn, SelectionMode } from '@fluentui/react/lib/DetailsList'
import React from 'react';

export interface IDetailsListBasicExampleItem {
    key: number
    name: string
    value: number
}

export interface IDetailsListBasicExampleState {
    items: IDetailsListBasicExampleItem[]
    selectionDetails: string
}


/**
 * 
 * @param items 
 * @returns 
 */
export function EntityMetadataList(params: {
    metadata?: Array<Xrm.Metadata.EntityMetadata>,
    loading: boolean
}) {

    const selection = new Selection({
        selectionMode: SelectionMode.single,
        onSelectionChanged: () => {
            console.log('onSelectionChanged')
        },
    });

    const copyToClipboard = (text: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => console.log(`text '${text}' copied to clipboard`))
                .catch(err => console.error('error coping to clipboard', err))
        }
    }


    const onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
        alert(`Item invoked: ${item.name}`)
        console.log( item )
    }

    const renderer = (item: Record<string, any>, index?: number, col?: IColumn) => {

        return (
            <Stack horizontal verticalAlign="center" >
                <div>{item[col!.fieldName!]}</div>
                <Icon iconName="Copy" styles={{ root: { paddingLeft: 5 } }} onClick={() => copyToClipboard(item[col!.fieldName!])} />
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
            onRender: renderer,
        },
        {
            key: 'column2',
            name: 'Plural Name',
            fieldName: 'LogicalCollectionName',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true,
            onRender: renderer,
        },
        {
            key: 'column3',
            name: 'Primary Name',
            fieldName: 'PrimaryIdAttribute',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true,
            onRender: renderer,
        },
    ]


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
