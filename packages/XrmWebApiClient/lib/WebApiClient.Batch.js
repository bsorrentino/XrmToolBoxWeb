export class Batch {
    constructor(params) {
        const { name = 'batch_AAA123', changeSets = [], requests = [], headers = [] } = params;
        this.name = name;
        this.changeSets = changeSets;
        this.requests = requests;
        this.headers = headers;
        this.async = params.async;
        this.isOverLengthGet = params.isOverLengthGet;
    }
    buildPayload() {
        let payload = "";
        for (let i = 0; i < this.changeSets.length; i++) {
            payload += "--" + this.name + "\n";
            payload += "Content-Type: multipart/mixed;boundary=" + this.changeSets[i].name + "\n\n";
            var changeSet = this.changeSets[i];
            payload += changeSet.stringify();
        }
        for (var j = 0; j < this.requests.length; j++) {
            payload += "--" + this.name + "\n";
            payload += "Content-Type: application/http\n";
            payload += "Content-Transfer-Encoding:binary\n\n";
            var request = this.requests[j];
            payload += request.stringify();
            if (j === this.requests.length - 1) {
                payload += "--" + this.name + "--\n";
            }
        }
        return payload;
    }
    ;
}
