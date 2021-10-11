import { Request } from './WebApiClient.Request'
// Functions

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt718083.aspx
 * @description Calculates the value of a rollup attribute.
 * @alias CalculateRollupFieldRequest
 */
export const CalculateRollupFieldRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "CalculateRollupField",
        writeable: true
    }
})

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593054.aspx
 * @description Calculates the total time, in minutes, that you used while you worked on an incident (case).
 * @alias CalculateTotalTimeIncidentRequest
 */
export const CalculateTotalTimeIncidentRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "CalculateTotalTimeIncident",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "incident",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683529.aspx
 * @description Check whether the incoming email message is relevant to the Microsoft Dynamics 365 system.
 * @alias CheckIncomingEmailRequest
 */
export const CheckIncomingEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "CheckIncomingEmail",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593013.aspx
 * @description Contains the data that is needed to check whether the incoming email message should be promoted to the Microsoft Dynamics 365 system.
 * @alias CheckPromoteEmailRequest
 */
export const CheckPromoteEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "CheckPromoteEmail",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607800.aspx
 * @description Downloads a report definition.
 * @alias DownloadReportDefinitionRequest
 */
export const DownloadReportDefinitionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "DownloadReportDefinition",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "report",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607824.aspx
 * @description Converts the calendar rules to an array of available time blocks for the specified period.
 * @alias ExpandCalendarRequest
 */
export const ExpandCalendarRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "ExpandCalendar",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "calendar",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593047.aspx
 * @description Exports localizable fields values to a compressed file.
 * @alias ExportFieldTranslationRequest
 */
export const ExportFieldTranslationRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "ExportFieldTranslation",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491169.aspx
 * @description Converts a query in FetchXML to a QueryExpression.
 * @alias FetchXmlToQueryExpressionRequest
 */
export const FetchXmlToQueryExpressionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "FetchXmlToQueryExpression",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683530.aspx
 * @description Finds a parent resource group (scheduling group) for the specified resource groups (scheduling groups).
 * @alias FindParentResourceGroupRequest
 */
export const FindParentResourceGroupRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "FindParentResourceGroup",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "resourcegroup",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593004.aspx
 * @description Retrieves all the time zone definitions for the specified locale and to return only the display name attribute.
 * @alias GetAllTimeZonesWithDisplayNameRequest
 */
export const GetAllTimeZonesWithDisplayNameRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetAllTimeZonesWithDisplayName",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608119.aspx
 * @description Retrieves the default price level (price list) for the current user based on the user’s territory relationship with the price level.
 * @alias GetDefaultPriceLevelRequest
 */
export const GetDefaultPriceLevelRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetDefaultPriceLevel",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622422.aspx
 * @description Retrieves distinct values from the parse table for a column in the source file that contains list values.
 * @alias GetDistinctValuesImportFileRequest
 */
export const GetDistinctValuesImportFileRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetDistinctValuesImportFile",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "importfile",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622408.aspx
 * @description Retrieves the source-file column headings; or retrieve the system-generated column headings if the source file does not contain column headings.
 * @alias GetHeaderColumnsImportFileRequest
 */
export const GetHeaderColumnsImportFileRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetHeaderColumnsImportFile",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "importfile",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683531.aspx
 * @description Gets the quantity decimal value of a product for the specified entity in the target.
 * @alias GetQuantityDecimalRequest
 */
export const GetQuantityDecimalRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetQuantityDecimal",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607697.aspx
 * @description Retrieves the history limit for a report.
 * @alias GetReportHistoryLimitRequest
 */
export const GetReportHistoryLimitRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetReportHistoryLimit",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "report",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607644.aspx
 * @description Retrieves the time zone code for the specified localized time zone name.
 * @alias GetTimeZoneCodeByLocalizedNameRequest
 */
export const GetTimeZoneCodeByLocalizedNameRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetTimeZoneCodeByLocalizedName",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608131.aspx
 * @description Retrieves a list of all the entities that can participate in a Many-to-Many entity relationship.
 * @alias GetValidManyToManyRequest
 */
export const GetValidManyToManyRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetValidManyToMany",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608031.aspx
 * @description Retrieves a list of entity logical names that are valid as the primary entity (one) from the specified entity in a one-to-many relationship.
 * @alias GetValidReferencedEntitiesRequest
 */
export const GetValidReferencedEntitiesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetValidReferencedEntities",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt592992.aspx
 * @description Retrieves the set of entities that are valid as the related entity (many) to the specified entity in a one-to-many relationship.
 * @alias GetValidReferencingEntitiesRequest
 */
export const GetValidReferencingEntitiesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "GetValidReferencingEntities",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683532.aspx
 * @description Increments the per day view count of a knowledge article record.
 * @alias IncrementKnowledgeArticleViewCountRequest
 */
export const IncrementKnowledgeArticleViewCountRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "IncrementKnowledgeArticleViewCount",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683533.aspx
 * @description Initializes a new record from an existing record.
 * @alias InitializeFromRequest
 */
export const InitializeFromRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "InitializeFrom",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607606.aspx
 * @description Determines whether a solution component is customizable.
 * @alias IsComponentCustomizableRequest
 */
export const IsComponentCustomizableRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "IsComponentCustomizable",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607678.aspx
 * @description Determines whether data encryption is currently running (active or inactive).
 * @alias IsDataEncryptionActiveRequest
 */
export const IsDataEncryptionActiveRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "IsDataEncryptionActive",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683534.aspx
 * @description Validates the state transition.
 * @alias IsValidStateTransitionRequest
 */
export const IsValidStateTransitionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "IsValidStateTransition",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683535.aspx
 * @description Searches multiple resources for available time block that matches the specified parameters.
 * @alias QueryMultipleSchedulesRequest
 */
export const QueryMultipleSchedulesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "QueryMultipleSchedules",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608100.aspx
 * @description Searches the specified resource for an available time block that matches the specified parameters.
 * @alias QueryScheduleRequest
 */
export const QueryScheduleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "QuerySchedule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622429.aspx
 * @description Retrieves the absolute URL and the site collection URL for a SharePoint location record in Microsoft Dynamics 365.
 * @alias RetrieveAbsoluteAndSiteCollectionUrlRequest
 */
