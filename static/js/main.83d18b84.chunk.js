(this["webpackJsonpassignment-2"]=this["webpackJsonpassignment-2"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"Stopwatch":{"startTime":0,"stopTime":10,"counter":1},"Countdown":{"startTime":20,"stopTime":10,"counter":2},"XY":{"startTime":2,"stopTime":10,"counter":3},"Tabata":{"startTime":0,"stopTime":10,"counter":4}}')},33:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i,a,o,s,c,r,l=n(1),u=n.n(l),d=n(23),p=n.n(d),b=(n(33),n(8)),j=n(4),f=(n(24),function(e,t){return t.find((function(t){return t.title===e})).C}),h=function(e){var t="0".concat(e%60).slice(-2),n="".concat(Math.floor(e/60)),i="0".concat(n%60).slice(-2),a="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(a,":").concat(i,":").concat(t)},m="Stopwatch",O="Countdown",g="Tabata",v="Work",x="Rest",y=n(0),T=u.a.createContext({}),S=function(e){var t=e.children,n=Object(l.useState)(m),i=Object(j.a)(n,2),a=i[0],o=i[1],s=Object(l.useState)(0),c=Object(j.a)(s,2),r=c[0],u=c[1],d=Object(l.useState)(0),p=Object(j.a)(d,2),b=p[0],f=p[1],h=Object(l.useState)(1),O=Object(j.a)(h,2),g=O[0],v=O[1],x=Object(l.useState)(0),S=Object(j.a)(x,2),C=S[0],N=S[1],D=function(){return{startTime:r,stopTime:b,totalRounds:g,restStartTime:C}};return Object(y.jsx)(T.Provider,{value:{selectedTimer:a,setSelectedTimer:o,startTime:r,setStartTime:u,stopTime:b,setStopTime:f,totalRounds:g,setTotalRounds:v,restStartTime:C,setRestStartTime:N,getSettings:D,setSettings:function(e){var t,n,i,a;return u(null!==(t=e.startTime)&&void 0!==t?t:r),f(null!==(n=e.stopTime)&&void 0!==n?n:0),v(null!==(i=e.totalRounds)&&void 0!==i?i:1),N(null!==(a=e.restStartTime)&&void 0!==a?a:r),e},dispatchSettings:function(e){var t=D();return e.forEach((function(e){var n=document.querySelector("#".concat(e.id));n&&(n.value=t[e.id])})),t}},children:t})},C=u.a.createContext({}),N=function(e){var t=e.children,n=Object(l.useContext)(T),i=Object.assign({},n),a=i.selectedTimer,o=i.startTime,s=i.stopTime,c=i.restStartTime,r=i.totalRounds,u=Object(l.useState)(""),d=Object(j.a)(u,2),p=d[0],f=d[1],S=Object(l.useState)(!1),N=Object(j.a)(S,2),D=N[0],k=N[1],V=Object(l.useState)(o),I=Object(j.a)(V,2),R=I[0],_=I[1],w=Object(l.useState)(1),B=Object(j.a)(w,2),M=B[0],A=B[1],E=Object(l.useState)(v),F=Object(j.a)(E,2),L=F[0],q=F[1],P=Object(l.useState)(!0),Y=Object(j.a)(P,2),H=Y[0],J=Y[1],W=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];_(L===v?o:c),console.log(L,R),e&&(q(v),A(1))},X=function(){k(!D)};return Object(y.jsx)(C.Provider,{value:Object(b.a)({currentRound:M,setCurrentRound:A,mode:L,setMode:q,statusMessage:p,setStatusMessage:f,timerCounting:D,toggleCounting:X,counter:R,setCounter:_,isFrontSide:H,toggleSide:function(){J(!H)},isOver:function(){return o>=s?D&&R<=s&&M===r:D&&R>=s&&M===r},startTimer:function(){return setInterval((function(){!function(){switch(a){case m:_((function(e){return e+1}));break;case g:console.log(R),_((function(e){return e-1})),0===R&&L===x?(W(!1),q(v),A((function(e){return e+1}))):0===R&&L===v&&(W(!1),q(x));break;default:_((function(e){return e-1})),0===R&&(W(!1),A((function(e){return e+1})))}}()}),1e3)},pauseTimer:function(e){clearInterval(e)},resetTimer:W,completeTimer:function(e){clearInterval(e),X(),_(s),A(r),q(v)},messenger:function(){var e=Math.abs(o-s),t=Math.abs(R-e),n=Math.abs((t-e)/e);return L!==x||R!==o+1&&R!==o-1?L!==v||R!==o+1&&R!==o-1?R===s&&M===r?"You made it! Again?":D||R===o||R===s?e>=10&&n<.2?"Almost There!":e>=10&&n<.4?"Keep moving...You can do it":"XY"===a?"Round ".concat(M," of ").concat(r):[m,O].includes(a)?"Counting to ".concat(h(s)):a===g?"".concat(L," -  Round ").concat(M," of ").concat(r):void 0:"Let's take a breath...":"Let's move that body!":"Breathe..."}},i),children:t})},D=n(18),k=n(2),V=(n(35),function(e){var t=Object.assign({},e).children;return Object(y.jsx)("div",{className:"container",children:t})}),I=n(9),R=n(10),_=R.a.div(i||(i=Object(I.a)(["\n  width: 90%;\n  margin: 2rem;\n  min-width: 35rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  margin-bottom: 10rem;\n\n"]))),w=R.a.div(a||(a=Object(I.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 3rem;\n  box-shadow: 0.8rem 0.8rem 1.4rem var(--bgLight-2), -0.2rem -0.2rem 1.8rem var(--tint);\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  padding: 2rem;\n"]))),B=R.a.div(o||(o=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n"]))),M=R.a.div(s||(s=Object(I.a)(["\n  margin: 4rem 0;\n"]))),A=R.a.table(c||(c=Object(I.a)([""]))),E=function(e){var t=e.title,n=e.component,i=e.propDocs;return Object(y.jsxs)(_,{children:[Object(y.jsx)(B,{children:t}),Object(y.jsx)(M,{children:n}),Object(y.jsx)(w,{children:Object(y.jsx)(A,{children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Prop"}),Object(y.jsx)("th",{children:"Description"}),Object(y.jsx)("th",{children:"Type"}),Object(y.jsx)("th",{children:"Default value"})]},1),i.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.prop}),Object(y.jsx)("td",{children:e.description}),Object(y.jsx)("td",{children:e.type}),Object(y.jsx)("td",{children:Object(y.jsx)("code",{children:e.defaultValue})})]},t)}))]})})})]})},F=(n(40),function(){var e=Object(l.useContext)(C),t=e.counter,n=e.timerCounting,i=e.statusMessage,a=e.setStatusMessage,o=e.messenger;return Object(l.useEffect)((function(){a(o())}),[a,o]),Object(y.jsxs)("div",{className:"display_circular",children:[Object(y.jsxs)("div",{className:"marker",children:[i&&Object(y.jsx)("p",{className:"header",children:i}),Object(y.jsx)("p",{className:"value neonText",children:h(t)})]}),!!n&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"display_circular_back-1"}),Object(y.jsx)("div",{className:"display_circular_back-2"})]})]})}),L=n(12),q=(n(41),n(15)),P=n.n(q),Y=["id","value","isIconButton","iconName","classifiers","iconVisible","children"],H=function(e){var t=Object.assign({},e),n=t.id,i=t.value,a=void 0===i?"":i,o=t.isIconButton,s=void 0!==o&&o,c=t.iconName,r=void 0===c?"":c,l=t.classifiers,u=void 0===l?"btn_primary":l,d=t.iconVisible,p=void 0===d||d,j=t.children,f=Object(L.a)(t,Y),h=[{icon_btn:s,btn:!s}],m=[{show:p,hide:!p}];return Object(y.jsxs)("div",Object(b.a)(Object(b.a)({id:n,value:a,className:P()(h,u)},f),{},{children:[s&&Object(y.jsx)("ion-icon",{value:a,class:P()(m),name:r}),!s&&j]}))},J=(n(42),["label","placeholder"]),W=function(e){var t,n=Object.assign({},e),i=n.label,a=n.placeholder,o=Object(L.a)(n,J),s=Object(l.useState)(null!==(t=n.value)&&void 0!==t?t:""),c=Object(j.a)(s,2),r=c[0],u=c[1];return Object(y.jsx)(y.Fragment,{children:i&&Object(y.jsxs)("fieldset",{children:[Object(y.jsx)("label",{className:"settings-label",children:i}),Object(y.jsx)("input",Object(b.a)(Object(b.a)({},o),{},{value:r,placeholder:a,type:"number",onChange:function(e){u(e.target.value),n.onChange&&n.onChange(e)}}))]})})},X=(n(43),function(e){var t=e.tabItems,n=Object(l.useContext)(C),i=n.selectedTimer,a=n.setSelectedTimer,o=t.includes(i)?i:t[0],s=function(e){var t=e.target.value||o;a(t)};return Object(y.jsx)("div",{className:"btn_bar",children:Object(y.jsxs)("div",{className:"tab_control",children:[t.length<=4&&t.map((function(e,t){return Object(y.jsxs)(l.Fragment,{children:[Object(y.jsx)("input",{type:"radio",name:"radio"+(t+1),value:e,id:"tab-"+(t+1),checked:o===e,onChange:s}),Object(y.jsx)("label",{htmlFor:"tab-"+(t+1),className:"tab_control_"+(t+1),children:Object(y.jsx)("p",{children:e})})]},t)})),Object(y.jsx)("div",{className:"tab_control_color"})]})})}),z=n(16),G=(n(44),function(e){var t=Object.assign({},e),n=t.side,i=void 0===n?"front":n,a=t.children,o=[Object(z.a)({},"panel_face_".concat(i),!!i)];return Object(y.jsx)("div",{className:P()(o),children:a})}),K=(n(45),function(e){var t=Object.assign({},e),n=t.id,i=void 0===n?"":n,a=t.children;return Object(y.jsx)("div",{className:"panel",children:Object(y.jsx)("div",{className:"panel_inner",id:i,children:a})})}),Q=function(e){var t=e.settings,n=Object(l.useContext)(C),i=Object.assign({},n),a=i.resetTimer,o=i.timerCounting,s=i.toggleCounting,c=i.toggleSide,r=i.setSettings,u=i.getSettings,d=i.dispatchSettings;Object(l.useEffect)((function(){d(t)}));var p=function(){c();var e=document.querySelector("#timer_panel");e&&e.classList.toggle("is-flipped")},b=function(e){var t={},n=e.target.id,i=e.target.value;t[n]=i,r(t),console.log(u())};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(G,{side:"front",children:[Object(y.jsx)(F,{}),Object(y.jsxs)("div",{className:"btn_bar",children:[o&&Object(y.jsx)(H,{id:"pause_btn",value:"pause",classifiers:"primary",isIconButton:!0,onClick:s,iconName:"pause"}),!o&&Object(y.jsx)(H,{id:"start_btn",value:"start",classifiers:"primary",isIconButton:!0,onClick:s,iconName:"play"}),Object(y.jsx)(H,{id:"reset_btn",value:"reset",classifiers:"primary",isIconButton:!0,onClick:function(){a()},iconName:"refresh-outline"}),t&&Object(y.jsx)(H,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:p,iconName:"settings"})]})]}),Object(y.jsxs)(G,{side:"back",children:[Object(y.jsx)("h1",{children:"Settings"}),t&&Object(y.jsx)("div",{className:"settings-form",id:"inputs",children:t.map((function(e,t){return Object(y.jsx)(W,{label:e.label,placeholder:e.placeholder,value:i[e.id],id:e.id,onChange:b},t)}))}),Object(y.jsxs)("div",{className:"btn_bar",children:[Object(y.jsx)(H,{id:"back_btn",value:"back",isIconButton:!0,onClick:p,iconName:"arrow-back-outline"}),Object(y.jsx)(H,{onClick:function(){var e={};t.forEach((function(t){var n,i=null===(n=document.querySelector("#".concat(t.id)))||void 0===n?void 0:n.value;e[t.id]=i})),r(e),p()},children:"Save"})]})]})]})},U=R.a.div(r||(r=Object(I.a)(["\n  font-size: 2rem;\n"]))),Z=[{id:"startTime",value:"00:00:00"}],$=function(){var e=function(){var e=document.querySelector("#testcard");e&&e.classList.toggle("is-flipped")};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(U,{children:"Documentation"}),Object(y.jsx)(E,{title:"Generic Timer",component:Object(y.jsx)(K,{children:Object(y.jsx)(Q,{settings:Z})}),propDocs:[{prop:"settings",description:"Collection that defines the allowed settings for a timer",type:"array of objects - [{label: 'label1', value: 'value1', placeholder: 'placeholder1'}, {...}]",defaultValue:"Optional. Default: []"},{prop:"statusMessage",description:"Status message that can be used for rounds/rest",type:"string",defaultValue:"Optional. Default: None"},{prop:"startTime",description:"Starting time for the timer",type:"string",defaultValue:"Optional. Default: 00:00:00"},{prop:"onChange",description:"Event handler for capturing values input on change",type:"function",defaultValue:"Optional. Default: None"}]}),Object(y.jsx)(E,{title:"Circular Display ",component:Object(y.jsx)(F,{isStarted:!0,status:"Status Text",value:"00:10:00"}),propDocs:[{prop:"isStarted",description:"Animates the circular display",type:"bool",defaultValue:"Optional. Default: false"},{prop:"status",description:"Status message that can be used for rounds/rest",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Value to be displayed",type:"string",defaultValue:"Optional. Default: 00:00:00"}]}),Object(y.jsx)(E,{title:"Button ",component:Object(y.jsx)(H,{onClick:function(){return console.log("test")},children:"Text Button"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(y.jsx)(E,{title:"Button (with Icon configuration)",component:Object(y.jsx)(H,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:function(){return console.log("icon button")},iconName:"settings"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(y.jsx)(E,{title:"Input ",component:Object(y.jsx)(W,{label:"Test Label"}),propDocs:[{prop:"label",description:"Label of the input field",type:"String",defaultValue:"Required. Default: None"},{prop:"value",description:"Initial value passed to the input",type:"String",defaultValue:"Optional. Default: None"},{prop:"placeholder",description:"Input placeholder text",type:"String",defaultValue:"Optional. Default: None"},{prop:"onChange",description:"Event handler for capturing keyboard inputs",type:"function",defaultValue:"Optional. Default: None"}]}),Object(y.jsx)(E,{title:"Tabs ",component:Object(y.jsx)(X,{tabItems:["Tab 1","Tab 2","Tab 3","Tab 4"]}),propDocs:[{prop:"tabItems",description:"Array of tab labels. Max 4 tabs. If more, the control will not render",type:"Array of strings",defaultValue:"Optional. Default: []"},{prop:"onChange",description:"Event handler for capturing the selected tab",type:"function",defaultValue:"Optional. Default: None"}]}),Object(y.jsx)(E,{title:"Card ",component:Object(y.jsxs)(K,{id:"testcard",children:[Object(y.jsxs)(G,{side:"front",children:["front side",Object(y.jsx)(H,{onClick:e,children:"Flip"})]}),Object(y.jsxs)(G,{side:"back",children:["back side",Object(y.jsx)(H,{onClick:e,children:"Flip Again"})]})]}),propDocs:[{prop:"side",description:"Card container that flips using css. \n            Two Cards (front and back) need to be defined in order for flipping to work",type:"string",defaultValue:"Optional. Default: 'front'. Possible values: 'front' |  'back'"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes. \n            An event within a child element of the card could trigger the flipping.\n            The event handler should query the id of Panel container and apply toggle('is-flipped') to\n            the queried element",type:"node",defaultValue:"Optional. Default: None"}]}),Object(y.jsx)(E,{title:"Panel ",component:Object(y.jsx)(K,{children:"Content goes here"}),propDocs:[{prop:"id",description:"Identifier for the panel that will allow flipping the cards",type:"string",defaultValue:"Optional. Default: None"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]}),Object(y.jsx)(E,{title:"Container ",component:"Generic Empty Container",propDocs:[{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]})]})},ee=["dispatchSettings"],te=function(e){var t=Object(l.useContext)(C),n=(t.dispatchSettings,Object(L.a)(t,ee));!function(e,t){var n=t.setSettings,i=t.setCounter,a=t.mode,o=t.setCurrentRound,s=e.startTime,c=e.stopTime,r=e.totalRounds,u=e.restStartTime,d=a===v?s:u;Object(l.useEffect)((function(){n({startTime:s,stopTime:c,totalRounds:null!==r&&void 0!==r?r:1,restStartTime:null!==u&&void 0!==u?u:0}),o(1),i(d)}),[n,i,s,c,r,u,o,a,d])}(e,n),function(e){var t=e.timerCounting,n=e.startTimer,i=e.isOver,a=e.pauseTimer,o=e.completeTimer,s=Object(l.useRef)();Object(l.useEffect)((function(){return t&&!i()?s.current=n():i()?o():i()||a(s.current),function(){a(s.current)}}),[t,n,i,a,o]),s.current}(n)},ne=[{id:"startTime",label:"Start Time",placeholder:"Start the timer at this time"},{id:"stopTime",label:"Stop Time",placeholder:"Stop the timer at this time"}],ie=function(){return te({startTime:1,stopTime:3}),Object(y.jsx)(Q,{settings:ne})},ae=[{id:"startTime",label:"Start Time",placeholder:"Start the timer at this time"},{id:"stopTime",label:"Stop Time",placeholder:"Stop the timer at this time"}],oe=function(){return te({startTime:10,stopTime:0}),Object(y.jsx)(Q,{settings:ae})},se=[{id:"startTime",label:"Start Time",placeholder:"Start the timer at this time"},{id:"stopTime",label:"Stop Time",placeholder:"Stop the timer at this time"},{id:"totalRounds",label:"Rounds",placeholder:"Stops after that many rounds"}],ce=function(){return te({startTime:2,stopTime:0,totalRounds:4}),Object(y.jsx)(Q,{settings:se})},re=[{id:"startTime",label:"Work duration",placeholder:"Work for that long"},{id:"restStartTime",label:"Rest duration",placeholder:"Rest for that long"},{id:"totalRounds",label:"Rounds",placeholder:"Stops after that many rounds"}],le=function(){return te({startTime:3,restStartTime:4,totalRounds:2}),Object(y.jsx)(Q,{settings:re})},ue=function(){var e,t,n=Object(l.useContext)(T),i=n.selectedTimer,a=n.setSelectedTimer,o=[{title:m,C:Object(y.jsx)(ie,{})},{title:O,C:Object(y.jsx)(oe,{})},{title:"XY",C:Object(y.jsx)(ce,{})},{title:g,C:Object(y.jsx)(le,{})}];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(X,{tabItems:(e=o,t="title",e.map((function(e){return e[t]}))),onChange:function(e){a(e)}}),Object(y.jsx)(K,{id:"timer_panel",children:f(i,o)})]})},de=function(){return Object(y.jsxs)(D.a,{children:[Object(y.jsx)("nav",{className:"navigation",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(D.b,{to:"/",children:"Timers"})},1),Object(y.jsx)("li",{children:Object(y.jsx)(D.b,{to:"/docs",children:"Documentation"})},2)]})}),Object(y.jsx)("br",{}),Object(y.jsx)(S,{children:Object(y.jsx)(N,{children:Object(y.jsx)(V,{children:Object(y.jsxs)(k.c,{children:[Object(y.jsx)(k.a,{path:"/docs",children:Object(y.jsx)($,{})}),Object(y.jsx)(k.a,{path:"/",children:Object(y.jsx)(ue,{})})]})})})})]})};p.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(de,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.83d18b84.chunk.js.map