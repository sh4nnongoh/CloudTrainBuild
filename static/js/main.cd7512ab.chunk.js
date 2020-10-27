(this["webpackJsonptest-ts-1"]=this["webpackJsonptest-ts-1"]||[]).push([[0],{157:function(e,t,a){e.exports=a(214)},163:function(e,t,a){},200:function(e,t,a){},203:function(e,t,a){var n={"./1.json":[216,4]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,3)}))}r.keys=function(){return Object.keys(n)},r.id=203,e.exports=r},204:function(e,t,a){var n={"./1.png":[217,3]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id=204,e.exports=r},206:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);a(158);var n,r=a(1),l=a.n(r),c=a(31),o=a.n(c),i=(a(163),a(43)),s=a(16),u=a(9),m=a(249),d=a(142),E=a(246),b=a(251),p=a(68),f=a(98),g=a.n(f),h={Timer:{duration:20,unit:"seconds"},Auth:{region:"ap-southeast-1",userPoolId:"ap-southeast-1_hsR6uwojS",userPoolWebClientId:"33au4lnne25vamdka4q0s1g198",mandatorySignIn:!0},API:{endpoints:[{name:"CloudTrain",endpoint:"https://ymfzc74lkl.execute-api.ap-southeast-1.amazonaws.com/staging"}]}},O=a(137);!function(e){e.Get="get",e.Post="post"}(n||(n={}));var v=function(e,t,a,n){return p.a.currentSession().then((function(r){return O.a[e](t,a,{headers:{Authorization:"Bearer ".concat(r.getIdToken().getJwtToken())},body:n})}))},j={Method:n,InvokeAPI:v,TearDownEnvironment:function(){return v(n.Post,"CloudTrain","/v1/tear-down-environment")},UpdateParticipantResult:function(){return v(n.Post,"CloudTrain","/v1/update-participant-result")},GetParticipantResult:function(){return v(n.Get,"CloudTrain","/v1/participant-result")},GetAccountAvailability:function(){return v(n.Get,"CloudTrain","/v1/account-availability")},AssignParticipantToAccount:function(){return v(n.Post,"CloudTrain","/v1/assign-participant-to-account")},AssignGroupToParticipant:function(){return v(n.Post,"CloudTrain","/v1/assign-group-to-participant")}},w=(a(200),{hours:-1,minutes:-1,seconds:-1}),S=function(e){var t=e.setView,a=e.userDetails,n=e.setUserDetails,c=e.createDate,o=Object(r.useState)(Object(s.a)({},w)),i=Object(u.a)(o,2),m=i[0],d=i[1];Object(r.useEffect)((function(){var e=setTimeout((function(){console.log(m),d(function(){var e=g()(c).add(h.Timer.duration,h.Timer.unit),t=g.a.duration(e.diff(g.a.now())).asSeconds(),a=Object(s.a)({},w);return t>0&&(a={hours:Math.floor(t/3600%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}),a}()),0===m.hours&&0===m.minutes&&0===m.seconds&&(clearTimeout(e),j.TearDownEnvironment().then((function(){n(Object(s.a)(Object(s.a)({},a),{},{currentState:"terminating"})),t("EndLab")})))}),1e3);return function(){return clearTimeout(e)}}));var E=function(e,t){for(var a="".concat(e);a.length<t;)a="0".concat(a);return a};return l.a.createElement(l.a.Fragment,null,-1!==m.hours&&l.a.createElement("span",{className:"timer","data-testid":"timer"},E(m.hours,2)," : ",E(m.minutes,2)," : ",E(m.seconds,2)))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Your Lab has ended."),l.a.createElement("div",{className:"text-blob"},"Please check back later to redo your lab."))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Congratulations!"),l.a.createElement("div",{className:"text-blob"},"You have completed the Cloud Training Lab."))},P=a(109),I=a(244),N=a(245),y=a(247),T=function(e){var t=e.setView,a=e.name,n=e.description,c=e.steps,o=e.accountId,i=e.imgPath,s=e.endpoint,m=e.endpointPath,b=Object(r.useState)([]),p=Object(u.a)(b,2),f=p[0],g=p[1],h=Object(r.useState)([]),O=Object(u.a)(h,2),v=O[0],w=O[1],S=Object(r.useState)(!1),k=Object(u.a)(S,2),C=k[0],T=k[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,a),l.a.createElement("div",{className:"text-blob"},n),l.a.createElement(I.a,{src:i,alt:"Architecture",fluid:!0}),l.a.createElement("br",null),l.a.createElement(N.a,{className:"info-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"S/N"),l.a.createElement("td",null,"Step"),l.a.createElement("td",null,"Details"))),l.a.createElement("tbody",null,c.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:e.name},l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:e.details.length+1},t+1),l.a.createElement("td",{rowSpan:e.details.length+1},e.name)),e.details.map((function(e){return l.a.createElement("tr",{key:e},l.a.createElement("td",null,e))})))})))),l.a.createElement("br",null),l.a.createElement(d.a,{onClick:function(){return T(!0),j.InvokeAPI(j.Method.Post,s,m,{accountId:o}).then((function(e){console.log(e),g(e.valid),w(e.invalid),T(!1)})).catch((function(e){console.log("ERROR: ".concat(e))}))},disabled:C},C&&l.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Validate"),l.a.createElement(d.a,{onClick:function(){return t("Home")},disabled:0===f.length||v.length>0},"Next"),Object(P.a)(v).reverse().map((function(e){return l.a.createElement(y.a,{key:e,variant:"warning"},e)})),Object(P.a)(f).reverse().map((function(e){return l.a.createElement(y.a,{key:e,variant:"success"},e)})),l.a.createElement("br",null),l.a.createElement("br",null))},D=function(){return l.a.createElement(E.a,{animation:"grow"})},U=function(e){var t=e.setView,n=e.accountId,c=e.progress,o=Object(r.useState)({name:"",description:"",steps:[],imgPath:"",endpoint:"",endpointPath:""}),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(r.useState)(!0),E=Object(u.a)(d,2),b=E[0],p=E[1];return Object(r.useEffect)((function(){switch(c){case 0:Promise.all([a(203)("./".concat(c+1,".json")),a(204)("./".concat(c+1,".png"))]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];m({name:a.name,description:a.description,steps:a.steps,imgPath:n.default,endpoint:a.endpoint,endpointPath:a.endpointPath}),p(!1)}));break;default:Promise.all([j.TearDownEnvironment(),j.UpdateParticipantResult()]).then((function(){return t("Finish")}))}}),[c,t]),l.a.createElement(l.a.Fragment,null,b&&l.a.createElement(D,null),!b&&l.a.createElement(T,{name:s.name,description:s.description,steps:s.steps,setView:t,accountId:n,imgPath:s.imgPath,endpoint:s.endpoint,endpointPath:s.endpointPath}))},L=a(248),A=function(e){var t=e.setView,a=Object(r.useState)(!0),n=Object(u.a)(a,2),c=n[0],o=n[1],i=Object(r.useState)(!0),s=Object(u.a)(i,2),m=s[0],b=s[1],p=Object(r.useState)({url:"",username:"",password:""}),f=Object(u.a)(p,2),g=f[0],h=f[1],O=Object(r.useState)(!1),v=Object(u.a)(O,2),w=v[0],S=v[1];Object(r.useEffect)((function(){j.AssignParticipantToAccount().then((function(e){console.log(e),h({url:e.credential.url,username:e.credential.username,password:e.credential.password}),o(!1)})).catch((function(e){console.log("ERROR: ".concat(e))}))}),[]);return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(D,null),!c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Pre-Lab Notice"),l.a.createElement("div",{className:"text-blob"},"Below are your lab credentials. Do login to the lab account and change your password before proceeding."),l.a.createElement(N.a,{borderless:!0,className:"info-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Lab URL:"),l.a.createElement("td",null,l.a.createElement("a",{href:g.url,className:"link",target:"_blank",rel:"noopener noreferrer"},g.url))),l.a.createElement("tr",null,l.a.createElement("td",null,"Username:"),l.a.createElement("td",null,g.username)),l.a.createElement("tr",null,l.a.createElement("td",null,"Password:"),l.a.createElement("td",null,g.password)))),l.a.createElement("div",{className:"declaration"},l.a.createElement(L.a.Checkbox,{"data-testid":"checkbox",onClick:function(){return b(!m)},"aria-label":"Checkbox for acknowledging the T&Cs"}),l.a.createElement("div",{className:"text"},"I acknowledge that this is the only time I can view these credentials, and that I have already changed the default password assigned to me.")),l.a.createElement(d.a,{onClick:function(){b(!0),S(!0),j.AssignGroupToParticipant().then((function(){return t("Home")}))},disabled:m},w&&l.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Continue")))},x=function(e){var t=e.setView,a=e.userDetails,n=e.setUserDetails,c=Object(r.useState)(0),o=Object(u.a)(c,2),i=o[0],m=o[1],E=Object(r.useState)(!0),b=Object(u.a)(E,2),p=b[0],f=b[1],g=Object(r.useState)(!0),O=Object(u.a)(g,2),v=O[0],w=O[1];return Object(r.useEffect)((function(){j.GetParticipantResult().then((function(e){var a;return console.log(e),e.Completed?t("Finish"):a=j.GetAccountAvailability(),a})).then((function(e){if(console.log(e),e)switch(n(Object(s.a)(Object(s.a)({},a),{},{accountId:e.AccountId,currentState:e.CurrentState,createDate:e.CreateDate,progress:e.Progress})),e.CurrentState){case"active":t("Scenario");break;case"terminating":t("EndLab");break;default:m(e.Count),w(!1)}})).catch((function(e){console.log("ERROR: ".concat(e))}))}),[]),l.a.createElement(l.a.Fragment,null,v&&l.a.createElement(D,null),!v&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Welcome to Cloud Train!"),l.a.createElement("div",{className:"text-blob"},"There are currently"," ",i," ","account(s) available."),i>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"declaration"},l.a.createElement(L.a.Checkbox,{"data-testid":"checkbox",onClick:function(){return f(!p)},"aria-label":"Checkbox for acknowledging the T&Cs"}),l.a.createElement("div",{className:"text"},"I acknowledge that once the lab has started, I only have"," ",h.Timer.duration," ",h.Timer.unit," ","to complete it before my access to the lab is revoked. If I fail to complete it within the time frame, I will have to rejoin the queue and start over.")),l.a.createElement(d.a,{disabled:p,onClick:function(){return t("PreLab")}},"Start Lab")),0===i&&l.a.createElement("div",null,"Please come back later.")))},G=a(250),F=function(e){var t=e.setView,a=e.userDetails,n=e.setUserDetails,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],m=o[1],E=Object(r.useState)(""),b=Object(u.a)(E,2),f=b[0],g=b[1],h=Object(r.useState)(""),O=Object(u.a)(h,2),v=O[0],j=O[1],w=Object(r.useState)(""),S=Object(u.a)(w,2),k=S[0],C=S[1],P=!i||!f||!v||f!==v;return l.a.createElement(G.a,{className:"form"},l.a.createElement("h3",null,"Sign Up"),l.a.createElement(G.a.Group,null,l.a.createElement("span",{className:"info-link"},"Already have an account?"," "),l.a.createElement(d.a,{onClick:function(){return t("SignIn")},className:"link"},"Sign In")),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,null,"Email address"),l.a.createElement(G.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return m(e.target.value)}})),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,null,"Password"),l.a.createElement(G.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}})),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,null,"Re-enter Password"),l.a.createElement(G.a.Control,{type:"password",placeholder:"Re-enter Password",onChange:function(e){return j(e.target.value)}})),l.a.createElement(d.a,{disabled:P,onClick:function(){p.a.signUp({username:i,password:f,attributes:{email:i}}).then((function(e){console.log(e),t("ConfirmSignUp"),n(Object(s.a)(Object(s.a)({},a),{},{email:i}))})).catch((function(e){console.log("error signing up:",e),C(e.message)}))}},"Sign Up"),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{className:"error"},k)))},R=function(e){var t=e.setView,a=e.userDetails,n=e.setUserDetails,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],m=o[1],b=Object(r.useState)(""),f=Object(u.a)(b,2),g=f[0],h=f[1],O=Object(r.useState)(""),v=Object(u.a)(O,2),j=v[0],w=v[1],S=Object(r.useState)(!1),k=Object(u.a)(S,2),C=k[0],P=k[1],I=!i||!g||C;return l.a.createElement(G.a,null,l.a.createElement("h3",null,"Sign In"),l.a.createElement(G.a.Group,null,l.a.createElement("span",{className:"info-link"},"Do not have an account?"," "),l.a.createElement(d.a,{onClick:function(){return t("SignUp")},className:"link"},"Register")),l.a.createElement(G.a.Group,{className:"form-group"},l.a.createElement(G.a.Label,null,"Email address"),l.a.createElement(G.a.Control,{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){return m(e.target.value)}})),l.a.createElement(G.a.Group,{className:"form-group"},l.a.createElement(G.a.Label,null,"Password"),l.a.createElement(G.a.Control,{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){return h(e.target.value)}})),l.a.createElement(d.a,{onClick:function(){return P(!0),p.a.signIn({username:i,password:g}).then((function(e){console.log(e),n(Object(s.a)(Object(s.a)({},a),{},{email:i,signIn:!0})),t("Home")})).catch((function(e){console.log("error signing up:",e),"UserNotConfirmedException"===e.code?(n(Object(s.a)(Object(s.a)({},a),{},{email:i})),t("ConfirmSignUp")):(w(e.message),P(!1))}))},disabled:I},C&&l.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Submit"),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{className:"error"},j)))},V=function(e){var t=e.email,a=e.setView,n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)(""),m=Object(u.a)(s,2),E=m[0],b=m[1],f=!o;return l.a.createElement(G.a,{className:"form"},l.a.createElement("h3",null,"Confirm Sign Up"),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,null,"Code"),l.a.createElement(G.a.Control,{type:"text",placeholder:"Enter code",onChange:function(e){return i(e.target.value)}})),l.a.createElement(d.a,{disabled:f,onClick:function(){p.a.confirmSignUp(t,o).then((function(e){console.log(e),a("SignIn")})).catch((function(e){console.log("error signing up:",e),b(e.message)}))}},"Sign Up"),l.a.createElement(G.a.Group,null,l.a.createElement(G.a.Label,{className:"error"},E)))},z={accountId:"",email:"",createDate:"",currentState:"",signIn:!1,progress:0},M=(a(206),function(){var e=Object(r.useState)("SignIn"),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(z),o=Object(u.a)(c,2),i=o[0],f=o[1],g=Object(r.useState)(!1),h=Object(u.a)(g,2),O=h[0],v=h[1],w=Object(r.useState)(!1),P=Object(u.a)(w,2),I=P[0],N=P[1];Object(r.useEffect)((function(){p.a.currentSession().then((function(e){console.log(e),f(Object(s.a)(Object(s.a)({},i),{},{email:e.getAccessToken().payload.username,signIn:!0})),n("Home")})).catch((function(e){console.log(e)}))}),[]);var y=function(){v(!1)},T="terminating"===i.currentState?"Ending Lab":"End Lab";return l.a.createElement("div",{className:"app"},l.a.createElement(m.a,{show:O,onHide:y},l.a.createElement(m.a.Header,{closeButton:!0},l.a.createElement(m.a.Title,null,"Are you sure?")),l.a.createElement(m.a.Body,null,"This action will revoke your access to the lab, and tear down the lab environment. It will take a while before you can redo the lab."),l.a.createElement(m.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:y},"Close"),l.a.createElement(d.a,{variant:"danger",onClick:function(){N(!0),j.TearDownEnvironment().then((function(){f(Object(s.a)(Object(s.a)({},i),{},{currentState:"terminating"})),y(),n("EndLab")}))},disabled:I},I&&l.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Confirm"))),l.a.createElement("div",{className:"app-header"},i.accountId&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"left-header"},l.a.createElement(d.a,{onClick:function(){return v(!0)},variant:"danger",disabled:"terminating"===i.currentState},T),"terminating"!==i.currentState&&l.a.createElement(S,{setView:n,userDetails:i,setUserDetails:f,createDate:i.createDate})),l.a.createElement("span",{className:"info-link"},"Lab URL :"," "),l.a.createElement(d.a,{variant:"link",className:"link",href:"https://".concat(i.accountId,".signin.aws.amazon.com/console"),target:"_blank"},"https://",i.accountId,".signin.aws.amazon.com/console")),i.signIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"info-link"},"Account :"," "),l.a.createElement(b.a,null,l.a.createElement(b.a.Toggle,{className:"link"},i.email),l.a.createElement(b.a.Menu,null,l.a.createElement(b.a.Item,{onClick:function(){p.a.signOut().then((function(){f(z),n("SignIn")}))}},"Sign Out"))))),l.a.createElement("div",{className:"app-body"},"Home"===a&&l.a.createElement(x,{setView:n,userDetails:i,setUserDetails:f}),"SignIn"===a&&l.a.createElement(R,{setView:n,userDetails:i,setUserDetails:f}),"SignUp"===a&&l.a.createElement(F,{setView:n,userDetails:i,setUserDetails:f}),"ConfirmSignUp"===a&&l.a.createElement(V,{setView:n,email:i.email}),"PreLab"===a&&l.a.createElement(A,{setView:n}),"Scenario"===a&&l.a.createElement(U,{setView:n,accountId:i.accountId,progress:i.progress}),"Finish"===a&&l.a.createElement(C,null),"EndLab"===a&&l.a.createElement(k,null)))});i.default.configure(h),o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.cd7512ab.chunk.js.map