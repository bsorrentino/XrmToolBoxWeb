"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRenderAfterLogin = exports.PCA = void 0;
var msal_browser_1 = require("@azure/msal-browser");
var msal_react_1 = require("@azure/msal-react");
var Button_1 = require("@fluentui/react/lib/Button");
var Stack_1 = require("@fluentui/react/lib/Stack");
var Text_1 = require("@fluentui/react/lib/Text");
var react_1 = __importDefault(require("react"));
var configuration = {
    auth: {
        clientId: 'c43d3729-2e9c-4254-bd68-fbbe4a45301b',
        redirectUri: 'http://localhost:1234',
    },
};
exports.PCA = new msal_browser_1.PublicClientApplication(configuration);
var useRenderAfterLogin = function () {
    var _a;
    var msalContext = msal_react_1.useMsal();
    var account = msal_react_1.useAccount((_a = msalContext.accounts[0]) !== null && _a !== void 0 ? _a : {});
    return __assign({ renderAfterLogin: function (render) {
            if (msalContext.accounts.length > 0) {
                return render();
            }
            else if (msalContext.inProgress === "login") {
                return react_1.default.createElement("span", null, "Login is currently in progress!");
            }
            else {
                return (react_1.default.createElement(Stack_1.Stack, { horizontal: true },
                    react_1.default.createElement(Text_1.Text, null, "There are currently no users signed in!"),
                    react_1.default.createElement(Button_1.PrimaryButton, { text: "Login", onClick: function () { return msalContext.instance.loginPopup(); } })));
            }
        }, account: account }, msalContext);
};
exports.useRenderAfterLogin = useRenderAfterLogin;
