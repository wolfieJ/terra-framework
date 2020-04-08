(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1010:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(2)),i=m(a(5)),d=m(a(1011));function m(e){return e&&e.__esModule?e:{default:e}}var o=i.default.bind(d.default),c={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},l=function(e){var t=e.name,a=e.url,r=e.version;return n.default.createElement("div",{className:o("badge-container")},n.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:o("badge-version")},"v".concat(r))))};l.propTypes=c;var p=l;t.default=p},1011:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1119:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(1010),d=a.n(i),m=function(e){var t=e.url;return r.a.createElement(d.a,{name:"terra-date-picker",version:"4.34.0",url:t})}},2042:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(17),r=a.n(n),i=a(22),d=a.n(i),m=(a(0),a(354)),o=a(1119),c={};function l(e){var t=e.components,a=d()(e,["components"]);return Object(m.mdx)("wrapper",r()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)(o.a,{mdxType:"Badge"}),Object(m.mdx)("h1",{id:"terra-date-time-picker-upgrade-guide"},"Terra Date Time Picker Upgrade Guide"),Object(m.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(m.mdx)("h3",{id:"removed-props"},"Removed props"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Removed ",Object(m.mdx)("inlineCode",{parentName:"li"},"minDateTime")),Object(m.mdx)("li",{parentName:"ul"},"Removed ",Object(m.mdx)("inlineCode",{parentName:"li"},"maxDateTime")),Object(m.mdx)("li",{parentName:"ul"},"Removed ",Object(m.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),Object(m.mdx)("li",{parentName:"ul"},"Removed ",Object(m.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),Object(m.mdx)("h3",{id:"new-props"},"New props"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"minDate")),Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"maxDate")),Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"onBlur")),Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"onFocus")),Object(m.mdx)("li",{parentName:"ul"},"Added ",Object(m.mdx)("inlineCode",{parentName:"li"},"onClickOutside"))),Object(m.mdx)("h3",{id:"changes-to-mindate-and-maxdate"},"Changes to minDate and maxDate"),Object(m.mdx)("p",null,"The time portion of the ISO date provided in the old ",Object(m.mdx)("inlineCode",{parentName:"p"},"minDateTime")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," props are now being ignored in the internal validation implementation and checking for ranges. Hence, these two props are renamed from ",Object(m.mdx)("inlineCode",{parentName:"p"},"minDateTime")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," to ",Object(m.mdx)("inlineCode",{parentName:"p"},"minDate")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"maxDate")," respectively. To uplift change ",Object(m.mdx)("inlineCode",{parentName:"p"},"minDateTime")," to ",Object(m.mdx)("inlineCode",{parentName:"p"},"minDate")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," to ",Object(m.mdx)("inlineCode",{parentName:"p"},"maxDate")," where applicable."),Object(m.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",Object(m.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from one date time element to another date time element of the same date-time-picker component. For example, the focus is moved from the date input to the hour input.  The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date time picker component did not have focus and now just gained focus. However, if the focus is then moved from one date time element to another date time element, the ",Object(m.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date time picker container. The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",Object(m.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",Object(m.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from one date time element to another date time element of the same date-time-picker component. The ",Object(m.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date time picker component."),Object(m.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),Object(m.mdx)("p",null,"The parameter in the ",Object(m.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks. To uplift create a new moment using the iSO date in the parameter."),Object(m.mdx)("pre",null,Object(m.mdx)("code",r()({parentName:"pre"},{className:"language-diff"}),"import React from 'react';\nimport moment from 'moment';\nimport DateTimePicker from 'terra-date-time-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DateTimePicker\n        name=\"date-time-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),Object(m.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(m.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(m.mdx)("h4",{id:"renamed"},"Renamed"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",r()({parentName:"tr"},{align:null}),"Previous"),Object(m.mdx)("th",r()({parentName:"tr"},{align:null}),"New"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-clarification-modal-background-color"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-picker-clarification-modal-background-color")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-clarification-modal-border"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-picker-clarification-modal-border")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-clarification-modal-border-radius"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-picker-clarification-modal-border-radius")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-clarification-modal-box-shadow"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-picker-clarification-modal-box-shadow")),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-clarification-modal-foreground-color"),Object(m.mdx)("td",r()({parentName:"tr"},{align:null}),"--terra-date-time-picker-clarification-modal-color")))),Object(m.mdx)("h4",{id:"added"},"Added"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-background-color"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-border-bottom-color"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-color"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-height"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-padding"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-title-font-size"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-title-line-height"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-button-offset-background-color"),Object(m.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-button-offset-height")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=295-4300d7544a535e744ff6.js.map