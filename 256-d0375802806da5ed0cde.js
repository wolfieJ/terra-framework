(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1033:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.SlidePanelPositions=t.default=void 0;var l=a(n(17)),o=a(n(22)),i=a(n(24)),r=a(n(25)),u=a(n(29)),s=a(n(26)),d=a(n(27)),c=a(n(28)),f=a(n(0)),p=a(n(2)),m=a(n(5)),_=a(n(1043));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=m.default.bind(_.default),P={START:"start",END:"end"};t.SlidePanelPositions=P;var b={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},g={panelBehavior:"overlay",panelPosition:P.END,panelSize:"small"},y=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,c.default)(t);if(h()){var a=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function a(e){var t;return(0,i.default)(this,a),(t=n.call(this,e)).setPanelNode=t.setPanelNode.bind((0,u.default)(t)),t.mainNode=f.default.createRef(),t}return(0,r.default)(a,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,a=e.mainContent,i=e.panelContent,r=e.panelBehavior,u=e.panelPosition,s=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,m=(0,o.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),_=v(["slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},m.className]),h=f.default.createElement("div",{className:v(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},i),b=f.default.createElement("div",{className:v("main"),key:"main",tabIndex:"-1","aria-label":n,ref:this.mainNode},a),g=u===P.START?f.default.createElement(f.default.Fragment,null,h,b):f.default.createElement(f.default.Fragment,null,b,h);return f.default.createElement("div",(0,l.default)({},m,{className:_,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":u,"data-slide-panel-panel-size":s}),g)}}]),a}(f.default.Component);y.propTypes=b,y.defaultProps=g;var S=y;t.default=S},1043:function(e,t,n){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1111:function(e,t,n){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},2321:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(24)),o=a(n(25)),i=a(n(29)),r=a(n(26)),u=a(n(27)),s=a(n(28)),d=a(n(0)),c=a(n(5)),f=a(n(1033)),p=a(n(1111));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var _=c.default.bind(p.default),h=function(e){(0,r.default)(a,e);var t,n=(t=a,function(){var e,n=(0,s.default)(t);if(m()){var a=(0,s.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function a(e){var t;return(0,l.default)(this,a),(t=n.call(this,e)).state={panelIsOpen:!1},t.handlePanelToggle=t.handlePanelToggle.bind((0,i.default)(t)),t}return(0,o.default)(a,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return d.default.createElement("div",{className:_("content-wrapper-toggle")},d.default.createElement(f.default,{id:"test-slide",mainContent:d.default.createElement("div",{className:_("main-content")},d.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:d.default.createElement("div",{id:"panel-content",className:_("panel-content")},d.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),a}(d.default.Component);t.default=h}}]);
//# sourceMappingURL=256-d0375802806da5ed0cde.js.map