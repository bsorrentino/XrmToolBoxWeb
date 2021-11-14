let instanceCount = 1;
export class ChangeSet {
    constructor(params) {
        var _a, _b;
        this.name = (_a = params.name) !== null && _a !== void 0 ? _a : "changeset_" + instanceCount++;
        this.requests = (_b = params.requests) !== null && _b !== void 0 ? _b : [];
    }
    stringify() {
        let payload = "";
        let contentId = 1;
        for (let i = 0; i < this.requests.length; i++) {
            payload += "--" + this.name + "\n";
            payload += "Content-Type: application/http\n";
            payload += "Content-Transfer-Encoding:binary\n";
            const request = this.requests[i];
            request.contentId = request.contentId || String(contentId++);
            payload += request.stringify() + "\n";
            if (i === this.requests.length - 1) {
                payload += "--" + this.name + "--\n\n";
            }
        }
        return payload;
    }
}
