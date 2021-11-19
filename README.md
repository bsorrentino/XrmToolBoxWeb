
## XrmToolBoxWeb

XrmToolBoxWeb is a Web application that connects to Microsoft Dataverse.

Idea is to create an "alter ego" of amazing window tool [XrmToolBox](https://www.xrmtoolbox.com)

## Supported Features

Feature | Description | Documentation
 --- | --- | ---
WhoAmI | Retrieves the system user ID for the currently logged on user or the user under whose context the code is running. | [link](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/whoami?view=dynamics-ce-odata-9)
RetrieveAllEntities | Retrieves metadata information about all the entities. | [link](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/retrieveallentities?view=dynamics-ce-odata-9) 
RetrieveTotalRecordCount | Returns data on the total number of records for specific entities. | [link](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/retrievetotalrecordcount?view=dynamics-ce-odata-9) 
GlobalOptionSetDefinitions | fetch Global OptionSets. | [link](https://crmtipoftheday.com/532/retrieving-global-optionsets-using-web-api/) 
System Forms | Gets a collection of SystemForm entity references. |  [link](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/systemform?view=dynamics-ce-odata-9) 
Calculate Rollup Field | Calculates the value of a rollup attribute. | [link](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/mt718083(v=crm.8)?redirectedfrom=MSDN)
Commandbar Elements | List(Delete) Commandbar Dependencies | [link](https://taerimhan.com/quick-fix-cant-delete-command-library-component/) 


## Reference

* [Xrm-WebApi-Client project](https://github.com/XRM-OSS/Xrm-WebApi-Client)
* [Microsoft Authentication Library for JavaScript (MSAL.js) 2.0 for Browser-Based Single-Page Applications](https://www.npmjs.com/package/@azure/msal-browser)
* [Acquiring an OAuth Access Token from Dynamics 365 CRM Online](https://giangpham.io/blog/acquiring-an-oauth-access-token-from-dynamics-365-crm-online/)
* [Web API Reference](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/about?view=dynamics-ce-odata-9)
