(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1471:function(t,e,n){var u=n(1472),o=n(1473),a=n(376),r=n(1474);t.exports=function(t){return u(t)||o(t)||a(t)||r()}},1472:function(t,e,n){var u=n(377);t.exports=function(t){if(Array.isArray(t))return u(t)}},1473:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},1474:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},2250:function(t,e,n){"use strict";var u=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(1471)),a=u(n(24)),r=u(n(25)),i=u(n(29)),l=u(n(26)),d=u(n(27)),s=u(n(28)),c=u(n(0)),f=u(n(359));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var h=function(t){(0,l.default)(u,t);var e,n=(e=u,function(){var t,n=(0,s.default)(e);if(m()){var u=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return(0,d.default)(this,t)});function u(t){var e;return(0,a.default)(this,u),(e=n.call(this,t)).handleButtonClick=e.handleButtonClick.bind((0,i.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,i.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,i.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,i.default)(e)),e.addMenuItems=e.addMenuItems.bind((0,i.default)(e)),e.removeMenuItems=e.removeMenuItems.bind((0,i.default)(e)),e.state={open:!1,items:[0]},e}return(0,r.default)(u,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"addMenuItems",value:function(){this.setState((function(t){return{items:[].concat((0,o.default)(t.items),[t.items.length])}}))}},{key:"removeMenuItems",value:function(){this.setState((function(t){var e=t.items.slice();return e.pop(),{items:e}}))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(f.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},this.state.items.map((function(t){return c.default.createElement(f.default.Item,{key:t,text:"Menu Item ".concat(t),id:"TestContent".concat(t)})}))),c.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"),c.default.createElement("br",null),c.default.createElement("button",{type:"button",id:"add-button",onClick:this.addMenuItems},"Add Menu Item"),c.default.createElement("button",{type:"button",id:"remove-button",onClick:this.removeMenuItems},"Remove Menu Item"))}}]),u}(c.default.Component);e.default=h}}]);
//# sourceMappingURL=266-eacb6d0db68c1473b39b.js.map