function e(e){return e&&e.__esModule?e.default:e}var t=e(require("xrm-webapi-client")),n=require("@fluentui/react/lib/DetailsList"),r=n.DetailsList,l=n.DetailsListLayoutMode,i=n.SelectionMode,a=require("@fluentui/react/lib/List").List,o=require("@fluentui/react/lib/Text").Text,c=require("@fluentui/react/lib/Stack").Stack,u=require("@fluentui/font-icons-mdl2").initializeIcons,s=require("xrmtoolboxweb-core"),m=s.PCA,d=s.scopes,p=s.prepareWebApiRequest,b=s.useRenderAfterLogin,f=require("@azure/msal-react"),E=f.MsalProvider,L=f.useAccount,q=e(require("react-dom")),v=require("react"),h=e(v),x=v.useEffect,y=v.useState;let S;!function(e){class n extends t.Requests.Request{method="GET";name="GlobalOptionSetDefinitions";constructor(){super()}buildUrl(){return super.buildUrl()}}e.Invoke=()=>{const e=new n;return t.Execute(e)}}(S||(S={})),u();const g={value:[]},k=[{key:"label",name:"Label",minWidth:100,isResizable:!0,onRender:e=>h.createElement(o,null,e?.Label?.LocalizedLabels?.[0]?.Label)},{key:"value",name:"Value",fieldName:"Value",minWidth:100,isResizable:!1,data:"number"}],R=(e,t)=>{const n=-e.OptionSetType.localeCompare(t.OptionSetType);return 0==n?e.Name.localeCompare(t.Name):n};function A(){const{instance:e,accounts:t,renderAfterLogin:n}=b(),u=L(t[0]??{}),[s,m]=y(g);x((()=>{u&&e.acquireTokenSilent({scopes:d,account:u}).then(p).then((()=>S.Invoke())).then((e=>m({...e,value:e.value.sort(R)}))).catch((e=>console.error(e)))}),[u?.localAccountId,e]);const f=(e,t)=>h.createElement(c,{styles:{root:{maxWidth:500}}},h.createElement(c,{horizontal:!0,verticalAlign:"center",tokens:{childrenGap:20,padding:5}},h.createElement(o,{variant:"xLargePlus"},e.Name),h.createElement(o,{variant:"xLarge"},"(",e.OptionSetType,")")),e?.Options&&e.Options.length>0&&h.createElement(r,{compact:!0,items:e?.Options??[],columns:k,layoutMode:l.justified,selectionMode:i.none,isHeaderVisible:!0}));return n((()=>h.createElement("div",null,h.createElement(a,{items:s.value,onRenderCell:f}))))}const O=()=>h.createElement(E,{instance:m},h.createElement(A,null));q.render(h.createElement(O,null),document.getElementById("root"));