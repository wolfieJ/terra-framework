(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1475:function(t,e,n){t.exports={"test-popup-area":"AutomaticHeightAndResizedContentCommon-module__test-popup-area___-X6wf","popup-text":"AutomaticHeightAndResizedContentCommon-module__popup-text____2uj3","popup-button":"AutomaticHeightAndResizedContentCommon-module__popup-button___32RLB"}},2299:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(24)),a=o(n(25)),i=o(n(29)),l=o(n(26)),s=o(n(27)),d=o(n(28)),c=o(n(0)),r=o(n(5)),p=o(n(132)),f=o(n(1475));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=r.default.bind(f.default),C=function(t){(0,l.default)(o,t);var e,n=(e=o,function(){var t,n=(0,d.default)(e);if(h()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e;return(0,u.default)(this,o),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,i.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,i.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,i.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,i.default)(e)),e.state={open:!0},e}return(0,a.default)(o,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return c.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area")},c.default.createElement(p.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement("p",{className:m("popup-text")},"This is popup content with a automatic height of 400px.")),c.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),o}(c.default.Component);e.default=C}}]);
//# sourceMappingURL=428-b850173094da892ea5c9.js.map