export const RetrieveAbsoluteAndSiteCollectionUrlRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveAbsoluteAndSiteCollectionUrl",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491171.aspx
 * @description TODO: RetrieveActivePath Function Description (No Joke, MS description)
 * @alias RetrieveActivePathRequest
 */
export const RetrieveActivePathRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveActivePath",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607682.aspx
 * @description Retrieves the collection of users that report to the specified system user (user).
 * @alias RetrieveAllChildUsersSystemUserRequest
 */
export const RetrieveAllChildUsersSystemUserRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveAllChildUsersSystemUser",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683536.aspx
 * @description Retrieves metadata information about all the entities.
 * @alias RetrieveAllEntitiesRequest
 */
export const RetrieveAllEntitiesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveAllEntities",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607503.aspx
 * @description Retrieve the data that defines the content and behavior of the application ribbon.
 * @alias RetrieveApplicationRibbonRequest
 */
export const RetrieveApplicationRibbonRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveApplicationRibbon",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593106.aspx
 * @description Retrieves the list of database partitions that are used to store audited history data.
 * @alias RetrieveAuditPartitionListRequest
 */
export const RetrieveAuditPartitionListRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveAuditPartitionList",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607635.aspx
 * @description Retrieves the list of language packs that are installed and enabled on the server.
 * @alias RetrieveAvailableLanguagesRequest
 */
export const RetrieveAvailableLanguagesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveAvailableLanguages",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607489.aspx
 * @description Retrieves all business units from the business unit hierarchy.
 * @alias RetrieveBusinessHierarchyBusinessUnitRequest
 */
export const RetrieveBusinessHierarchyBusinessUnitRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveBusinessHierarchyBusinessUnit",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "businessunit",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607979.aspx
 * @description Retrieves all resources that are related to the specified resource group
 * @alias RetrieveByGroupResourceRequest
 */
export const RetrieveByGroupResourceRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveByGroupResource",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "resourcegroup",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607881.aspx
 * @description Retrieves the resource groups (scheduling groups) that contain the specified resource.
 * @alias RetrieveByResourceResourceGroupRequest
 */
export const RetrieveByResourceResourceGroupRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveByResourceResourceGroup",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "resource",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491172.aspx
 * @description Retrieve the collection of services that are related to the specified set of resources.
 * @alias RetrieveByResourcesServiceRequest
 */
export const RetrieveByResourcesServiceRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveByResourcesService",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607560.aspx
 * @description Retrieves the top-ten articles about a specified product from the knowledge base of articles for the organization
 * @alias RetrieveByTopIncidentProductKbArticleRequest
 */
export const RetrieveByTopIncidentProductKbArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveByTopIncidentProductKbArticle",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "product",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608058.aspx
 * @description Retrieves the top-ten articles about a specified subject from the knowledge base of articles for your organization.
 * @alias RetrieveByTopIncidentSubjectKbArticleRequest
 */
export const RetrieveByTopIncidentSubjectKbArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveByTopIncidentSubjectKbArticle",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "subject",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608120.aspx
 * @description Retrieve information about the current organization.
 * @alias RetrieveCurrentOrganizationRequest
 */
export const RetrieveCurrentOrganizationRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveCurrentOrganization",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608110.aspx
 * @description Retrieves the data encryption key value.
 * @alias RetrieveDataEncryptionKeyRequest
 */
export const RetrieveDataEncryptionKeyRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDataEncryptionKey",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607985.aspx
 * @description Retrieves a collection of dependency records that describe any solution components that would prevent a solution component from being deleted.
 * @alias RetrieveDependenciesForDeleteRequest
 */
export const RetrieveDependenciesForDeleteRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDependenciesForDelete",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607791.aspx
 * @description Retrieves a list of the solution component dependencies that can prevent you from uninstalling a managed solution.
 * @alias RetrieveDependenciesForUninstallRequest
 */
export const RetrieveDependenciesForUninstallRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDependenciesForUninstall",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593045.aspx
 * @description Retrieves a list dependencies for solution components that directly depend on a solution component.
 * @alias RetrieveDependentComponentsRequest
 */
export const RetrieveDependentComponentsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDependentComponents",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593056.aspx
 * @description Retrieves the type of license for a deployment of Microsoft Dynamics 365.
 * @alias RetrieveDeploymentLicenseTypeRequest
 */
export const RetrieveDeploymentLicenseTypeRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDeploymentLicenseType",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607656.aspx
 * @description Retrieves a list of language packs that are installed on the server that have been disabled.
 * @alias RetrieveDeprovisionedLanguagesRequest
 */
export const RetrieveDeprovisionedLanguagesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDeprovisionedLanguages",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683537.aspx
 * @description Detects and retrieves duplicates for a specified record.
 * @alias RetrieveDuplicatesRequest
 */
export const RetrieveDuplicatesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveDuplicates",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491170.aspx
 * @description Retrieve the changes for an entity.
 * @alias RetrieveEntityChangesRequest
 */
export const RetrieveEntityChangesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveEntityChanges",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607698.aspx
 * @description Retrieves ribbon definitions for an entity.
 * @alias RetrieveEntityRibbonRequest
 */
export const RetrieveEntityRibbonRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveEntityRibbon",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491173.aspx
 * @description Retrieves the appointments for the current user for a specific date range from the exchange web service.
 * @alias RetrieveExchangeAppointmentsRequest
 */
export const RetrieveExchangeAppointmentsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveExchangeAppointments",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607795.aspx
 * @description Retrieves the exchange rate.
 * @alias RetrieveExchangeRateRequest
 */
export const RetrieveExchangeRateRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveExchangeRate",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491174.aspx
 * @description Retrieves the entity forms that are available for a specified user.
 * @alias RetrieveFilteredFormsRequest
 */
export const RetrieveFilteredFormsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveFilteredForms",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607487.aspx
 * @description Retrieves the formatted results from an import job.
 * @alias RetrieveFormattedImportJobResultsRequest
 */
export const RetrieveFormattedImportJobResultsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveFormattedImportJobResults",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607696.aspx
 * @description Retrieves the list of language packs that are installed on the server.
 * @alias RetrieveInstalledLanguagePacksRequest
 */
export const RetrieveInstalledLanguagePacksRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveInstalledLanguagePacks",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608102.aspx
 * @description Retrieves the version of an installed language pack.
 * @alias RetrieveInstalledLanguagePackVersionRequest
 */
export const RetrieveInstalledLanguagePackVersionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveInstalledLanguagePackVersion",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607844.aspx
 * @description Retrieves the number of used and available licenses for a deployment of Microsoft Dynamics 365.
 * @alias RetrieveLicenseInfoRequest
 */
export const RetrieveLicenseInfoRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveLicenseInfo",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683538.aspx
 * @description Retrieves localized labels for a limited set of entity attributes.
 * @alias RetrieveLocLabelsRequest
 */
export const RetrieveLocLabelsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveLocLabels",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt592988.aspx
 * @description Retrieves folder-level tracking rules for a mailbox.
 * @alias RetrieveMailboxTrackingFoldersRequest
 */
export const RetrieveMailboxTrackingFoldersRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveMailboxTrackingFolders",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622412.aspx
 * @description Retrieves the members of a bulk operation.
 * @alias RetrieveMembersBulkOperationRequest
 */
export const RetrieveMembersBulkOperationRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveMembersBulkOperation",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "bulkoperation",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607580.aspx
 * @description Retrieves a list of missing components in the target organization.
 * @alias RetrieveMissingComponentsRequest
 */
export const RetrieveMissingComponentsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveMissingComponents",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607972.aspx
 * @description Retrieves any required solution components that are not included in the solution.
 * @alias RetrieveMissingDependenciesRequest
 */
export const RetrieveMissingDependenciesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveMissingDependencies",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607527.aspx
 * @description Retrieves the resources that are used by an organization.
 * @alias RetrieveOrganizationResourcesRequest
 */
export const RetrieveOrganizationResourcesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveOrganizationResources",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607818.aspx
 * @description Retrieves the collection of the parent resource groups of the specified resource group (scheduling group).
 * @alias RetrieveParentGroupsResourceGroupRequest
 */
export const RetrieveParentGroupsResourceGroupRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveParentGroupsResourceGroup",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607594.aspx
 * @description Retrieves the data from the parse table.
 * @alias RetrieveParsedDataImportFileRequest
 */
export const RetrieveParsedDataImportFileRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveParsedDataImportFile",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607613.aspx
 * @description Retrieves pages of posts, including comments for each post, for all records that the calling user is following.
 * @alias RetrievePersonalWallRequest
 */
export const RetrievePersonalWallRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrievePersonalWall",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683539.aspx
 * @description Retrieves the access rights of the specified security principal (team or user) to the specified record.
 * @alias RetrievePrincipalAccessRequest
 */
export const RetrievePrincipalAccessRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrievePrincipalAccess",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607755.aspx
 * @description Retrieves all the secured attribute privileges a user or team has through direct or indirect (through team membership) associations with the FieldSecurityProfile entity.
 * @alias RetrievePrincipalAttributePrivilegesRequest
 */
export const RetrievePrincipalAttributePrivilegesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrievePrincipalAttributePrivileges",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593098.aspx
 * @description For internal use only.
 * @alias RetrievePrincipalSyncAttributeMappingsRequest
 */
export const RetrievePrincipalSyncAttributeMappingsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrievePrincipalSyncAttributeMappings",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622426.aspx
 * @description Retrieves the set of privileges defined in the system.
 * @alias RetrievePrivilegeSetRequest
 */
export const RetrievePrivilegeSetRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrievePrivilegeSet",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491175.aspx
 * @description TODO: RetrieveProcessInstances Function Description (By MS)
 * @alias RetrieveProcessInstancesRequest
 */
export const RetrieveProcessInstancesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveProcessInstances",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607701.aspx
 * @description Retrieve all the property instances (dynamic property instances) for a product added to an opportunity, quote, order, or invoice.
 * @alias RetrieveProductPropertiesRequest
 */
export const RetrieveProductPropertiesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveProductProperties",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593074.aspx
 * @description Retrieves the version of a provisioned language pack.
 * @alias RetrieveProvisionedLanguagePackVersionRequest
 */
export const RetrieveProvisionedLanguagePackVersionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveProvisionedLanguagePackVersion",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607900.aspx
 * @description Retrieves the list of provisioned languages.
 * @alias RetrieveProvisionedLanguagesRequest
 */
export const RetrieveProvisionedLanguagesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveProvisionedLanguages",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683540.aspx
 * @description Retrieves pages of posts, including comments for each post, for a specified record.
 * @alias RetrieveRecordWallRequest
 */
export const RetrieveRecordWallRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveRecordWall",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607927.aspx
 * @description Retrieves a collection of solution components that are required for a solution component.
 * @alias RetrieveRequiredComponentsRequest
 */
export const RetrieveRequiredComponentsRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveRequiredComponents",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607997.aspx
 * @description Retrieves the privileges that are assigned to the specified role.
 * @alias RetrieveRolePrivilegesRoleRequest
 */
export const RetrieveRolePrivilegesRoleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveRolePrivilegesRole",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607604.aspx
 * @description Retrieves the collection of child resource groups from the specified resource group.
 * @alias RetrieveSubGroupsResourceGroupRequest
 */
export const RetrieveSubGroupsResourceGroupRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveSubGroupsResourceGroup",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "resourcegroup",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608036.aspx
 * @description Retrieves the privileges for a team.
 * @alias RetrieveTeamPrivilegesRequest
 */
export const RetrieveTeamPrivilegesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveTeamPrivileges",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "team",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607518.aspx
 * @description Retrieves a time stamp for the metadata.
 * @alias RetrieveTimestampRequest
 */
export const RetrieveTimestampRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveTimestamp",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683541.aspx
 * @description Retrieves a collection of unpublished organization-owned records that satisfy the specified query criteria.
 * @alias RetrieveUnpublishedMultipleRequest
 */
export const RetrieveUnpublishedMultipleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveUnpublishedMultiple",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607996.aspx
 * @description Retrieves the privileges a system user (user) has through his or her roles in the specified business unit.
 * @alias RetrieveUserPrivilegesRequest
 */
export const RetrieveUserPrivilegesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveUserPrivileges",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607579.aspx
 * @description Retrieves all private queues of a specified user and optionally all public queues.
 * @alias RetrieveUserQueuesRequest
 */
export const RetrieveUserQueuesRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveUserQueues",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593041.aspx
 * @description Retrieves the version number of the Microsoft Dynamics 365 Server.
 * @alias RetrieveVersionRequest
 */
export const RetrieveVersionRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "RetrieveVersion",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491176.aspx
 * @description Retrieves all the entity records that are related to the specified record.
 * @alias RollupRequest
 */
export const RollupRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "Rollup",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608029.aspx
 * @description Searches for available time slots that fulfill the specified appointment request.
 * @alias SearchRequest
 */
export const SearchRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "Search",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683542.aspx
 * @description Searches for knowledge base articles that contain the specified body text.
 * @alias SearchByBodyKbArticleRequest
 */
export const SearchByBodyKbArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "SearchByBodyKbArticle",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683543.aspx
 * @description Searches for knowledge base articles that contain the specified keywords.
 * @alias SearchByKeywordsKbArticleRequest
 */
export const SearchByKeywordsKbArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "SearchByKeywordsKbArticle",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683544.aspx
 * @description Searches for knowledge base articles that contain the specified title.
 * @alias SearchByTitleKbArticleRequest
 */
export const SearchByTitleKbArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "SearchByTitleKbArticle",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt683545.aspx
 * @description Validates a rule for a recurring appointment.
 * @alias ValidateRecurrenceRuleRequest
 */
export const ValidateRecurrenceRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "ValidateRecurrenceRule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607925.aspx
 * @description Retrieves the system user ID for the currently logged on user or the user under whose context the code is running.
 * @alias WhoAmIRequest
 */
export const WhoAmIRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "WhoAmI",
        writeable: true
    }
});

// Actions

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607569.aspx
 * @description Adds an item to a campaign.
 * @alias AddItemCampaignRequest
 */
export const AddItemCampaignRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddItemCampaign",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607559.aspx
 * @description Adds an item to a campaign activity.
 * @alias AddItemCampaignActivityRequest
 */
export const AddItemCampaignActivityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddItemCampaignActivity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607641.aspx
 * @description Adds members to a list.
 * @alias AddListMembersListRequest
 */
export const AddListMembersListRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddListMembersList",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607495.aspx
 * @description Adds a member to a list (marketing list).
 * @alias AddMemberListRequest
 */
export const AddMemberListRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddMemberList",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "list",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607496.aspx
 * @description Adds members to a team.
 * @alias AddMembersTeamRequest
 */
export const AddMembersTeamRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddMembersTeam",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "team",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593089.aspx
 * @description Adds the specified principal to the list of queue members.
 * @alias AddPrincipalToQueueRequest
 */
export const AddPrincipalToQueueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddPrincipalToQueue",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "queue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607862.aspx
 * @description Adds a set of existing privileges to an existing role.
 * @alias AddPrivilegesRoleRequest
 */
export const AddPrivilegesRoleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddPrivilegesRole",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "role",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607566.aspx
 * @description Adds recurrence information to an existing appointment.
 * @alias AddRecurrenceRequest
 */
export const AddRecurrenceRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddRecurrence",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "appointment",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593057.aspx
 * @description Adds a solution component to an unmanaged solution.
 * @alias AddSolutionComponentRequest
 */
export const AddSolutionComponentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddSolutionComponent",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607880.aspx
 * @description Moves an entity record from a source queue to a destination queue.
 * @alias AddToQueueRequest
 */
export const AddToQueueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddToQueue",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "queue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607951.aspx
 * @description Adds a user to the auto created access team for the specified record.
 * @alias AddUserToRecordTeamRequest
 */
export const AddUserToRecordTeamRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AddUserToRecordTeam",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608069.aspx
 * @description Applies record creation and update rules to activities in 365 created as a result of the integration with external applications.
 * @alias ApplyRecordCreationAndUpdateRuleRequest
 */
export const ApplyRecordCreationAndUpdateRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ApplyRecordCreationAndUpdateRule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608125.aspx
 * @description Applies the active routing rule to an incident.
 * @alias ApplyRoutingRuleRequest
 */
export const ApplyRoutingRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ApplyRoutingRule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607766.aspx
 * @description Generates a new set of attribute mappings based on the metadata.
 * @alias AutoMapEntityRequest
 */
export const AutoMapEntityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "AutoMapEntity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt718079.aspx
 * @description Schedules or "books" an appointment, recurring appointment, or service appointment (service activity).
 * @alias BookRequest
 */
export const BookRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "Book",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491158.aspx
 * @description Submits a bulk delete job that deletes selected records in bulk. This job runs asynchronously in the background without blocking other activities.
 * @alias BulkDeleteRequest
 */
export const BulkDeleteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "BulkDelete",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491162.aspx
 * @description Submits an asynchronous system job that detects and logs multiple duplicate records.
 * @alias BulkDetectDuplicatesRequest
 */
export const BulkDetectDuplicatesRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "BulkDetectDuplicates",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607988.aspx
 * @description Calculates the value of an opportunity that is in the "Won" state.
 * @alias CalculateActualValueOpportunityRequest
 */
export const CalculateActualValueOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CalculateActualValueOpportunity",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "opportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608012.aspx
 * @description Calculates price in an opportunity, quote, order, and invoice.
 * @alias CalculatePriceRequest
 */
export const CalculatePriceRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CalculatePrice",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593059.aspx
 * @description Checks whether the specified entity can be the primary entity (one) in a one-to-many relationship.
 * @alias CanBeReferencedRequest
 */
export const CanBeReferencedRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CanBeReferenced",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607578.aspx
 * @description Checkes whether an entity can be the referencing entity in a one-to-many relationship.
 * @alias CanBeReferencingRequest
 */
export const CanBeReferencingRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CanBeReferencing",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607610.aspx
 * @description Cancels a contract.
 * @alias CancelContractRequest
 */
