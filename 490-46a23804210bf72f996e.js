(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{2252:function(e,t,l){"use strict";var u=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(24)),n=u(l(25)),f=u(l(29)),d=u(l(26)),o=u(l(27)),r=u(l(28)),c=u(l(0)),i=u(l(359));function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var m=function(e){(0,d.default)(u,e);var t,l=(t=u,function(){var e,l=(0,r.default)(t);if(s()){var u=(0,r.default)(this).constructor;e=Reflect.construct(l,arguments,u)}else e=l.apply(this,arguments);return(0,o.default)(this,e)});function u(e){var t;return(0,a.default)(this,u),(t=l.call(this,e)).handleButtonClick=t.handleButtonClick.bind((0,f.default)(t)),t.handleRequestClose=t.handleRequestClose.bind((0,f.default)(t)),t.setButtonNode=t.setButtonNode.bind((0,f.default)(t)),t.getButtonNode=t.getButtonNode.bind((0,f.default)(t)),t.state={open:!1},t}return(0,n.default)(u,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu should have a medium height. And all items should be visible without scrolling."),c.default.createElement(i.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(i.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),c.default.createElement(i.default.Item,{text:"Default 2",key:"2"}),c.default.createElement(i.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(i.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(i.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(i.default.ItemGroup,{key:"6"},c.default.createElement(i.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(i.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(i.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(i.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(i.default.Item,{text:"Default 8",key:"8"}),c.default.createElement(i.default.Item,{text:"Default 9",key:"9"}),c.default.createElement(i.default.Item,{text:"Default 10",key:"10"}),c.default.createElement(i.default.Item,{text:"Default 11",key:"11"}),c.default.createElement(i.default.Item,{text:"Default 12",key:"12"}),c.default.createElement(i.default.Item,{text:"Default 13",key:"13"}),c.default.createElement(i.default.Item,{text:"Default 14",key:"14"}),c.default.createElement(i.default.ItemGroup,{key:"15"},c.default.createElement(i.default.Item,{text:"Default 151",key:"151"}),c.default.createElement(i.default.Item,{text:"Default 152",key:"152"}),c.default.createElement(i.default.Item,{text:"Default 153",key:"153",className:"TestLastItem"}))),c.default.createElement("button",{type:"button",id:"medium-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),u}(c.default.Component);t.default=m}}]);
//# sourceMappingURL=490-46a23804210bf72f996e.js.map