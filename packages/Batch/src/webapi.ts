import { Instance as Client,  ChangeSet, Batch, BatchRequest } from '@bsorrentino/xrmtoolboxweb-webapiclient'

export type Response = any


export const Invoke = () => {
    const payloads = [
        {
            rxr_version: "1.1",     
            rxr_name: "test" 
        },
        {
            rxr_version: "1.2",     
            rxr_name: "test" 
        },
        {
            rxr_version: "1.3",     
            rxr_name: "test" 
        },
        {
            rxr_version: "1.3",     
            rxr_name: "test" 
        }
    ]

    const changeSets:Array<ChangeSet> = 
        payloads.map( payload => 
            (new ChangeSet({
                requests: [
                    new BatchRequest({
                            method: 'POST',
                            url: Client.GetApiUrl() + Client.GetSetName('rxr_featureversion'),
                            payload: JSON.stringify(payload)})
                    ]
                })))

    const batch = new Batch({ 
            headers: [
                { key: 'Prefer', value: 'odata.continue-on-error'}
            ],
            changeSets: changeSets
            // requests: [ 
            //     new WebApiClient.BatchRequest({
            //          method: 'POST',
            //         url: WebApiClient.Instance.GetApiUrl() + WebApiClient.Instance.GetSetName('rxr_featureversion'),
            //         payload: "" //JSON.stringify(payload)

            //     })
            // ]
        })

    return Client.SendBatch<Response>(batch) as Promise<Response>

    // return WebApiClient.Instance.Create({ 
    //     entityName: 'rxr_featureversion',
    //     entity: {
    //         "rxr_version": "1.0",
    //         "rxr_name": "test" 
    //     }

    // })
}
    
