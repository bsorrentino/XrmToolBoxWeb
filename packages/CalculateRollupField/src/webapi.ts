import * as WebApi from 'xrmtoolboxweb-webapiclient'

export interface Response extends Record<string,any> {
    "@odata.context": string
}

export const Invoke = (EntityPluralName: string, FieldName:string, recordId:string ) => {

    const req = WebApi.Request.of({
        method: 'GET',
        name: 'CalculateRollupField',
        urlParams: {
            //'Target': `{'@odata.id':'" + strTargetEntitySetName + "(" + strTargetRecordId + ")'},
            'Target': `{'@odata.id':'${EntityPluralName}(${recordId})'}`,
            'FieldName': `'${FieldName}'`
        }
    })

    return WebApi.Instance.Execute<Response>(req) as Promise<Response>

}