export const CancelContractRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CancelContract",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "contract",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607587.aspx
 * @description Cancels a sales order.
 * @alias CancelSalesOrderRequest
 */
export const CancelSalesOrderRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CancelSalesOrder",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607577.aspx
 * @description Checks whether an entity can participate in a many-to-many relationship.
 * @alias CanManyToManyRequest
 */
export const CanManyToManyRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CanManyToMany",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607802.aspx
 * @description Creates a solution patch from a managed or unmanaged solution.
 * @alias CloneAsPatchRequest
 */
export const CloneAsPatchRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloneAsPatch",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607806.aspx
 * @description Creates a new copy of an unmanged solution that contains the original solution plus all of its patches.
 * @alias CloneAsSolutionRequest
 */
export const CloneAsSolutionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloneAsSolution",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607895.aspx
 * @description Copies an existing contract and its line items.
 * @alias CloneContractRequest
 */
export const CloneContractRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloneContract",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "contract",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt718080.aspx
 * @description For internal use only.
 * @alias CloneMobileOfflineProfileRequest
 */
export const CloneMobileOfflineProfileRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloneMobileOfflineProfile",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "mobileofflineprofile",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608030.aspx
 * @description Copies an existing product family, product, or bundle under the same parent record.
 * @alias CloneProductRequest
 */
export const CloneProductRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloneProduct",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "product",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607498.aspx
 * @description Closes an incident (case).
 * @alias CloseIncidentRequest
 */
export const CloseIncidentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloseIncident",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607685.aspx
 * @description Closes a quote.
 * @alias CloseQuoteRequest
 */
export const CloseQuoteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CloseQuote",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608088.aspx
 * @description Updates a duplicate rule (duplicate detection rule) and its related duplicate rule conditions.
 * @alias CompoundUpdateDuplicateDetectionRuleRequest
 */
export const CompoundUpdateDuplicateDetectionRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CompoundUpdateDuplicateDetectionRule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607749.aspx
 * @description Converts a team of type owner to a team of type access.
 * @alias ConvertOwnerTeamToAccessTeamRequest
 */
export const ConvertOwnerTeamToAccessTeamRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ConvertOwnerTeamToAccessTeam",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "team",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607933.aspx
 * @description Converts a product to a kit.
 * @alias ConvertProductToKitRequest
 */
export const ConvertProductToKitRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ConvertProductToKit",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607842.aspx
 * @description Converts a quote to a sales order.
 * @alias ConvertQuoteToSalesOrderRequest
 */
export const ConvertQuoteToSalesOrderRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ConvertQuoteToSalesOrder",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607736.aspx
 * @description Converts a sales order to an invoice.
 * @alias ConvertSalesOrderToInvoiceRequest
 */
export const ConvertSalesOrderToInvoiceRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ConvertSalesOrderToInvoice",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607820.aspx
 * @description Copies a campaign.
 * @alias CopyCampaignRequest
 */
export const CopyCampaignRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CopyCampaign",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "campaign",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607655.aspx
 * @description Creates a copy of a campaign response
 * @alias CopyCampaignResponseRequest
 */
export const CopyCampaignResponseRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CopyCampaignResponse",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "campaignresponse",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593064.aspx
 * @description Creates a static list from the specified dynamic list and add the members that satisfy the dynamic list query criteria to the static list.
 * @alias CopyDynamicListToStaticRequest
 */
export const CopyDynamicListToStaticRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CopyDynamicListToStatic",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "list",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607620.aspx
 * @description Copies the members from the source list to the target list without creating duplicates.
 * @alias CopyMembersListRequest
 */
export const CopyMembersListRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CopyMembersList",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "list",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608044.aspx
 * @description Creates a new entity form that is based on an existing entity form.
 * @alias CopySystemFormRequest
 */
export const CopySystemFormRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CopySystemForm",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemform",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607931.aspx
 * @description Creates a quick campaign to distribute an activity to members of a list (marketing list).
 * @alias CreateActivitiesListRequest
 */
export const CreateActivitiesListRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateActivitiesList",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491161.aspx
 * @description Creates a new customer lookup attribute, and optionally, to add it to a specified unmanaged solution.
 * @alias CreateCustomerRelationshipsRequest
 */
export const CreateCustomerRelationshipsRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateCustomerRelationships",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593100.aspx
 * @description Creates an exception for the recurring appointment instance.
 * @alias CreateExceptionRequest
 */
export const CreateExceptionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateException",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608070.aspx
 * @description Creates future unexpanded instances for the recurring appointment master.
 * @alias CreateInstanceRequest
 */
export const CreateInstanceRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateInstance",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607622.aspx
 * @description Creates translation of a knowledge article instance.
 * @alias CreateKnowledgeArticleTranslationRequest
 */
export const CreateKnowledgeArticleTranslationRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateKnowledgeArticleTranslation",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607825.aspx
 * @description Creates a major or minor version of a knowledge article instance.
 * @alias CreateKnowledgeArticleVersionRequest
 */
export const CreateKnowledgeArticleVersionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateKnowledgeArticleVersion",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622404.aspx
 * @description Creates a workflow (process) from a workflow template.
 * @alias CreateWorkflowFromTemplateRequest
 */
export const CreateWorkflowFromTemplateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "CreateWorkflowFromTemplate",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "workflow",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607488.aspx
 * @description Replaces managed solution (A) plus all of its patches with managed solution (B) that is the clone of (A) and all of its patches.
 * @alias DeleteAndPromoteRequest
 */
export const DeleteAndPromoteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeleteAndPromote",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607758.aspx
 * @description Deletes all audit data records up until a specified end date.
 * @alias DeleteAuditDataRequest
 */
export const DeleteAuditDataRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeleteAuditData",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608051.aspx
 * @description Deletes instances of a recurring appointment master that have an “Open” state.
 * @alias DeleteOpenInstancesRequest
 */
export const DeleteOpenInstancesRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeleteOpenInstances",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607754.aspx
 * @description Deletes an option value in a global or local option set.
 * @alias DeleteOptionValueRequest
 */
