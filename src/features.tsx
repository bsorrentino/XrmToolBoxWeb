import * as React from 'react'
import { FocusZone } from '@fluentui/react/lib/FocusZone'
import { List } from '@fluentui/react/lib/List'
import { IRectangle } from '@fluentui/react/lib/Utilities'
import { useConst } from '@fluentui/react-hooks'

import { getTheme, mergeStyleSets, FontSizes, DefaultEffects } from '@fluentui/react/lib/Styling'
const theme = getTheme()
const { palette, fonts } = theme

const classNames = mergeStyleSets({
    featureTile: {
        //textAlign: 'center',
        outline: 'none',
        position: 'relative',
        float: 'left',
        background: palette.neutralLighter,
        padding: '0px 10px 10px 10px',
        margin: '10px',
        boxShadow: DefaultEffects.elevation8,
    },
    featureDescription: {
        'padding-top':'10px',
        'padding-bottom':'10px',
    }
    
})
/*
import { ITheme, getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';

const theme: ITheme = getTheme();
const { palette, fonts } = theme;
const classNames = mergeStyleSets({
  listGridExample: {
    overflow: 'hidden',
    fontSize: 0,
    position: 'relative',
  },
  listGridExampleTile: {
    textAlign: 'center',
    outline: 'none',
    position: 'relative',
    float: 'left',
    background: palette.neutralLighter,
    selectors: {
      'focus:after': {
        content: '',
        position: 'absolute',
        left: 2,
        right: 2,
        top: 2,
        bottom: 2,
        boxSizing: 'border-box',
        border: `1px solid ${palette.white}`,
      },
    },
  },
  listGridExampleSizer: {
    paddingBottom: '100%',
  },
  listGridExamplePadder: {
    position: 'absolute',
    left: 2,
    top: 2,
    right: 2,
    bottom: 2,
  },
  listGridExampleLabel: {
    background: 'rgba(0, 0, 0, 0.3)',
    color: '#FFFFFF',
    position: 'absolute',
    padding: 10,
    bottom: 0,
    left: 0,
    width: '100%',
    fontSize: fonts.small.fontSize,
    boxSizing: 'border-box',
  },
  listGridExampleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
});
*/

interface FeatureItem {
    name: string
    description?: string
    docPage: string
    testPage?:string
}

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 250;

export const Features: React.FunctionComponent = () => {

  const columnCount = React.useRef(0);
  const rowHeight   = React.useRef(0);

  
  const onRenderCell = React.useCallback((item?: FeatureItem, index?: number) => {
    return (
        <div className={classNames.featureTile}>
            <div style={{fontSize:FontSizes.size28}}>{item?.name}</div>
            <div className={classNames.featureDescription}>
                {item?.description}
            </div>
            <a href={item?.docPage} target={item?.name}>documentation</a>
        </div>
    );
  }, []);

  const getPageHeight = React.useCallback( () => rowHeight.current * ROWS_PER_PAGE, [])

  const items = useConst<FeatureItem[]>(() => [
      { name: 'WhoAmI', 
        description:'Retrieves the system user ID for the currently logged on user or the user under whose context the code is running.', 
        docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/whoami?view=dynamics-ce-odata-9' 
      }, 
      { name: 'RetrieveAllEntities', 
        description:'Retrieves metadata information about all the entities.', 
        docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/retrieveallentities?view=dynamics-ce-odata-9' 
      }, 
  ])

  const getItemCountForPage = React.useCallback((itemIndex?: number, surfaceRect?: IRectangle) => {

    console.log( surfaceRect, itemIndex)
    if (surfaceRect && itemIndex === 0) {
      columnCount.current   = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
      rowHeight.current     = Math.floor(surfaceRect.width / columnCount.current);
    }
    return columnCount.current * ROWS_PER_PAGE;
  }, []);

  return (
    <FocusZone>
      <List
        //className={classNames.listGridExample}
        items={items}
        getItemCountForPage={getItemCountForPage}
        getPageHeight={getPageHeight}
        renderedWindowsAhead={4}
        onRenderCell={onRenderCell}
      />
    </FocusZone>
  );
};
