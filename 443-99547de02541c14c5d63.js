(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{1129:function(e,t,n){e.exports={container:"SlideGroupDemo-module__container___2zjCb",slide:"SlideGroupDemo-module__slide___1Lr5R","content-wrapper":"SlideGroupDemo-module__content-wrapper___2e3Pl",button:"SlideGroupDemo-module__button___769LH","custom-slide":"SlideGroupDemo-module__custom-slide____pG-d"}},2317:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(24)),c=u(n(25)),o=u(n(29)),l=u(n(26)),a=u(n(27)),i=u(n(28)),d=u(n(0)),f=u(n(5)),s=u(n(365)),m=u(n(1129));function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var _=f.default.bind(m.default),b=function(e){(0,l.default)(u,e);var t,n=(t=u,function(){var e,n=(0,i.default)(t);if(p()){var u=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,u)}else e=n.apply(this,arguments);return(0,a.default)(this,e)});function u(e){var t;return(0,r.default)(this,u),(t=n.call(this,e)).state={counter:1},t.increment=t.increment.bind((0,o.default)(t)),t.decrement=t.decrement.bind((0,o.default)(t)),t}return(0,c.default)(u,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=1;t<=this.state.counter;t+=1)e.push(d.default.createElement("div",{key:t},d.default.createElement("h2",null,"Slide"," ",t),d.default.createElement("br",null),4!==t?d.default.createElement("button",{type:"button",id:"increment-".concat(t),className:_("button"),onClick:this.increment},"Increment"):null,1!==t?d.default.createElement("button",{type:"button",id:"decrement-".concat(t),className:_("button"),onClick:this.decrement},"Decrement"):null));return d.default.createElement("div",{className:_("content-wrapper")},d.default.createElement(s.default,{items:e,id:"SlideGroup"}))}}]),u}(d.default.Component);t.default=b}}]);
//# sourceMappingURL=443-99547de02541c14c5d63.js.map