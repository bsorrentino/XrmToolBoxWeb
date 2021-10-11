import { Request } from './WebApiClient.Request';
export const CalculateRollupFieldRequest = Object.create(Request.prototype, {
    method: {
        value: "GET",
        writeable: true
    },
    name: {
        value: "CalculateRollupField",
        writeable: true
    }
});
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
export const WinQuoteRequest = Object.create(Request.prototype, {
    method: {
        value: "POST",
        writeable: true
    },
    name: {
        value: "WinQuote",
        writeable: true
    }
});