export const DeleteOptionValueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeleteOptionValue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607515.aspx
 * @description Creates an email activity record from an incoming email message.
 * @alias DeliverIncomingEmailRequest
 */
export const DeliverIncomingEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeliverIncomingEmail",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608033.aspx
 * @description Creates an email activity record from the specified email message
 * @alias DeliverPromoteEmailRequest
 */
export const DeliverPromoteEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeliverPromoteEmail",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "email",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608078.aspx
 * @description Deprovisions a language.
 * @alias DeprovisionLanguageRequest
 */
export const DeprovisionLanguageRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DeprovisionLanguage",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607926.aspx
 * @description Creates a bulk operation that distributes a campaign activity.
 * @alias DistributeCampaignActivityRequest
 */
export const DistributeCampaignActivityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "DistributeCampaignActivity",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "campaignactivity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491159.aspx
 * @description Executes a workflow.
 * @alias ExecuteWorkflowRequest
 */
export const ExecuteWorkflowRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ExecuteWorkflow",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "workflow",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622402.aspx
 * @description Exports a data map as an XML formatted data.
 * @alias ExportMappingsImportMapRequest
 */
export const ExportMappingsImportMapRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ExportMappingsImportMap",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "importmap",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607590.aspx
 * @description Exports a solution.
 * @alias ExportSolutionRequest
 */
export const ExportSolutionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ExportSolution",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608097.aspx
 * @description Exports all translations for a specific solution to a compressed file.
 * @alias ExportTranslationRequest
 */
export const ExportTranslationRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ExportTranslation",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607784.aspx
 * @description Fulfills a sales order.
 * @alias FulfillSalesOrderRequest
 */
export const FulfillSalesOrderRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "FulfillSalesOrder",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491160.aspx
 * @description Performs a full-text search on knowledge articles in Dynamics 365 using the specified search text.
 * @alias FullTextSearchKnowledgeArticleRequest
 */
export const FullTextSearchKnowledgeArticleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "FullTextSearchKnowledgeArticle",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593066.aspx
 * @description Generates an invoice from an opportunity.
 * @alias GenerateInvoiceFromOpportunityRequest
 */
export const GenerateInvoiceFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GenerateInvoiceFromOpportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607591.aspx
 * @description Generates a quote from an opportunity.
 * @alias GenerateQuoteFromOpportunityRequest
 */
export const GenerateQuoteFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GenerateQuoteFromOpportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607659.aspx
 * @description Generates a sales order (order) from an opportunity.
 * @alias GenerateSalesOrderFromOpportunityRequest
 */
export const GenerateSalesOrderFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GenerateSalesOrderFromOpportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593014.aspx
 * @description Returns an existing social profile record if one exists, otherwise generates a new one and returns it.
 * @alias GenerateSocialProfileRequest
 */
export const GenerateSocialProfileRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GenerateSocialProfile",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "socialprofile",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607526.aspx
 * @description Retrieves the products from an opportunity and copy them to the invoice.
 * @alias GetInvoiceProductsFromOpportunityRequest
 */
export const GetInvoiceProductsFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GetInvoiceProductsFromOpportunity",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "invoice",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607548.aspx
 * @description Retrieves the products from an opportunity and copy them to the quote.
 * @alias GetQuoteProductsFromOpportunityRequest
 */
export const GetQuoteProductsFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GetQuoteProductsFromOpportunity",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "quote",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607869.aspx
 * @description Retrieves the products from an opportunity and copy them to the sales order.
 * @alias GetSalesOrderProductsFromOpportunityRequest
 */
export const GetSalesOrderProductsFromOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GetSalesOrderProductsFromOpportunity",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "salesorder",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593007.aspx
 * @description Returns a tracking token that can then be passed as a parameter to the SendEmailRequest message.
 * @alias GetTrackingTokenEmailRequest
 */
export const GetTrackingTokenEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "GetTrackingTokenEmail",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608013.aspx
 * @description Imports translations from a compressed file.
 * @alias ImportFieldTranslationRequest
 */
export const ImportFieldTranslationRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ImportFieldTranslation",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607768.aspx
 * @description Imports the XML representation of a data map and create an import map (data map) based on this data.
 * @alias ImportMappingsImportMapRequest
 */
export const ImportMappingsImportMapRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ImportMappingsImportMap",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622418.aspx
 * @description Submits an asynchronous job that uploads the transformed data into Microsoft Dynamics 365.
 * @alias ImportRecordsImportRequest
 */
export const ImportRecordsImportRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ImportRecordsImport",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "import",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608117.aspx
 * @description Imports a solution.
 * @alias ImportSolutionRequest
 */
export const ImportSolutionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ImportSolution",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607744.aspx
 * @description Imports translations from a compressed file.
 * @alias ImportTranslationRequest
 */
export const ImportTranslationRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ImportTranslation",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607647.aspx
 * @description Inserts a new option value for a global or local option set.
 * @alias InsertOptionValueRequest
 */
export const InsertOptionValueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "InsertOptionValue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607839.aspx
 * @description Inserts a new option into a StatusAttributeMetadata attribute.
 * @alias InsertStatusValueRequest
 */
export const InsertStatusValueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "InsertStatusValue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608101.aspx
 * @description Installs the sample data.
 * @alias InstallSampleDataRequest
 */
export const InstallSampleDataRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "InstallSampleData",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607877.aspx
 * @description Instantiates a set of filters for Dynamics 365 for Outlook for the specified user.
 * @alias InstantiateFiltersRequest
 */
export const InstantiateFiltersRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "InstantiateFilters",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt592993.aspx
 * @description Creates an email message from a template (email template).
 * @alias InstantiateTemplateRequest
 */
export const InstantiateTemplateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "InstantiateTemplate",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607781.aspx
 * @description Locks the total price of products and services that are specified in the invoice.
 * @alias LockInvoicePricingRequest
 */
export const LockInvoicePricingRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "LockInvoicePricing",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "invoice",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607804.aspx
 * @description Locks the total price of products and services that are specified in the sales order (order).
 * @alias LockSalesOrderPricingRequest
 */
export const LockSalesOrderPricingRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "LockSalesOrderPricing",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "salesorder",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607618.aspx
 * @description Sets the state of an opportunity to Lost.
 * @alias LoseOpportunityRequest
 */
