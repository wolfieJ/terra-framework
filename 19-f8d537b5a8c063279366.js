(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1069:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],o=n.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(e,t){t=t||{};var n,r,u,l=[],c=[],f=e.querySelectorAll(o);for(t.includeContainer&&a.call(e,o)&&(f=Array.prototype.slice.apply(f)).unshift(e),n=0;n<f.length;n++)i(r=f[n])&&(0===(u=s(r))?l.push(r):c.push({documentOrder:n,tabIndex:u,node:r}));return c.sort(d).map((function(e){return e.node})).concat(l)}function i(e){return!(!u(e)||function(e){return function(e){return c(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||s(e)<0)}function u(e){return!(e.disabled||function(e){return c(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}r.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,o)&&i(e)},r.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,l)&&u(e)};var l=n.concat("iframe").join(",");function s(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function c(e){return"INPUT"===e.tagName}e.exports=r},1097:function(e,t,n){e.exports={"content-container":"LayoutSlidePanel-module__content-container___1m5jV","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___3eewh",content:"LayoutSlidePanel-module__content___3B7TM",panel:"LayoutSlidePanel-module__panel___6Nxw2","is-animated":"LayoutSlidePanel-module__is-animated___kTH1Z","is-open":"LayoutSlidePanel-module__is-open___2sbzk","is-tiny":"LayoutSlidePanel-module__is-tiny___vnS05","is-small":"LayoutSlidePanel-module__is-small___2kbxc","is-overlay":"LayoutSlidePanel-module__is-overlay___2HevX","is-squish":"LayoutSlidePanel-module__is-squish___2WqMy","main-container":"LayoutSlidePanel-module__main-container___1O3uK"}},1113:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(17)),r=o(n(165)),i=o(n(24)),u=o(n(29)),l=o(n(25)),s=o(n(26)),d=o(n(27)),c=o(n(28)),f=o(n(0)),p=o(n(2)),m=o(n(5)),y=o(n(55)),h=o(n(368)),g=o(n(1097)),_=o(n(1135)),v=n(1155);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=m.default.bind(g.default),T={header:p.default.element,menu:p.default.element,menuText:p.default.string,children:p.default.element},E=function(e){(0,s.default)(o,e);var t,n=(t=o,function(){var e,n=(0,c.default)(t);if(P()){var o=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function o(e){var t;return(0,i.default)(this,o),(t=n.call(this,e)).toggleMenu=t.toggleMenu.bind((0,u.default)(t)),t.togglePin=t.togglePin.bind((0,u.default)(t)),t.updateSize=(0,h.default)(t.updateSize.bind((0,u.default)(t)),100),t.renderHeader=t.renderHeader.bind((0,u.default)(t)),t.renderMenu=t.renderMenu.bind((0,u.default)(t)),t.renderContent=t.renderContent.bind((0,u.default)(t)),t.state=o.stateForProps(e,{size:(0,v.getBreakpointSize)(),prevProps:t.props}),t}return(0,l.default)(o,null,[{key:"stateForProps",value:function(e,t){var n="tiny"===t.size||"small"===t.size,o=!n,a=!!e.menu;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t||{},{isFixedMenu:o,isToggleMenu:n,menuIsPresent:a,menuIsOpen:a&&(t.menuIsOpen||o),menuIsPinned:a&&t.menuIsPinned})}},{key:"getDerivedStateFromProps",value:function(e,t){return e!==t.prevProps?o.stateForProps(e,t):null}}]),(0,l.default)(o,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=(0,v.getBreakpointSize)();this.state.size!==e&&this.setState(o.stateForProps(this.props,{size:e}))}},{key:"toggleMenu",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}),t)}))}},{key:"togglePin",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsPinned:!e.menuIsPinned}}),t)}))}},{key:"renderHeader",value:function(){var e=this.props.header,t=this.state,n=t.size,o=t.menuIsOpen,a=t.isToggleMenu,r=t.menuIsPresent;if(!e)return null;var i=a&&r;return f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:i?this.toggleMenu:void 0,menuIsOpen:o}})}},{key:"renderMenu",value:function(){var e=this.props.menu,t=this.state,n=t.size,o=t.menuIsOpen,a=t.menuIsPinned,r=t.isToggleMenu,i=t.menuIsPresent,u=r&&i;return i?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:u?this.toggleMenu:void 0,menuIsOpen:o,menuIsPinned:a}}):null}},{key:"renderContent",value:function(){var e=this.props.children,t=this.state,n=t.size,o=t.menuIsOpen,a=t.isToggleMenu,r=t.menuIsPresent,i=a&&r;return f.default.createElement(y.default,{fill:!0,header:a&&this.renderHeader(),className:O("content-container")},e?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:i?this.toggleMenu:void 0,menuIsOpen:o}}):null)}},{key:"render",value:function(){var e=this.props.menuText,t=this.state,n=t.menuIsOpen,o=t.menuIsPinned,r=t.size,i=t.isFixedMenu,u=t.isToggleMenu;return f.default.createElement(y.default,(0,a.default)({fill:!0,header:!u&&this.renderHeader()},(0,v.getCustomProps)(this.props,T)),f.default.createElement(_.default,{panelContent:this.renderMenu(),panelBehavior:o||i?"squish":"overlay",size:r,onToggle:this.toggleMenu,toggleText:e,isOpen:n,isAnimated:!0},this.renderContent()))}}]),o}(f.default.Component);E.propTypes=T;var S=E;t.default=S},1135:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(17)),r=o(n(22)),i=o(n(24)),u=o(n(25)),l=o(n(29)),s=o(n(26)),d=o(n(27)),c=o(n(28)),f=o(n(0)),p=o(n(2)),m=o(n(5)),y=o(n(235)),h=o(n(236)),g=o(n(1069)),_=o(n(1097));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=m.default.bind(_.default),P={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},O=function(e){(0,s.default)(o,e);var t,n=(t=o,function(){var e,n=(0,c.default)(t);if(v()){var o=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,d.default)(this,e)});function o(e){var t;return(0,i.default)(this,o),(t=n.call(this,e)).setPanelNode=t.setPanelNode.bind((0,l.default)(t)),t.handleTransitionEnd=t.handleTransitionEnd.bind((0,l.default)(t)),t.preparePanelForTransition=t.preparePanelForTransition.bind((0,l.default)(t)),t.isHidden=!e.isOpen,t}return(0,u.default)(o,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,g.default)(this.panelNode)[0]&&(0,g.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,o=(e.isToggleEnabled,e.children),i=e.panelBehavior,u=e.panelContent,l=e.size,s=e.onToggle,d=(e.toggleText,(0,r.default)(e,["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"]));this.preparePanelForTransition();var c="tiny"===l,p="small"===l,m=c||p,g=!!m||"overlay"===i,_=n&&g,v=m?"dark":"clear",P=b(["layout-slide-panel",{"is-open":n},{"is-overlay":g},{"is-squish":!g},d.className]),O=b(["panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&g&&!!u}]);return f.default.createElement("div",(0,a.default)({},d,{className:P}),f.default.createElement("div",{className:O,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},u),f.default.createElement(h.default,{className:b("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:s,isOpen:_,backgroundStyle:v,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:b("main-container")},o)))}}]),o}(f.default.Component);O.propTypes=P,O.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"};var T=O;t.default=T},1155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomProps=t.getBreakpointSize=void 0;var o=768,a=992,r=1216,i=1440;t.getBreakpointSize=function(e){var t=e||window.innerWidth;return t>=i?"huge":t>=r?"large":t>=a?"medium":t>=o?"small":"tiny"};t.getCustomProps=function(e,t){return Object.keys(e).filter((function(e){return!Object.keys(t).includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}},1230:function(e,t,n){e.exports={"panel-content":"TestLayoutCommon-module__panel-content___2CkcC","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___3FD5f","content-wrapper":"TestLayoutCommon-module__content-wrapper___3fQ-z","layout-test":"TestLayoutCommon-module__layout-test___2lyVY"}},1469:function(e,t,n){e.exports={"content-wrapper1":"LayoutTestCommon-module__content-wrapper1___autmK","content-wrapper2":"LayoutTestCommon-module__content-wrapper2___dEkRh","content-text":"LayoutTestCommon-module__content-text___3roMM","test-content-toggle":"LayoutTestCommon-module__test-content-toggle___3KNWJ","test-menu-toggle":"LayoutTestCommon-module__test-menu-toggle___34A6a"}},1470:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(2)),i=o(n(5)),u=o(n(1469)),l=i.default.bind(u.default),s={layoutConfig:r.default.object},d=function(e){var t=e.layoutConfig;return a.default.createElement("div",{id:"test-content",className:l("content-wrapper1")},a.default.createElement("div",{className:l("content-wrapper2")},a.default.createElement("h2",{className:l("content-text")},"Content"),t.toggleMenu&&a.default.createElement("button",{type:"button",className:l("test-content-toggle"),onClick:t.toggleMenu},"Toggle Menu")))};d.propTypes=s;var c=d;t.default=c}}]);
//# sourceMappingURL=19-f8d537b5a8c063279366.js.map