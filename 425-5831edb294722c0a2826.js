(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{2012:function(t,e,n){t.exports={"test-popup-area":"ArrowVerticalLeftAdjustmentPopup-test-module__test-popup-area___3ghE4","popup-text":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-text___1JAwJ","popup-button":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-button___1habZ"}},2296:function(t,e,n){"use strict";var o=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(24)),a=o(n(25)),r=o(n(29)),s=o(n(26)),d=o(n(27)),l=o(n(28)),i=o(n(0)),p=o(n(5)),c=o(n(132)),f=o(n(2012));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=p.default.bind(f.default),b=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(h()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,d.default)(this,t)});function o(t){var e;return(0,u.default)(this,o),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,r.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,r.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,r.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,r.default)(e)),e.setParentNode=e.setParentNode.bind((0,r.default)(e)),e.getParentNode=e.getParentNode.bind((0,r.default)(e)),e.state={open:!0},e}return(0,a.default)(o,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},i.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"top left",contentHeight:"120",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},i.default.createElement("p",{className:N("popup-text")},"This popup arrow has verital-left attachment, but was adjusted to be on the screen.")),i.default.createElement("button",{type:"button",id:"alignment-button",className:N("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},""))}}]),o}(i.default.Component);e.default=b}}]);
//# sourceMappingURL=425-5831edb294722c0a2826.js.map