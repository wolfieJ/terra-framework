(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1108:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),u=r(n(22)),a=r(n(24)),d=r(n(25)),i=r(n(26)),s=r(n(27)),f=r(n(28)),l=r(n(0)),c=r(n(2)),v=n(231);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p={src:c.default.string.isRequired,onMount:c.default.func,onLaunch:c.default.func,onAuthorize:c.default.func,options:c.default.object,eventHandlers:c.default.arrayOf(c.default.shape({key:c.default.string,handler:c.default.func}))},m=function(e){(0,i.default)(r,e);var t,n=(t=r,function(){var e,n=(0,f.default)(t);if(h()){var r=(0,f.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function r(){return(0,a.default)(this,r),n.apply(this,arguments)}return(0,d.default)(r,[{key:"componentDidMount",value:function(){this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,u.default)(t,["src","onMount","onLaunch","onAuthorize","options","eventHandlers"]));return l.default.createElement("div",(0,o.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),r}(l.default.Component);m.propTypes=p;var y=m;t.default=y},1167:function(e,t,n){e.exports={iframe:"Consumer-module__iframe___tp87R"}},2214:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(24)),u=r(n(25)),a=r(n(29)),d=r(n(26)),i=r(n(27)),s=r(n(28)),f=r(n(0)),l=r(n(5)),c=n(231),v=r(n(1108)),h=r(n(1167));function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var m=l.default.bind(h.default);c.Consumer.init();var y=function(e){(0,d.default)(r,e);var t,n=(t=r,function(){var e,n=(0,s.default)(t);if(p()){var r=(0,s.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function r(e){var t;return(0,o.default)(this,r),(t=n.call(this,e)).onMount=t.onMount.bind((0,a.default)(t)),t.handleEventA=t.handleEventA.bind((0,a.default)(t)),t.handleEventB=t.handleEventB.bind((0,a.default)(t)),t}return(0,u.default)(r,[{key:"onMount",value:function(e){this.frame=e}},{key:"handleEventA",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #0000FF",this.frame.trigger("Event-Reply",{eventReply:"eventA",borderColor:"#0000FF"})}},{key:"handleEventB",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #00FF00",this.frame.trigger("Event-Reply",{eventReply:"eventB",borderColor:"#00FF00"})}},{key:"render",value:function(){var e=[{key:"EventA",handler:this.handleEventA},{key:"EventB",handler:this.handleEventB}];return f.default.createElement("div",{id:"CustomEvents"},f.default.createElement(v.default,{className:m("iframe"),src:"/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider",options:{iframeAttrs:{title:"Custom events example"}},onMount:this.onMount,eventHandlers:e}))}}]),r}(f.default.Component);t.default=y}}]);
//# sourceMappingURL=374-b09bbd52ccddd88c6861.js.map