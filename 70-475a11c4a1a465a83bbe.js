(window.webpackJsonp=window.webpackJsonp||[]).push([[70,18],{1027:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(2)),o=n(1029),r=i.default.shape({size:i.default.string,toggleMenu:i.default.func,menuIsOpen:i.default.bool,togglePin:i.default.bool,menuIsPinned:i.default.bool}),l=i.default.shape({accessory:i.default.element,title:i.default.string}),u=i.default.oneOf(["start","center","end"]),s=i.default.arrayOf(i.default.shape({path:i.default.string.isRequired,text:i.default.string.isRequired,hasSubMenu:i.default.bool,icon:i.default.node})),d={utilityConfigPropType:i.default.shape({title:i.default.string,accessory:i.default.element,onChange:i.default.func.isRequired,menuItems:i.default.arrayOf(o.UtilityUtils.itemShape).isRequired,initialSelectedKey:i.default.string.isRequired}),utilityMenuItemPropType:o.UtilityUtils.itemShape,layoutConfigPropType:r,nameConfigPropType:l,navigationAlignmentPropType:u,navigationItemsPropType:s};t.default=d},1040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={isSizeCompact:function(e){return"tiny"===e||"small"===e}};t.default=a},1046:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var i=a(n(1053)),o=a(n(1055)),r={ApplicationHeaderName:i.default,ApplicationMenuName:o.default};t.default=r},1051:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=a(n(5)),s=n(8),d=a(n(1052)),c=u.default.bind(d.default),f={extensions:l.default.element,logo:l.default.element,intl:s.intlShape.isRequired,navigation:l.default.element,toggle:l.default.element,utilities:l.default.element},p=function(e){var t,n,a,l,u,s=e.extensions,d=e.logo,f=e.navigation,p=e.intl,m=e.toggle,y=e.utilities,g=(0,o.default)(e,["extensions","logo","navigation","intl","toggle","utilities"]),h=c(["header","fill",g.className]);d&&(t=r.default.createElement("div",{className:c(["fit","start","logo"])},d)),f&&(n=r.default.createElement("nav",{role:"navigation",className:c("fill")},f)),s&&(a=r.default.createElement("div",{className:c(["fit","end","extensions"])},s)),y&&(l=r.default.createElement("div",{className:c(["fit","end","utilities"])},y)),m&&(u=r.default.createElement("div",{className:c("fit")},m));var v,_=r.default.createElement("div",{className:c(["fill","header-inner"])},n,a),b=r.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:c("skip-content")},p.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(_||t||l)&&(v=r.default.createElement("div",{className:c(["fill","header-body"])},b,t,_,l)),r.default.createElement("div",(0,i.default)({},g,{className:h}),u,v)};p.propTypes=f;var m=(0,s.injectIntl)(p);t.default=m},1052:function(e,t,n){e.exports={fit:"ApplicationHeaderLayout-module__fit___tJJW8",fill:"ApplicationHeaderLayout-module__fill___1szI2",start:"ApplicationHeaderLayout-module__start___brKW8",end:"ApplicationHeaderLayout-module__end___3OIpZ","header-inner":"ApplicationHeaderLayout-module__header-inner___36bkj",logo:"ApplicationHeaderLayout-module__logo___1KF-r",utilities:"ApplicationHeaderLayout-module__utilities___1jy0T",extensions:"ApplicationHeaderLayout-module__extensions___17F-D","header-body":"ApplicationHeaderLayout-module__header-body___3Yoz6","skip-content":"ApplicationHeaderLayout-module__skip-content___1vGmQ"}},1053:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=a(n(5)),s=a(n(1054)),d=u.default.bind(s.default),c={accessory:l.default.element,title:l.default.node},f=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,["accessory","title"]),l=d(["application-header-name",a.className]);return r.default.createElement("div",(0,i.default)({},a,{className:l}),t&&r.default.createElement("div",{className:d("accessory")},t),n&&r.default.createElement("div",{className:d("title")},n))};f.propTypes=c;var p=f;t.default=p},1054:function(e,t,n){e.exports={"application-header-name":"ApplicationHeaderName-module__application-header-name___FuO6v",accessory:"ApplicationHeaderName-module__accessory___3Z_MP",title:"ApplicationHeaderName-module__title___2CBlj"}},1055:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=a(n(5)),s=a(n(1056)),d=u.default.bind(s.default),c={accessory:l.default.element,title:l.default.node},f=function(e){var t=e.accessory,n=e.title,a=(0,o.default)(e,["accessory","title"]),l=d(["application-menu-name",a.className]);return r.default.createElement("div",(0,i.default)({},a,{className:l}),t&&r.default.createElement("div",{className:d("accessory")},t),n&&r.default.createElement("div",{className:d("title")},n))};f.propTypes=c;var p=f;t.default=p},1056:function(e,t,n){e.exports={"application-menu-name":"ApplicationMenuName-module__application-menu-name___1xOas",accessory:"ApplicationMenuName-module__accessory___2yD9O",title:"ApplicationMenuName-module__title___2Umq0"}},1058:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=a(n(5)),s=a(n(1059)),d=u.default.bind(s.default),c={content:l.default.element,extensions:l.default.element,footer:l.default.element,header:l.default.element},f=function(e){var t,n,a,l,u=e.content,s=e.extensions,c=e.footer,f=e.header,p=(0,o.default)(e,["content","extensions","footer","header"]),m=d(["menu","fill",p.className]);return f&&(t=r.default.createElement("div",{className:d(["fit","header"])},f)),u&&(n=r.default.createElement("div",{className:d(["fill","content"])},r.default.createElement("div",{className:d("normalizer")},u))),s&&(a=r.default.createElement("div",{className:d(["fit","widget"])},s)),c&&(l=r.default.createElement("div",{className:d(["fit","footer"])},c)),r.default.createElement("div",(0,i.default)({},p,{className:m}),t,r.default.createElement("div",{className:d(["fill","body"])},a,n),l)};f.propTypes=c;var p=f;t.default=p},1059:function(e,t,n){e.exports={fit:"ApplicationMenuLayout-module__fit___2_ZyC",fill:"ApplicationMenuLayout-module__fill___-mAIP",menu:"ApplicationMenuLayout-module__menu___2MW9V",header:"ApplicationMenuLayout-module__header___rjp8P",footer:"ApplicationMenuLayout-module__footer___3YHVr",body:"ApplicationMenuLayout-module__body___2a4kY",widgets:"ApplicationMenuLayout-module__widgets___33Lug",content:"ApplicationMenuLayout-module__content___dGOMr",normalizer:"ApplicationMenuLayout-module__normalizer___3ImZQ"}},1064:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return o.default}}),t.ApplicationLinksPropType=t.default=void 0;var i=a(n(2)),o=a(n(1079)),r=i.default.shape({alignment:i.default.oneOf(["start","center","end"]),links:i.default.arrayOf(i.default.shape({id:i.default.string,path:i.default.string.isRequired,text:i.default.string.isRequired,icon:i.default.node}))});t.ApplicationLinksPropType=r;var l={ApplicationTabs:o.default,ApplicationLinksPropType:r};t.default=l},1065:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(24)),l=a(n(25)),u=a(n(29)),s=a(n(26)),d=a(n(27)),c=a(n(28)),f=a(n(0)),p=a(n(2)),m=a(n(5)),y=n(8),g=n(228),h=a(n(1051)),v=n(1029),_=n(1046),b=n(1064),C=a(n(1066)),P=a(n(132)),M=n(1048),O=a(n(1027)),E=a(n(1040)),N=a(n(1080));function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=m.default.bind(N.default),x={applicationLinks:b.ApplicationLinksPropType,extensions:p.default.element,layoutConfig:O.default.layoutConfigPropType,navigationLayoutRoutes:p.default.arrayOf(M.processedRoutesPropType),navigationLayoutSize:p.default.string,nameConfig:O.default.nameConfigPropType,utilityConfig:O.default.utilityConfigPropType,intl:y.intlShape,disclosureManager:g.disclosureManagerShape,hasIcons:p.default.bool},R=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,c.default)(t);if(T()){var a=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function a(e){var t;return(0,r.default)(this,a),(t=n.call(this,e)).handleUtilityDiscloseRequest=t.handleUtilityDiscloseRequest.bind((0,u.default)(t)),t.handleUtilityPopupCloseRequest=t.handleUtilityPopupCloseRequest.bind((0,u.default)(t)),t.handleUtilityOnChange=t.handleUtilityOnChange.bind((0,u.default)(t)),t.getTargetRef=t.getTargetRef.bind((0,u.default)(t)),t.setContentNode=t.setContentNode.bind((0,u.default)(t)),t.renderToggle=t.renderToggle.bind((0,u.default)(t)),t.renderAppName=t.renderAppName.bind((0,u.default)(t)),t.renderExtensions=t.renderExtensions.bind((0,u.default)(t)),t.renderNavigation=t.renderNavigation.bind((0,u.default)(t)),t.renderUtilities=t.renderUtilities.bind((0,u.default)(t)),t.renderUtilitiesPopup=t.renderUtilitiesPopup.bind((0,u.default)(t)),t.state={utilityComponent:void 0},t}return(0,l.default)(a,[{key:"setContentNode",value:function(e){this.contentNode=e}},{key:"getTargetRef",value:function(){if(this.contentNode)return this.contentNode.querySelector("[data-application-header-utility]")}},{key:"handleUtilityDiscloseRequest",value:function(e){this.setState({utilityComponent:f.default.cloneElement(e,{onRequestClose:this.handleUtilityPopupCloseRequest})})}},{key:"handleUtilityPopupCloseRequest",value:function(){this.state.utilityComponent&&this.setState({utilityComponent:void 0})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderToggle",value:function(){var e=this.props,t=e.layoutConfig,n=e.intl;return t.toggleMenu?f.default.createElement("div",{className:k("navbar-toggle")},f.default.createElement("button",{type:"button",className:k("toggle-button"),"aria-label":n.formatMessage({id:"Terra.applicationLayout.applicationHeader.menuToggleLabel"}),onClick:t.toggleMenu,"data-application-header-toggle":!0},f.default.createElement(C.default,null))):null}},{key:"renderAppName",value:function(){var e=this.props.nameConfig;return e&&(e.accessory||e.title)?f.default.createElement(_.ApplicationHeaderName,{accessory:e.accessory,title:e.title}):null}},{key:"renderNavigation",value:function(e){var t=this.props.applicationLinks;return e?this.renderAppName():t.links&&t.links.length?f.default.createElement(b.ApplicationTabs,t):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return!e&&a?f.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderUtilities",value:function(e){var t=this.props.utilityConfig;return!e&&t?f.default.createElement(v.ApplicationHeaderUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-header-utility":!0}):null}},{key:"renderUtilitiesPopup",value:function(){var e=this.state.utilityComponent;return e?f.default.createElement(P.default,{attachmentBehavior:"push",contentAttachment:"top center",contentHeight:"auto",contentWidth:"240",isArrowDisplayed:!0,isHeaderDisabled:!0,isOpen:!0,onRequestClose:this.handleUtilityPopupCloseRequest,targetRef:this.getTargetRef},e):null}},{key:"render",value:function(){var e=this.props,t=(e.disclosureManager,e.applicationLinks,e.extensions,e.layoutConfig),n=(e.nameConfig,e.utilityConfig,e.navigationLayoutRoutes,e.navigationLayoutSize,e.intl,e.hasIcons),a=(0,o.default)(e,["disclosureManager","applicationLinks","extensions","layoutConfig","nameConfig","utilityConfig","navigationLayoutRoutes","navigationLayoutSize","intl","hasIcons"]),r=k(["application-navbar",{"application-navbar-with-icons":n},a.className]),l=E.default.isSizeCompact(t.size);return f.default.createElement("header",(0,i.default)({role:"banner"},a,{className:r,ref:this.setContentNode}),f.default.createElement(h.default,{toggle:this.renderToggle(),logo:l?null:this.renderAppName(),navigation:this.renderNavigation(l),extensions:this.renderExtensions(l),utilities:this.renderUtilities(l)}),this.renderUtilitiesPopup())}}]),a}(f.default.Component);R.propTypes=x,R.defaultProps={applicationLinks:{},hasIcons:!1};var S=(0,y.injectIntl)((0,g.withDisclosureManager)(R));t.default=S},1066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z"}))};l.displayName="IconMenu",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=l;t.default=u},1069:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],a=n.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var n,o,l,u=[],c=[],f=e.querySelectorAll(a);for(t.includeContainer&&i.call(e,a)&&(f=Array.prototype.slice.apply(f)).unshift(e),n=0;n<f.length;n++)r(o=f[n])&&(0===(l=s(o))?u.push(o):c.push({documentOrder:n,tabIndex:l,node:o}));return c.sort(d).map((function(e){return e.node})).concat(u)}function r(e){return!(!l(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||s(e)<0)}function l(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,a)&&r(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,u)&&l(e)};var u=n.concat("iframe").join(",");function s(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function c(e){return"INPUT"===e.tagName}e.exports=o},1072:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RoutingMenu",{enumerable:!0,get:function(){return g.default}}),t.Utils=t.default=void 0;var i=a(n(165)),o=a(n(24)),r=a(n(25)),l=a(n(26)),u=a(n(27)),s=a(n(28)),d=a(n(0)),c=a(n(2)),f=a(n(1105)),p=n(1048),m=n(83),y=a(n(356)),g=a(n(1083)),h=a(n(1085)),v=a(n(1065)),_=a(n(1027)),b=a(n(1040)),C=a(n(1086));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=["default","tiny","small","medium","large","huge"],N={extensions:c.default.element,indexPath:c.default.string.isRequired,nameConfig:_.default.nameConfigPropType,navigationAlignment:_.default.navigationAlignmentPropType,navigationItems:_.default.navigationItemsPropType,routingConfig:c.default.shape({menu:p.routeConfigPropType,content:p.routeConfigPropType}).isRequired,utilityConfig:_.default.utilityConfigPropType},T=function(e){(0,l.default)(a,e);var t,n=(t=a,function(){var e,n=(0,s.default)(t);if(O()){var a=(0,s.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function a(e){var t;return(0,o.default)(this,a),(t=n.call(this,e)).state={applicationLayoutRoutingConfig:a.buildRoutingConfig(t.props),prevProps:{nameConfig:e.nameConfig,routingConfig:e.routingConfig,utilityConfig:e.utilityConfig,navigationItems:e.navigationItems,indexPath:e.indexPath}},t}return(0,r.default)(a,null,[{key:"buildMenuNavigationItems",value:function(e){var t=e.navigationItems,n=e.routingConfig;if(!n.menu)return t;var a=Object.keys(n.menu).map((function(e){return n.menu[e].path}));return t.map((function(e){return{externalLink:e.externalLink,path:e.path,text:e.text,hasSubMenu:a.filter((function(t){return(0,m.matchPath)(e.path,{path:t})})).length>0}}))}},{key:"buildNavigationMenuConfig",value:function(e){var t=a.buildMenuNavigationItems(e),n={componentClass:g.default,props:{menuItems:t},refuseRoutingStackNavigation:0===t.length};return{"/":{path:"/",component:{tiny:n,small:n}}}}},{key:"buildApplicationMenus",value:function(e,t){var n=e.nameConfig,a=e.utilityConfig,i=e.extensions;if(t){var o={};return Object.keys(t).forEach((function(e){var r=M({},t[e]),l=M({},r.component);E.forEach((function(e){if(l[e]){var t=M({},l[e]),o=M({},t.props);o.applicationMenuWrapperProps={contentComponentClass:t.componentClass,nameConfig:n,utilityConfig:a,extensions:i},t.props=o,t.componentClass=h.default,l[e]=t}})),r.component=l,o[e]=r})),o}}},{key:"buildRoutingConfig",value:function(e){var t=e.routingConfig;return M({},t,{menu:a.buildApplicationMenus(e,M({},t.menu,{},a.buildNavigationMenuConfig(e)))})}}]),(0,r.default)(a,[{key:"render",value:function(){var e=this.props,t=e.nameConfig,n=e.utilityConfig,a=e.navigationAlignment,i=e.navigationItems,o=e.indexPath,r=e.extensions,l=this.state.applicationLayoutRoutingConfig,u=(i||[]).some((function(e){return e.icon})),s=i?(i||[]).map((function(e,t){return{id:"application-layout-tab-".concat(t),path:e.path,text:e.text,externalLink:e.externalLink,icon:e.icon}})):void 0,c=d.default.createElement(v.default,{nameConfig:t,utilityConfig:n,extensions:r,applicationLinks:{alignment:a,links:s},hasIcons:u});return d.default.createElement(y.default,null,d.default.createElement(f.default,{config:l,header:c,indexPath:o}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevProps.nameConfig!==e.nameConfig||t.prevProps.utilityConfig!==e.utilityConfig||t.prevProps.routingConfig!==e.routingConfig||t.prevProps.navigationItems!==e.navigationItems||t.prevProps.indexPath!==e.indexPath?{applicationLayoutRoutingConfig:a.buildRoutingConfig(e)}:null}}]),a}(d.default.Component);T.propTypes=N,T.defaultProps={navigationItems:[]};var k=T;t.default=k;var x={helpers:b.default,utilityHelpers:C.default,propTypes:_.default};t.Utils=x},1073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};l.displayName="IconClose",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=l;t.default=u},1074:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};l.displayName="IconLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u},1075:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),i=o(n(37));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=r({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};l.displayName="IconCheckmark",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=l;t.default=u},1076:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(24)),l=a(n(25)),u=a(n(29)),s=a(n(26)),d=a(n(27)),c=a(n(28)),f=a(n(0)),p=a(n(2)),m=a(n(5)),y=a(n(1058)),g=n(1046),h=a(n(1044)),v=n(1029),_=n(356),b=n(228),C=a(n(1027)),P=a(n(1040)),M=a(n(1077)),O=a(n(1078));function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var N=m.default.bind(O.default),T={content:p.default.element,extensions:p.default.element,layoutConfig:C.default.layoutConfigPropType.isRequired,nameConfig:C.default.nameConfigPropType,routingStackDelegate:h.default.propType.isRequired,utilityConfig:C.default.utilityConfigPropType,disclosureManager:b.disclosureManagerShape},k=function(e){(0,s.default)(a,e);var t,n=(t=a,function(){var e,n=(0,c.default)(t);if(E()){var a=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function a(e){var t;return(0,r.default)(this,a),(t=n.call(this,e)).renderHeader=t.renderHeader.bind((0,u.default)(t)),t.renderExtensions=t.renderExtensions.bind((0,u.default)(t)),t.renderFooter=t.renderFooter.bind((0,u.default)(t)),t.handleUtilityDiscloseRequest=t.handleUtilityDiscloseRequest.bind((0,u.default)(t)),t.handleUtilityOnChange=t.handleUtilityOnChange.bind((0,u.default)(t)),t}return(0,l.default)(a,[{key:"handleUtilityDiscloseRequest",value:function(e){var t=this.props,n=t.disclosureManager,a=t.layoutConfig;a&&a.toggleMenu&&a.toggleMenu(),n&&e&&n.disclose({preferredType:_.disclosureType,dimensions:{height:"420",width:"320"},content:{component:f.default.createElement(M.default,null,e),key:"application-menu-utility-menu"}})}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderHeader",value:function(e){var t=this.props.nameConfig;return e&&t&&(t.accessory||t.title)?f.default.createElement("div",{className:N(["menu-header"])},f.default.createElement(g.ApplicationMenuName,{accessory:t.accessory,title:t.title})):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return e&&a?f.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderFooter",value:function(e){var t=this.props.utilityConfig;return e&&t?f.default.createElement(v.ApplicationMenuUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-menu-utility":!0}):null}},{key:"render",value:function(){var e,t=this.props,n=(t.disclosureManager,t.content),a=(t.extensions,t.layoutConfig),r=(t.nameConfig,t.routingStackDelegate),l=(t.utilityConfig,(0,o.default)(t,["disclosureManager","content","extensions","layoutConfig","nameConfig","routingStackDelegate","utilityConfig"])),u=N(["application-menu",l.className]),s=P.default.isSizeCompact(a.size);return n&&(e=f.default.cloneElement(n,{layoutConfig:a,routingStackDelegate:r})),f.default.createElement("div",(0,i.default)({},l,{className:u}),f.default.createElement(y.default,{header:this.renderHeader(s),extensions:this.renderExtensions(s),content:e,footer:this.renderFooter(s)}))}}]),a}(f.default.Component);k.propTypes=T;var x=(0,b.withDisclosureManager)(k);t.default=x},1077:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(165)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=n(228);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var d={disclosureManager:u.disclosureManagerShape,children:l.default.node.isRequired},c=function(e){var t=e.disclosureManager,n=e.children,a=(0,o.default)(e,["disclosureManager","children"]);return r.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{onRequestClose:t.dismiss,isHeightBounded:!0}))};c.propTypes=d;var f=(0,u.withDisclosureManager)(c);t.default=f},1078:function(e,t,n){e.exports={"application-menu":"ApplicationMenu-module__application-menu___3TpDZ","menu-header":"ApplicationMenu-module__menu-header___nX2Wr"}},1080:function(e,t,n){e.exports={"application-navbar":"ApplicationHeader-module__application-navbar___2Bg0M","application-navbar-with-icons":"ApplicationHeader-module__application-navbar-with-icons___NWcXr","navbar-toggle":"ApplicationHeader-module__navbar-toggle___GEq16","toggle-button":"ApplicationHeader-module__toggle-button___2GANm"}},1083:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(24)),o=a(n(29)),r=a(n(25)),l=a(n(26)),u=a(n(27)),s=a(n(28)),d=a(n(0)),c=a(n(2)),f=n(83),p=a(n(1106)),m=a(n(1044)),y=a(n(1027));function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h={title:c.default.string,menuItems:c.default.arrayOf(c.default.shape({text:c.default.string.isRequired,path:c.default.string.isRequired,hasSubMenu:c.default.bool})),layoutConfig:y.default.layoutConfigPropType.isRequired,routingStackDelegate:m.default.propType.isRequired,location:c.default.shape({pathname:c.default.string}).isRequired},v=function(e){(0,l.default)(a,e);var t,n=(t=a,function(){var e,n=(0,s.default)(t);if(g()){var a=(0,s.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,u.default)(this,e)});function a(e){var t;return(0,i.default)(this,a),(t=n.call(this,e)).handleMenuChange=t.handleMenuChange.bind((0,o.default)(t)),t.state={selectedChildKey:a.getSelectedChildKey(e.location.pathname,e.menuItems),prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems},t}return(0,r.default)(a,null,[{key:"buildSideMenuItems",value:function(e){return e.map((function(e){return{key:e.path,text:e.text,hasSubMenu:!!e.hasSubMenu,metaData:{path:e.path,externalLink:e.externalLink,hasSubMenu:!!e.hasSubMenu}}}))}}]),(0,r.default)(a,[{key:"handleMenuChange",value:function(e,t){var n,a=this.props,i=a.routingStackDelegate,o=a.layoutConfig;return t.metaData.externalLink?n=function(){return window.open(t.metaData.externalLink.path,t.metaData.externalLink.target||"_blank")}:(this.setState({selectedChildKey:t.selectedChildKey}),n=function(){return i.show({path:t.metaData.path})}),!t.metaData.hasSubMenu&&o.toggleMenu?o.toggleMenu().then((function(){n()})):Promise.resolve().then((function(){return n()}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.routingStackDelegate,i=e.menuItems,o=this.state.selectedChildKey,r=a.buildSideMenuItems(i);return r.push({key:"routingMenuRootMenuKey",text:t||"",childKeys:r.map((function(e){return e.key})),isRootMenu:!n.showParent&&!t}),d.default.createElement(p.default,{menuItems:r,onChange:this.handleMenuChange,routingStackBack:n.showParent,selectedMenuKey:"routingMenuRootMenuKey",selectedChildKey:o,"data-routing-menu":!0})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.location.pathname!==t.prevPropsLocationPathName||e.menuItems!==t.prevPropsMenuItems?{prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems,selectedChildKey:a.getSelectedChildKey(e.location.pathname,e.menuItems)}:null}},{key:"getSelectedChildKey",value:function(e,t){for(var n=0,a=t.length;n<a;n+=1){var i=t[n];if(i.path&&(0,f.matchPath)(e,{path:i.path}))return i.path}}}]),a}(d.default.Component);v.propTypes=h;var _=(0,f.withRouter)(v);t.default=_},1085:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(22)),o=a(n(0)),r=a(n(2)),l=a(n(1044)),u=a(n(1076)),s=a(n(1027)),d={navigationItems:s.default.navigationItemsPropType,layoutConfig:s.default.layoutConfigPropType.isRequired,routingStackDelegate:l.default.propType.isRequired,applicationMenuWrapperProps:r.default.shape({contentComponentClass:r.default.func.isRequired,nameConfig:s.default.nameConfigPropType,utilityConfig:s.default.utilityConfigPropType,extensions:r.default.node}).isRequired},c=function(e){var t=e.layoutConfig,n=e.routingStackDelegate,a=e.applicationMenuWrapperProps,r=(0,i.default)(e,["layoutConfig","routingStackDelegate","applicationMenuWrapperProps"]),l=a.contentComponentClass;return o.default.createElement(u.default,{layoutConfig:t,routingStackDelegate:n,nameConfig:a.nameConfig,utilityConfig:a.utilityConfig,extensions:a.extensions,content:o.default.createElement(l,r)})};c.propTypes=d;var f=c;t.default=f},1086:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=n(1029),r=a(n(1087)),l={MENU:"menu",USER_INFORMATION:"user-information",CHANGE_PHOTO:"change-photo",SETTINGS:"settings",APPEARANCE:"appearance",SECURITY:"security",HELP:"help",GETTING_STARTED:"getting-started",ABOUT:"about",TERMS_OF_USE:"terms-of-use",LOG_OUT:"log-out"},u=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.menu"})},s=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.userInformation"})},d=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.changePhoto"})},c=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.settings"})},f=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.appearance"})},p=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.security"})},m=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.help"})},y=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.gettingStarted"})},g=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.about"})},h=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.termsOfUse"})},v=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.logOut"})},_={getDefaultUtilityItems:function(e,t,n){var a=i.default.createElement(r.default,{userName:t.name,userDetail:t.detail,userPhoto:t.photo});return function(e,t){return t?(t.forEach((function(t){if(t.parentKey){var n=e.filter((function(e){return e.key===t.parentKey}));if(!n.length)return;var a=n[0];a.childKeys?a.childKeys.indexOf(t.key)<0&&a.childKeys.push(t.key):a.childKeys=[t.key]}})),e.concat(t)):e}([{key:l.MENU,title:u(e),childKeys:[l.USER_INFORMATION,l.SETTINGS,l.HELP,l.LOG_OUT]},{key:l.USER_INFORMATION,title:s(e),content:a,childKeys:[l.CHANGE_PHOTO]},{key:l.SETTINGS,title:c(e),childKeys:[l.APPEARANCE,l.SECURITY]},{key:l.LOG_OUT,contentLocation:o.UtilityUtils.LOCATIONS.FOOTER,title:v(e)},{key:l.HELP,title:m(e),childKeys:[l.GETTING_STARTED,l.ABOUT,l.TERMS_OF_USE]},{key:l.CHANGE_PHOTO,title:d(e)},{key:l.APPEARANCE,title:f(e)},{key:l.SECURITY,title:p(e)},{key:l.GETTING_STARTED,title:y(e)},{key:l.ABOUT,title:g(e)},{key:l.TERMS_OF_USE,title:h(e)}],n)},defaultKeys:l,locations:o.UtilityUtils.LOCATIONS};t.default=_},1087:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17)),o=a(n(22)),r=a(n(0)),l=a(n(2)),u=a(n(5)),s=a(n(1088)),d=u.default.bind(s.default),c={userDetail:l.default.string,userName:l.default.string,userPhoto:l.default.element},f=function(e){var t,n=e.userDetail,a=e.userName,l=e.userPhoto,u=(0,o.default)(e,["userDetail","userName","userPhoto"]),s=d(["user-data",u.className]);return(a||n)&&(t=r.default.createElement("div",{className:d("user-info")},!!a&&r.default.createElement("div",{className:d("name")},a),!!n&&r.default.createElement("div",{className:d("detail")},n))),r.default.createElement("div",(0,i.default)({},u,{className:s}),!!l&&r.default.cloneElement(l,{className:d("photo")}),t)};f.propTypes=c;var p=f;t.default=p},1088:function(e,t,n){e.exports={"user-data":"UserData-module__user-data___23_4-",photo:"UserData-module__photo___3KKfp","user-info":"UserData-module__user-info___2CSxn",name:"UserData-module__name___Be1kR",detail:"UserData-module__detail___2var2"}},1102:function(e,t,n){e.exports={"app-router":"ApplicationLayoutCommon-test-module__app-router___3hWCZ"}},2084:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=n(83),r=a(n(5)),l=a(n(1102)),u=n(1072),s=r.default.bind(l.default),d=function(){return i.default.createElement("div",{className:s("app-router"),id:"routing-menu-test"},i.default.createElement(o.MemoryRouter,null,i.default.createElement(u.RoutingMenu,{title:"Test Routing Menu",menuItems:[{text:"Item 1",path:"/item_1",hasSubMenu:!0},{text:"Item 2",path:"/item_2",hasSubMenu:!0},{text:"External Link Example",path:"/item_3",hasSubMenu:!1,externalLink:{path:"https://engineering.cerner.com/terra-ui/#/home/terra-ui/index",target:"_self"}}],layoutConfig:{},routingStackDelegate:{showParent:function(){}}})))};t.default=d}}]);
//# sourceMappingURL=70-475a11c4a1a465a83bbe.js.map