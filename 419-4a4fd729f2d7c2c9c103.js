(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1232:function(e,t,n){e.exports={content:"NavigationSideMenuDocCommon-module__content___qpu7Q","content-wrapper":"NavigationSideMenuDocCommon-module__content-wrapper___2TEdv",toolbar:"NavigationSideMenuDocCommon-module__toolbar___3R9ov"}},2276:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(24)),s=u(n(25)),l=u(n(29)),d=u(n(26)),i=u(n(27)),o=u(n(28)),c=u(n(0)),r=u(n(5)),f=u(n(1106)),b=u(n(1232));function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=r.default.bind(b.default),h=function(e){(0,d.default)(u,e);var t,n=(t=u,function(){var e,n=(0,o.default)(t);if(m()){var u=(0,o.default)(this).constructor;e=Reflect.construct(n,arguments,u)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function u(e){var t;return(0,a.default)(this,u),(t=n.call(this,e)).handleOnChange=t.handleOnChange.bind((0,l.default)(t)),t.resetMenuState=t.resetMenuState.bind((0,l.default)(t)),t.fakeRoutingBack=t.fakeRoutingBack.bind((0,l.default)(t)),t.state={selectedMenuKey:"menu",selectedChildKey:void 0},t}return(0,s.default)(u,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?c.default.createElement("div",{className:y("content")},c.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),c.default.createElement("p",null,"Parent Route")):c.default.createElement(f.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"],isRootMenu:!0},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),c.default.createElement("div",{className:y("content-wrapper")},e)}}]),u}(c.default.Component);t.default=h}}]);
//# sourceMappingURL=419-4a4fd729f2d7c2c9c103.js.map