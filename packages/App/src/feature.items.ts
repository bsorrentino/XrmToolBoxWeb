export type FeatureItem = {
    name: string
    description?: string
    docPage: string
    testPage?:string
}

export const featureItems:Array<FeatureItem> = [
    { name: 'WhoAmI', 
      description:'Retrieves the system user ID for the currently logged on user or the user under whose context the code is running.', 
      docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/whoami?view=dynamics-ce-odata-9', 
      testPage:'/WhoAmI.html'
    }, 
    { name: 'RetrieveAllEntities', 
      description:'Retrieves metadata information about all the entities.', 
      docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/retrieveallentities?view=dynamics-ce-odata-9',
      testPage:'/RetrieveAllEntities.html'
    }, 
    { name: 'RetrieveTotalRecordCount', 
      description:'Returns data on the total number of records for specific entities.', 
      docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/retrievetotalrecordcount?view=dynamics-ce-odata-9',
      testPage:'/RetrieveTotalRecordCount.html'
    }, 
    { name: 'GlobalOptionSetDefinitions', 
      description:'fetch Global OptionSets.', 
      docPage:'https://crmtipoftheday.com/532/retrieving-global-optionsets-using-web-api/',
      testPage:'/GlobalOptionSetDefinitions.html'
    }, 
    { name: 'System Forms', 
      description:'Gets a collection of SystemForm entity references.', 
      docPage:'https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/systemform?view=dynamics-ce-odata-9',
      testPage:'/SystemForms.html'
    }, 
    { name: 'Calculate Rollup Field', 
      description:'Calculates the value of a rollup attribute.', 
      docPage:'https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/mt718083(v=crm.8)?redirectedfrom=MSDN',
      testPage:'/CalculateRollupField.html'
    },
    { name: 'Commandbar Elements', 
      description:'List(Delete) Commandbar Dependencies', 
      docPage:'https://taerimhan.com/quick-fix-cant-delete-command-library-component/',
      testPage:'/Commandbar.html'
    },  
]
