(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1026:function(t,o,e){t.exports={wrapper:"HookshotTestDocCommon-module__wrapper___3BMgv",content:"HookshotTestDocCommon-module__content___fflPT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___1aFCO","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___3RlRF","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___327XX","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___3H5Td","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___3gyZo","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___3RWca","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___2Esx9","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___229Cs","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___25o4P","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___2pzs9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___35g7S","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___2Esnl","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___3qD94","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___21Zu3","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1pxMJ","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___2f8RX","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___1-MFD","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___owTPo","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___2LMwV","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___1hmwI"}},1036:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(0)),s=n(e(5)),r=n(e(166)),l=n(e(1026)),i=s.default.bind(l.default),u=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:i("hookshot-content-wrapper")},"Hookshot"))};o.default=u},1039:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(17)),s=n(e(22)),r=n(e(24)),l=n(e(25)),i=n(e(29)),u=n(e(26)),h=n(e(27)),d=n(e(28)),c=n(e(0)),p=n(e(5)),m=n(e(2)),f=n(e(166)),_=n(e(1036)),k=n(e(1026));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=p.default.bind(k.default),C={hookshotContentProps:m.default.any,id:m.default.string,isOpen:m.default.bool,includeSvgs:m.default.bool,contentAttachment:m.default.string,targetAttachment:m.default.string,type:m.default.string,attachmentMargin:m.default.number},w=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},y=function(t){(0,u.default)(n,t);var o,e=(o=n,function(){var t,e=(0,d.default)(o);if(v()){var n=(0,d.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,h.default)(this,t)});function n(t){var o;return(0,r.default)(this,n),(o=e.call(this,t)).triggerHookshot=o.triggerHookshot.bind((0,i.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,i.default)(o)),o.state={open:t.isOpen},o}return(0,l.default)(n,[{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this.props,o=t.hookshotContentProps,e=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,l=t.attachmentMargin,i=t.includeSvgs,u=t.type,h=(0,s.default)(t,["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"]),d=c.default.createElement("div",null,c.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),c.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),c.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return c.default.createElement("div",{id:"".concat(e,"-bounds"),className:g(["wrapper","hookshot-wrapper-".concat(u)])},c.default.createElement(f.default,(0,a.default)({id:e,contentAttachment:w(n),targetAttachment:w(r),attachmentMargin:l,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(e))},boundingRef:function(){return document.getElementById("".concat(e,"-bounds"))}},h),c.default.createElement(_.default,{id:"".concat(e,"-content"),onEsc:o.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:o.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:o.closeOnResize?this.handleRequestClose:void 0})),c.default.createElement("button",{type:"button",id:"trigger-".concat(e),className:g(["content","hookshot-".concat(u)]),onClick:this.triggerHookshot},"Trigger Hookshot"),i&&d)}}]),n}(c.default.Component);y.propTypes=C,y.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var b=y;o.default=b},2220:function(t,o,e){"use strict";var n=e(6);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(24)),s=n(e(25)),r=n(e(29)),l=n(e(26)),i=n(e(27)),u=n(e(28)),h=n(e(0)),d=n(e(1039));function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var p=function(t){(0,l.default)(n,t);var o,e=(o=n,function(){var t,e=(0,u.default)(o);if(c()){var n=(0,u.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,i.default)(this,t)});function n(t){var o;return(0,a.default)(this,n),(o=e.call(this,t)).state={position:"primary"},o.handlePositionClick=o.handlePositionClick.bind((0,r.default)(o)),o}return(0,s.default)(n,[{key:"handlePositionClick",value:function(t){this.setState({position:t.target.value})}},{key:"render",value:function(){var t="primary";return"pushed"===this.state.position&&(t="push-pushed"),h.default.createElement("div",null,h.default.createElement(d.default,{attachmentBehavior:"push",id:"attachment-behavior-push",isOpen:!1,type:t}),h.default.createElement("p",null,"Choose the positioning behavior"),h.default.createElement("p",null,"Primary position is on the middle right"),h.default.createElement("button",{type:"button",id:"position-primary",value:"primary",onClick:this.handlePositionClick},"Primary"),h.default.createElement("button",{type:"button",id:"position-pushed",value:"pushed",onClick:this.handlePositionClick},"Pushed by bounds"))}}]),n}(h.default.Component);o.default=p}}]);
//# sourceMappingURL=339-12c786694ef027277fbf.js.map