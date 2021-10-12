export class BatchRequest {
    constructor(params) {
        var _a, _b;
        this.method = params.method;
        this.url = params.url;
        this.payload = (_a = params.payload) !== null && _a !== void 0 ? _a : null;
        this.contentId = params.contentId;
        this.headers = (_b = params.headers) !== null && _b !== void 0 ? _b : [];
    }
    stringify() {
        let payload = "";
        if (this.contentId) {
            payload += "Content-ID: " + this.contentId + "\n\n";
        }
        payload += this.method + " " + this.url + " HTTP/1.1\n";
        for (var i = 0; i < this.headers.length; i++) {
            var header = this.headers[i];
            if (["accept", "content-type"].indexOf(header.key.toLowerCase()) === -1) {
                payload += header.key + ": " + header.value + "\n";
            }
        }
        if (this.method.toLowerCase() === "get") {
            payload += "Accept: application/json\n\n";
        }
        else {
            payload += "Content-Type: application/json;type=entry\n\n";
        }
        if (this.payload) {
            payload += JSON.stringify(this.payload);
        }
        else if (this.method.toLowerCase() === "delete") {
            payload += JSON.stringify({});
        }
        return payload;
    }
    ;
}
;
