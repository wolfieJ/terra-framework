(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1233:function(e,t,n){e.exports={"content-wrapper":"SizePopupCommon-module__content-wrapper___2qyEy","popup-area-small":"SizePopupCommon-module__popup-area-small___3OhXN","popup-area-medium":"SizePopupCommon-module__popup-area-medium___1d41l","popup-area-invalid":"SizePopupCommon-module__popup-area-invalid___3Y2g9"}},2314:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(24)),a=o(n(25)),l=o(n(29)),d=o(n(26)),r=o(n(27)),i=o(n(28)),s=o(n(0)),p=o(n(5)),c=o(n(132)),f=o(n(1233));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var m=p.default.bind(f.default),N=function(e){(0,d.default)(o,e);var t,n=(t=o,function(){var e,n=(0,i.default)(t);if(h()){var o=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,r.default)(this,e)});function o(e){var t;return(0,u.default)(this,o),(t=n.call(this,e)).handleButtonClick=t.handleButtonClick.bind((0,l.default)(t)),t.handleRequestClose=t.handleRequestClose.bind((0,l.default)(t)),t.setButtonNode=t.setButtonNode.bind((0,l.default)(t)),t.getButtonNode=t.getButtonNode.bind((0,l.default)(t)),t.setParentNode=t.setParentNode.bind((0,l.default)(t)),t.getParentNode=t.getParentNode.bind((0,l.default)(t)),t.state={open:!0},t}return(0,a.default)(o,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return s.default.createElement("div",{className:m("content-wrapper")},s.default.createElement("div",{id:"test-popup-area",className:m("popup-area-small"),ref:this.setParentNode},s.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"40",contentWidth:"160",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},s.default.createElement("p",null,"This popup is 40h by 160w.")),s.default.createElement("button",{type:"button",id:"dimension-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Small Popup")))}}]),o}(s.default.Component);t.default=N}}]);
//# sourceMappingURL=440-8a5e75a5640552069d93.js.map