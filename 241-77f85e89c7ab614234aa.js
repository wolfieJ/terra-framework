(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1145:function(e,t,s){e.exports={header:"DisclosureComponentCommon-test-module__header___2HTHy","content-form":"DisclosureComponentCommon-test-module__content-form___3Q74w","select-field":"DisclosureComponentCommon-test-module__select-field___1LdeS"}},1146:function(e,t,s){e.exports={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___3KEQB","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___b49Lr","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___3e00k"}},1168:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(s(165)),i=n(s(24)),a=n(s(25)),o=n(s(29)),r=n(s(26)),c=n(s(27)),d=n(s(28)),u=n(s(0)),m=n(s(2)),f=n(s(1107)),h=n(s(55)),p=s(228),g=n(s(5)),b=n(s(1145));function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=g.default.bind(b.default),v=Object.keys(p.availableDisclosureHeights),C=Object.keys(p.availableDisclosureWidths),E=function(e){(0,r.default)(n,e);var t,s=(t=n,function(){var e,s=(0,d.default)(t);if(y()){var n=(0,d.default)(this).constructor;e=Reflect.construct(s,arguments,n)}else e=s.apply(this,arguments);return(0,c.default)(this,e)});function n(e){var t;return(0,i.default)(this,n),(t=s.call(this,e)).disclose=t.disclose.bind((0,o.default)(t)),t.dismiss=t.dismiss.bind((0,o.default)(t)),t.closeDisclosure=t.closeDisclosure.bind((0,o.default)(t)),t.goBack=t.goBack.bind((0,o.default)(t)),t.maximize=t.maximize.bind((0,o.default)(t)),t.minimize=t.minimize.bind((0,o.default)(t)),t.generateOptions=t.generateOptions.bind((0,o.default)(t)),t.handleSelectChange=t.handleSelectChange.bind((0,o.default)(t)),t.renderFormButton=t.renderFormButton.bind((0,o.default)(t)),t.renderForm=t.renderForm.bind((0,o.default)(t)),t.getId=t.getId.bind((0,o.default)(t)),t.state={id:"disclosureDimensions",disclosureHeight:v[0],disclosureWidth:C[0]},t}return(0,a.default)(n,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var s=this;return e.map((function(e,n){var l=n;return u.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(s.props.nestedIndex),key:l,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,l.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var s=this,n=this.props,l=n.disclosureType,i=n.nestedIndex,a=n.renderHeaderAdapter,o=i+1;return function(){s.props.disclosureManager.disclose({preferredType:l,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:u.default.createElement(_,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:a})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return u.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return u.default.createElement("form",null,u.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),u.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(v,"height")),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),u.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(C,"width")),u.default.createElement("br",null),u.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,s=e.identifier,n=e.renderHeaderAdapter;return u.default.createElement(h.default,{id:s,className:"nested-component",fill:!0,header:u.default.createElement("h2",{className:k("header")},"Content Component")},n?u.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(s),collapsibleMenuView:u.default.createElement(f.default,null,u.default.createElement(f.default.Item,{text:"Header Button 1",key:"button_1"}),u.default.createElement(f.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,u.default.createElement("p",null,"id:"," ",s),u.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),u.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),u.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),u.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),u.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),u.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),u.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),u.default.createElement("div",{className:k("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?u.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?u.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?u.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?u.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?u.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(u.default.Component);E.propTypes={disclosureManager:p.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},E.defaultProps={nestedIndex:0};var _=(0,p.withDisclosureManager)(E),D=_;t.default=D},2269:function(e,t,s){"use strict";var n=s(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(s(0)),i=n(s(5)),a=n(s(1168)),o=n(s(356)),r=n(s(1146)),c=i.default.bind(r.default),d=function(){return l.default.createElement("div",{role:"main",className:c("content-wrapper")},l.default.createElement(o.default,{disclosureAccessory:l.default.createElement("div",{className:c("disclosure-accessory")},"Disclosure Accessory")},l.default.createElement(a.default,{identifier:"root-component",disclosureType:"modal",renderHeaderAdapter:!0})))};t.default=d}}]);
//# sourceMappingURL=241-77f85e89c7ab614234aa.js.map