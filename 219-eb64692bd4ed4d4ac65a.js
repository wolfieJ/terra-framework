(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1051:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(17)),n=i(a(22)),o=i(a(0)),d=i(a(2)),u=i(a(5)),s=a(8),r=i(a(1052)),c=u.default.bind(r.default),_={extensions:d.default.element,logo:d.default.element,intl:s.intlShape.isRequired,navigation:d.default.element,toggle:d.default.element,utilities:d.default.element},f=function(e){var t,a,i,d,u,s=e.extensions,r=e.logo,_=e.navigation,f=e.intl,m=e.toggle,p=e.utilities,v=(0,n.default)(e,["extensions","logo","navigation","intl","toggle","utilities"]),g=c(["header","fill",v.className]);r&&(t=o.default.createElement("div",{className:c(["fit","start","logo"])},r)),_&&(a=o.default.createElement("nav",{role:"navigation",className:c("fill")},_)),s&&(i=o.default.createElement("div",{className:c(["fit","end","extensions"])},s)),p&&(d=o.default.createElement("div",{className:c(["fit","end","utilities"])},p)),m&&(u=o.default.createElement("div",{className:c("fit")},m));var y,b=o.default.createElement("div",{className:c(["fill","header-inner"])},a,i),E=o.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:c("skip-content")},f.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(b||t||d)&&(y=o.default.createElement("div",{className:c(["fill","header-body"])},E,t,b,d)),o.default.createElement("div",(0,l.default)({},v,{className:g}),u,y)};f.propTypes=_;var m=(0,s.injectIntl)(f);t.default=m},1052:function(e,t,a){e.exports={fit:"ApplicationHeaderLayout-module__fit___tJJW8",fill:"ApplicationHeaderLayout-module__fill___1szI2",start:"ApplicationHeaderLayout-module__start___brKW8",end:"ApplicationHeaderLayout-module__end___3OIpZ","header-inner":"ApplicationHeaderLayout-module__header-inner___36bkj",logo:"ApplicationHeaderLayout-module__logo___1KF-r",utilities:"ApplicationHeaderLayout-module__utilities___1jy0T",extensions:"ApplicationHeaderLayout-module__extensions___17F-D","header-body":"ApplicationHeaderLayout-module__header-body___3Yoz6","skip-content":"ApplicationHeaderLayout-module__skip-content___1vGmQ"}},1992:function(e,t,a){e.exports={"test-navigation":"ApplicationHeaderDefault-test-module__test-navigation___1rxX9"}},2073:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(0)),n=i(a(5)),o=i(a(1051)),d=i(a(1992)),u=n.default.bind(d.default),s=function(){return l.default.createElement(o.default,{id:"test-header",extensions:l.default.createElement("div",{id:"test-extensions"},"Extensions "),navigation:l.default.createElement("div",{className:u("test-navigation"),id:"test-navigation"},"Navigation "),logo:l.default.createElement("div",{id:"test-logo"},"Logo "),toggle:l.default.createElement("div",{id:"test-toggle"},"Toggle "),utilities:l.default.createElement("div",{id:"test-utilities"},"Utilities ")})};t.default=s}}]);
//# sourceMappingURL=219-eb64692bd4ed4d4ac65a.js.map