(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1010:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(0)),l=u(a(2)),n=u(a(5)),o=u(a(1011));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),s={name:l.default.string.isRequired,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.name,a=e.url,l=e.version;return r.default.createElement("div",{className:d("badge-container")},r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))))};c.propTypes=s;var _=c;t.default=_},1011:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1012:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(0)),l=u(a(2)),n=u(a(5)),o=u(a(1016));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,a){return t&&_(e.prototype,t),a&&_(e,a),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=n.default.bind(o.default),m={example:l.default.element,exampleSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},v=function(e){function t(e){var a,r,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(a=!(l=s(t).call(this,e))||"object"!==d(l)&&"function"!=typeof l?c(r):l).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(c(a)),a.handleCodeToggle=a.handleCodeToggle.bind(c(a)),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),i(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),i(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,a=e.example,l=e.exampleSrc,n=e.title,o=e.description,u=this.state,d=u.isExpanded,s=u.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(n),r.default.createElement("div",{className:f("content",{"dynamic-content":s})},t.renderDescription(o),a),l&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),d&&r.default.createElement("div",{className:f("code")},l)))}}]),t}(r.default.Component);v.propTypes=m,v.defaultProps={isExpanded:!1};var h=v;t.default=h},1016:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1017:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a(0)),l=u(a(2)),n=u(a(5)),o=u(a(1019));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),s={rows:l.default.arrayOf(l.default.shape({name:l.default.string,type:l.default.func,required:l.default.bool,defaultValue:l.default.string,description:l.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:d("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:d("tr")},r.default.createElement("th",{className:d("th")},"Prop Name"),r.default.createElement("th",{className:d("th")},"Type"),r.default.createElement("th",{className:d("th")},"Is Required"),r.default.createElement("th",{className:d("th")},"Default Value"),r.default.createElement("th",{className:d("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:d(["td","props-td"])},e.type()),r.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};c.propTypes=s;var _=c;t.default=_},1019:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1098:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};u.displayName="IconTrash",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=u;t.default=d},1099:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};u.displayName="IconFolder",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var d=u;t.default=d},1114:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};u.displayName="IconPrinter",u.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d},1193:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z"}))};u.displayName="IconSend",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var d=u;t.default=d},1394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M0 0v48h48V0zm31 9v10H18V9zm0 13v10H18V22zm3 0h11v10H34zm0-3V9h11v10zM3 9h12v10H3zm0 13h12v10H3zm0 23V35h12v10zm15 0V35h13v10zm16 0V35h11v10z"}))};u.displayName="IconTable",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=u;t.default=d},1395:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M0 0v48h48V0zm45 45H15V3h30z"}))};u.displayName="IconFlowsheet",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=u;t.default=d},1396:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(37));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};u.displayName="IconVisualization",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=u;t.default=d}}]);
//# sourceMappingURL=99-ff1bff86434d03145d2d.js.map