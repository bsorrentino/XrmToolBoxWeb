import { ChangeSetParameters, IBatchRequest, IChangeSet } from "./WebApiClient.Base";
export declare class ChangeSet implements IChangeSet {
    name: string;
    requests: Array<IBatchRequest>;
    constructor(params: ChangeSetParameters);
    stringify(): string;
}
