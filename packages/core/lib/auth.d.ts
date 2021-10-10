/// <reference types="react" />
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { IMsalContext } from "@azure/msal-react";
export declare const PCA: PublicClientApplication;
declare type RenderAfterLogin = IMsalContext & {
    renderAfterLogin: (render: () => JSX.Element) => JSX.Element;
    account: AccountInfo | null;
};
export declare const useRenderAfterLogin: () => RenderAfterLogin;
export {};
