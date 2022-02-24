import * as WebApi from '@bsorrentino/xrmtoolboxweb-webapiclient'

/**
 * Execute a single action, function, or CRUD operation.
 * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/execute External Link: execute (Client API reference)}
 * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
 * @remarks The object exposes a getMetadata method that lets you define the metadata for the action, function or CRUD request you want to execute.<BR>
 * **The getMetadata method has the following parameters**:
 *   - boundParameter: (Optional) String. The name of the bound parameter for the action or function to execute.
 *       * Specify undefined if you are executing a CRUD request.
 *       * Specify null if the action or function to execute is not bound to any entity.
 *       * Specify entity logical name or entity set name in case the action or function to execute is bound to one.
 *   - operationName: (Optional). String. Name of the action, function, or one of the following values if you are executing a CRUD request: "Create", "Retrieve", "RetrieveMultiple", "Update", or "Delete".
 *   - operationType: (Optional). Number. Indicates the type of operation you are executing; specify one of the following values:
 *       * 0: Action
 *       * 1: Function
 *       * 2: CRUD
 *   - parameterTypes: Object. The metadata for parameter types. The object has the following attributes:
 *   - enumProperties: (Optional) Object. The metadata for enum types. The object has two string attributes: name and value
 *   - structuralProperty: Number. The category of the parameter type. Specify one of the following values:
 *       * 0: Unknown
 *       * 1: PrimitiveType
 *       * 2: ComplexType
 *       * 3: EnumerationType
 *       * 4: Collection
 *       * 5: EntityType
 *   - typeName: String. The fully qualified name of the parameter type.
 */

 type EnumType = {
    name: string,
    value: string
}

export const enum OperationType {
    Action = 0,
    Function,
    CRUD
} 

export const enum ParamCategory {
    Unknown = 0,
    PrimitiveType,
    ComplexType,
    EnumerationType,
    Collection,
    EntityType
}


type EntityName = string
type Unbounded = null
type CRUD = undefined

type ActionName = string

export type OperationName = ActionName | "Create" | "Retrieve" | "RetrieveMultiple" |"Update" | "Delete"

export type ParamType = {
    enumProperties?: EnumType
    structuralProperty: ParamCategory,
    typeName: string
}

export interface ExecuteRequestData {
    boundParameter: CRUD | Unbounded | EntityName
    operationName?: OperationName
    operationType?: OperationType
    parameterTypes: Record<string,ParamType>
}

export interface ExecuteRequest {
    getMetadata():ExecuteRequestData
}



export type Response = Record<string,any>

export const Invoke = <T extends ExecuteRequest>( request:T ) => {

    const { operationName } = request.getMetadata()
    const req = WebApi.Request.of({
        method: 'POST',
        name: operationName,
    })

    return WebApi.Instance.Execute<Response>(req) as Promise<Response>

}
    
