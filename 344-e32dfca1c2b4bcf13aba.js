(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1026:function(t,e,o){t.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},1036:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(0)),l=n(o(5)),r=n(o(166)),s=n(o(1026)),h=l.default.bind(s.default),c=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:h("hookshot-content-wrapper")},"Hookshot"))};e.default=c},1039:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(17)),l=n(o(22)),r=n(o(24)),s=n(o(25)),h=n(o(29)),c=n(o(26)),u=n(o(27)),d=n(o(28)),i=n(o(0)),m=n(o(5)),p=n(o(2)),f=n(o(166)),_=n(o(1036)),k=n(o(1026));function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=m.default.bind(k.default),C={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},T=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},E=function(t){(0,c.default)(n,t);var e,o=(e=n,function(){var t,o=(0,d.default)(e);if(g()){var n=(0,d.default)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,u.default)(this,t)});function n(t){var e;return(0,r.default)(this,n),(e=o.call(this,t)).triggerHookshot=e.triggerHookshot.bind((0,h.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,h.default)(e)),e.state={open:t.isOpen},e}return(0,s.default)(n,[{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,s=t.attachmentMargin,h=t.includeSvgs,c=t.type,u=(0,l.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),d=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:v(["wrapper","hookshot-wrapper-".concat(c)])},i.default.createElement(f.default,(0,a.default)({id:o,contentAttachment:T(n),targetAttachment:T(r),attachmentMargin:s,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},u),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:v(["content","hookshot-".concat(c)]),onClick:this.triggerHookshot},"Trigger Hookshot"),h&&d)}}]),n}(i.default.Component);E.propTypes=C,E.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var b=E;e.default=b},2225:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(24)),l=n(o(25)),r=n(o(29)),s=n(o(26)),h=n(o(27)),c=n(o(28)),u=n(o(0)),d=n(o(1039));function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){(0,s.default)(n,t);var e,o=(e=n,function(){var t,o=(0,c.default)(e);if(i()){var n=(0,c.default)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,h.default)(this,t)});function n(t){var e;return(0,a.default)(this,n),(e=o.call(this,t)).handleTargetAttachment=e.handleTargetAttachment.bind((0,r.default)(e)),e.state={attachment:"top start"},e}return(0,l.default)(n,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(d.default,{id:"attachment",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!1},contentAttachment:"bottom end",type:"primary",targetAttachment:this.state.attachment,isOpen:!0}),u.default.createElement("p",null," Content attachement: bottom end "),u.default.createElement("p",null," Choose the target attachement: "),u.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),u.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),u.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),u.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),u.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),u.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),u.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),u.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),u.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),n}(u.default.Component);e.default=m}}]);
//# sourceMappingURL=344-e32dfca1c2b4bcf13aba.js.map