export const LoseOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "LoseOpportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607669.aspx
 * @description Merges the information from two entity records of the same type.
 * @alias MergeRequest
 */
export const MergeRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "Merge",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607483.aspx
 * @description Sets the order for an option set.
 * @alias OrderOptionRequest
 */
export const OrderOptionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "OrderOption",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622440.aspx
 * @description Submits an asynchronous job that parses all import files that are associated with the specified import (data import).
 * @alias ParseImportRequest
 */
export const ParseImportRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ParseImport",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "import",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593071.aspx
 * @description Assigns a queue item to a user and optionally remove the queue item from the queue.
 * @alias PickFromQueueRequest
 */
export const PickFromQueueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PickFromQueue",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "queueitem",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607787.aspx
 * @description Processes the email responses from a marketing campaign.
 * @alias ProcessInboundEmailRequest
 */
export const ProcessInboundEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ProcessInboundEmail",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "email",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491163.aspx
 * @description Creates a quick campaign to distribute an activity to accounts, contacts, or leads that are selected by a query.
 * @alias PropagateByExpressionRequest
 */
export const PropagateByExpressionRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PropagateByExpression",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608077.aspx
 * @description Provisions a new language.
 * @alias ProvisionLanguageRequest
 */
export const ProvisionLanguageRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ProvisionLanguage",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607699.aspx
 * @description Publishes all changes to solution components.
 * @alias PublishAllXmlRequest
 */
export const PublishAllXmlRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PublishAllXml",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622423.aspx
 * @description Submits an asynchronous job to publish a duplicate rule.
 * @alias PublishDuplicateRuleRequest
 */
export const PublishDuplicateRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PublishDuplicateRule",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "duplicaterule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593011.aspx
 * @description Publishes a product family record and all its child records.
 * @alias PublishProductHierarchyRequest
 */
export const PublishProductHierarchyRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PublishProductHierarchy",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "product",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608018.aspx
 * @description Publishes a theme and set it as the current theme.
 * @alias PublishThemeRequest
 */
export const PublishThemeRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PublishTheme",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "theme",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593076.aspx
 * @description Publishes specified solution components.
 * @alias PublishXmlRequest
 */
export const PublishXmlRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "PublishXml",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491164.aspx
 * @description Qualifies a lead and create account, contact, and opportunity records that are linked to the originating lead record.
 * @alias QualifyLeadRequest
 */
export const QualifyLeadRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "QualifyLead",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "lead",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607614.aspx
 * @description Qualifies the specified list and either override the list members or remove them according to the specified option.
 * @alias QualifyMemberListRequest
 */
export const QualifyMemberListRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "QualifyMemberList",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "list",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491165.aspx
 * @description Converts a QueryExpression query to its equivalent FetchXML query
 * @alias QueryExpressionToFetchXmlRequest
 */
export const QueryExpressionToFetchXmlRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "QueryExpressionToFetchXml",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607627.aspx
 * @description Reassigns all records that are owned by the security principal (user or team) to another security principal (user or team).
 * @alias ReassignObjectsOwnerRequest
 */
export const ReassignObjectsOwnerRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ReassignObjectsOwner",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607965.aspx
 * @description Reassigns all records that are owned by a specified user to another security principal (user or team).
 * @alias ReassignObjectsSystemUserRequest
 */
export const ReassignObjectsSystemUserRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ReassignObjectsSystemUser",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607675.aspx
 * @description Recalculate system-computed values for rollup fields in the goal hierarchy.
 * @alias RecalculateRequest
 */
export const RecalculateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "Recalculate",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "goal",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593031.aspx
 * @description Assigns a queue item back to the queue owner so others can pick it.
 * @alias ReleaseToQueueRequest
 */
export const ReleaseToQueueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ReleaseToQueue",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "queueitem",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607534.aspx
 * @description Removes a queue item from a queue.
 * @alias RemoveFromQueueRequest
 */
export const RemoveFromQueueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemoveFromQueue",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "queueitem",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607537.aspx
 * @description Removes members from a team.
 * @alias RemoveMembersTeamRequest
 */
export const RemoveMembersTeamRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemoveMembersTeam",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607528.aspx
 * @description Removes the parent for a system user (user) record.
 * @alias RemoveParentRequest
 */
export const RemoveParentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemoveParent",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593107.aspx
 * @description Removes a privilege from an existing role.
 * @alias RemovePrivilegeRoleRequest
 */
export const RemovePrivilegeRoleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemovePrivilegeRole",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "role",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608116.aspx
 * @description Removes a component from an unmanaged solution.
 * @alias RemoveSolutionComponentRequest
 */
export const RemoveSolutionComponentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemoveSolutionComponent",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607735.aspx
 * @description Removes a user from the auto created access team for the specified record.
 * @alias RemoveUserFromRecordTeamRequest
 */
export const RemoveUserFromRecordTeamRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RemoveUserFromRecordTeam",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593084.aspx
 * @description Renews a contract and create the contract details for a new contract.
 * @alias RenewContractRequest
 */
export const RenewContractRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RenewContract",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "contract",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607893.aspx
 * @description Renews an entitlement.
 * @alias RenewEntitlementRequest
 */
export const RenewEntitlementRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RenewEntitlement",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "entitlement",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607752.aspx
 * @description Replaces the privilege set of an existing role.
 * @alias ReplacePrivilegesRoleRequest
 */
export const ReplacePrivilegesRoleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ReplacePrivilegesRole",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "role",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt718082.aspx
 * @description Reschedules an appointment, recurring appointment, or service appointment (service activity).
 * @alias RescheduleRequest
 */
export const RescheduleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "Reschedule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607633.aspx
 * @description Resets the offline data filters for the calling user to the default filters for the organization.
 * @alias ResetUserFiltersRequest
 */
export const ResetUserFiltersRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ResetUserFilters",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608006.aspx
 * @description Reverts changes done to properties of a product family, product, or bundle record, and set it back to its last published (active) state.
 * @alias RevertProductRequest
 */
export const RevertProductRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RevertProduct",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607543.aspx
 * @description Sets the state of a quote to Draft.
 * @alias ReviseQuoteRequest
 */
export const ReviseQuoteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ReviseQuote",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607505.aspx
 * @description Replaces the access rights on the target record for the specified security principal (user or team).
 * @alias RevokeAccessRequest
 */
export const RevokeAccessRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RevokeAccess",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607729.aspx
 * @description Routes a queue item to a queue, a user, or a team.
 * @alias RouteToRequest
 */
export const RouteToRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "RouteTo",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491166.aspx
 * @description Sends bulk email messages.
 * @alias SendBulkMailRequest
 */
export const SendBulkMailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SendBulkMail",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608061.aspx
 * @description Sends an e-mail message.
 * @alias SendEmailRequest
 */
export const SendEmailRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SendEmail",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "email",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607523.aspx
 * @description Sends an e-mail message to a recipient using an e-mail template.
 * @alias SendEmailFromTemplateRequest
 */
export const SendEmailFromTemplateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SendEmailFromTemplate",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607670.aspx
 * @description Sends a fax.
 * @alias SendFaxRequest
 */
export const SendFaxRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SendFax",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607717.aspx
 * @description Sends a bulk email message that is created from a template.
 * @alias SendTemplateRequest
 */
export const SendTemplateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SendTemplate",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608087.aspx
 * @description Assigns equipment (facility/equipment) to a specific business unit.
 * @alias SetBusinessEquipmentRequest
 */
export const SetBusinessEquipmentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetBusinessEquipment",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593023.aspx
 * @description Moves a system user (user) to a different business unit.
 * @alias SetBusinessSystemUserRequest
 */
export const SetBusinessSystemUserRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetBusinessSystemUser",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608039.aspx
 * @description Sets or restore the data encryption key.
 * @alias SetDataEncryptionKeyRequest
 */
export const SetDataEncryptionKeyRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetDataEncryptionKey",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491167.aspx
 * @description TODO: SetFeatureStatus Action Description (Obviously no description yet)
 * @alias SetFeatureStatusRequest
 */
export const SetFeatureStatusRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetFeatureStatus",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607609.aspx
 * @description Sets localized labels for a limited set of entity attributes.
 * @alias SetLocLabelsRequest
 */
export const SetLocLabelsRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetLocLabels",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607617.aspx
 * @description Sets a new parent system user (user) for the specified user.
 * @alias SetParentSystemUserRequest
 */
export const SetParentSystemUserRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetParentSystemUser",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "systemuser",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607705.aspx
 * @description Sets the process that associates with a given target entity. The user can set to another business process or specify null to clear out the current process.
 * @alias SetProcessRequest
 */
export const SetProcessRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetProcess",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607765.aspx
 * @description Links an instance of a report entity to related entities.
 * @alias SetReportRelatedRequest
 */
export const SetReportRelatedRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "SetReportRelated",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608027.aspx
 * @description Submits an asynchronous job that transforms the parsed data.
 * @alias TransformImportRequest
 */
export const TransformImportRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "TransformImport",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt622443.aspx
 * @description Validates the configuration of a Microsoft Azure Service Bus solution’s service endpoint.
 * @alias TriggerServiceEndpointCheckRequest
 */
export const TriggerServiceEndpointCheckRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "TriggerServiceEndpointCheck",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    },
    entityName: {
        value: "serviceendpoint",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608045.aspx
 * @description Uninstalls the sample data.
 * @alias UninstallSampleDataRequest
 */
export const UninstallSampleDataRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UninstallSampleData",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608015.aspx
 * @description Unlocks pricing for an invoice.
 * @alias UnlockInvoicePricingRequest
 */
export const UnlockInvoicePricingRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UnlockInvoicePricing",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt608026.aspx
 * @description Unlocks pricing for a sales order (order).
 * @alias UnlockSalesOrderPricingRequest
 */
export const UnlockSalesOrderPricingRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UnlockSalesOrderPricing",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt593018.aspx
 * @description Submits an asynchronous job to unpublish a duplicate rule.
 * @alias UnpublishDuplicateRuleRequest
 */
export const UnpublishDuplicateRuleRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UnpublishDuplicateRule",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt491168.aspx
 * @description TODO: UpdateFeatureConfig Action Description (Missing)
 * @alias UpdateFeatureConfigRequest
 */
export const UpdateFeatureConfigRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UpdateFeatureConfig",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607949.aspx
 * @description Updates an option value in a global or local option set.
 * @alias UpdateOptionValueRequest
 */
export const UpdateOptionValueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UpdateOptionValue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607561.aspx
 * @description Updates values of the property instances (dynamic property instances) for a product added to an opportunity, quote, order, or invoice.
 * @alias UpdateProductPropertiesRequest
 */
export const UpdateProductPropertiesRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UpdateProductProperties",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607611.aspx
 * @description Updates a component in an unmanaged solution.
 * @alias UpdateSolutionComponentRequest
 */
export const UpdateSolutionComponentRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UpdateSolutionComponent",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607556.aspx
 * @description Updates an option set value in for a StateAttributeMetadata attribute.
 * @alias UpdateStateValueRequest
 */
export const UpdateStateValueRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "UpdateStateValue",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607767.aspx
 * @description Verifies that an appointment or service appointment (service activity) has valid available resources for the activity, duration, and site, as appropriate.
 * @alias ValidateRequest
 */
export const ValidateRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "Validate",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607945.aspx
 * @description Validates a saved query.
 * @alias ValidateSavedQueryRequest
 */
export const ValidateSavedQueryRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "ValidateSavedQuery",
        writeable: true
    },
    bound: {
        value: true,
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607971.aspx
 * @description Sets the state of an opportunity to Won.
 * @alias WinOpportunityRequest
 */
export const WinOpportunityRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "WinOpportunity",
        writeable: true
    }
});

/**
 * @memberof module:Requests
 * @this {Requests}
 * @see https://msdn.microsoft.com/en-us/library/mt607710.aspx
 * @description Sets the state of a quote to Won.
 * @alias WinQuoteRequest
 */
export const WinQuoteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "WinQuote",
        writeable: true
    }
})

