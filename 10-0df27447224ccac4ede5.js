(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1107:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(17)),u=l(n(22)),a=l(n(24)),o=l(n(25)),r=l(n(29)),d=l(n(26)),s=l(n(27)),c=l(n(28)),f=l(n(0)),h=l(n(169)),p=l(n(2)),b=l(n(5)),m=n(8),C=l(n(1649)),v=l(n(1650)),y=l(n(1651)),g=l(n(1652)),O=l(n(1170));function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R=b.default.bind(O.default),_={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func},w=function(e){(0,d.default)(l,e);var t,n=(t=l,function(){var e,n=(0,c.default)(t);if(k()){var l=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function l(e){var t;return(0,a.default)(this,l),(t=n.call(this,e)).setContainer=t.setContainer.bind((0,r.default)(t)),t.setMenuButton=t.setMenuButton.bind((0,r.default)(t)),t.resetCache=t.resetCache.bind((0,r.default)(t)),t.handleResize=t.handleResize.bind((0,r.default)(t)),t.resetCache(),t}return(0,o.default)(l,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,i=!0,u=0;u<f.default.Children.count(this.props.children);u+=1){if((l+=this.container.children[u].getBoundingClientRect().width)>t){if(u===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[u].type===g.default?u-1:u,i=!1;break}}this.menuHidden===i&&this.hiddenStartIndex===n||(this.menuHidden=i,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,a=(0,u.default)(e,["children","boundingRef","menuWidth"]),o=f.default.Children.toArray(t),r=null;this.hiddenStartIndex>=0&&(r=o.splice(this.hiddenStartIndex));var d=R(["collapsible-menu-view",{"is-calculating":this.isCalculating},a.className]),s=R(["menu-button",{hidden:this.menuHidden}]);return f.default.createElement("div",(0,i.default)({},a,{className:d,ref:this.setContainer}),o,f.default.createElement("div",{className:s,ref:this.setMenuButton},f.default.createElement(m.FormattedMessage,{id:"Terra.collapsibleMenuView.more"},(function(e){return f.default.createElement(C.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:R("menu-button-icon")}),subMenuItems:r,boundingRef:n,menuWidth:l,isIconOnly:!0,text:e,variant:"utility"})}))))}}]),l}(f.default.Component);w.Item=C.default,w.ItemGroup=v.default,w.Toggle=y.default,w.Divider=g.default,w.propTypes=_;var I=w;t.default=I},1170:function(e,t,n){e.exports={"collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___UehgZ","menu-button":"CollapsibleMenuView-module__menu-button___23yfZ",hidden:"CollapsibleMenuView-module__hidden___3lTG_","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___1s1aJ","face-up-item":"CollapsibleMenuView-module__face-up-item___1mdkC",control:"CollapsibleMenuView-module__control___JE6_O","is-disabled":"CollapsibleMenuView-module__is-disabled___2NTUN",divider:"CollapsibleMenuView-module__divider___3t71g","is-calculating":"CollapsibleMenuView-module__is-calculating___1UDtu"}},1397:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(17)),u=l(n(22)),a=l(n(24)),o=l(n(25)),r=l(n(29)),d=l(n(26)),s=l(n(27)),c=l(n(28)),f=l(n(0)),h=l(n(2)),p=l(n(5)),b=l(n(359)),m=l(n(1170));function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=p.default.bind(m.default),y={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},g={isCollapsibleMenuItem:h.default.bool},O=function(e){(0,d.default)(l,e);var t,n=(t=l,function(){var e,n=(0,c.default)(t);if(C()){var l=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function l(e){var t;return(0,a.default)(this,l),(t=n.call(this,e)).handleRequestClose=t.handleRequestClose.bind((0,r.default)(t)),t.wrappedOnClick=t.wrappedOnClick.bind((0,r.default)(t)),t.wrapButtonClick=t.wrapButtonClick.bind((0,r.default)(t)),t.wrapChildrenOnClick=t.wrapChildrenOnClick.bind((0,r.default)(t)),t.setButtonNode=t.setButtonNode.bind((0,r.default)(t)),t.getButtonNode=t.getButtonNode.bind((0,r.default)(t)),t.state={isOpen:!1},t}return(0,o.default)(l,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var i=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:i})}else if(e.props.subMenuItems){var u=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:u})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,a=(0,u.default)(e,["children","button","contentWidth"]),o=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)});return f.default.createElement("div",{className:v("face-up-item"),ref:this.setButtonNode},f.default.createElement(b.default,(0,i.default)({},a,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),o)}}]),l}(f.default.Component);O.propTypes=y,O.childContextTypes=g,O.Item=b.default.Item,O.ItemGroup=b.default.ItemGroup,O.Opts={widths:b.default.Opts.widths};var k=O;t.default=k},1649:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(17)),u=l(n(165)),a=l(n(22)),o=l(n(24)),r=l(n(25)),d=l(n(29)),s=l(n(26)),c=l(n(27)),f=l(n(28)),h=l(n(0)),p=l(n(2)),b=l(n(5)),m=l(n(59)),C=l(n(1128)),v=l(n(1397)),y=l(n(1170));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=b.default.bind(y.default),R={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},_={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},w=function(e){(0,s.default)(l,e);var t,n=(t=l,function(){var e,n=(0,f.default)(t);if(O()){var l=(0,f.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,c.default)(this,e)});function l(e){var t;return(0,o.default)(this,l),(t=n.call(this,e)).setButtonNode=t.setButtonNode.bind((0,d.default)(t)),t.getButtonNode=t.getButtonNode.bind((0,d.default)(t)),t}return(0,r.default)(l,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,o=e.text,r=e.isSelected,d=e.isDisabled,s=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,a.default)(e,["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"]),b=this.context,y=b.isCollapsibleGroupItem,O=b.isCollapsibleMenuItem,R=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return O?h.default.createElement(v.default.Item,(0,i.default)({},R,{text:o,isSelected:r&&y,isDisabled:d,subMenuItems:s})):y?h.default.createElement(C.default.Button,(0,i.default)({},R,{icon:t,text:o,isDisabled:d})):s&&s.length>0?h.default.createElement(v.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(m.default,(0,i.default)({},R,{icon:t,text:o,isReversed:l,isDisabled:d,onClick:this.handleButtonClick,isIconOnly:n}))},s):h.default.createElement("div",{className:k("face-up-item")},h.default.createElement(m.default,(0,i.default)({},R,{icon:t,text:o,isReversed:l,isDisabled:d,isIconOnly:n})))}}]),l}(h.default.Component);w.propTypes=R,w.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},w.contextTypes=_,w.Opts={widths:v.default.Opts.widths};var I=w;t.default=I},1650:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(17)),u=l(n(22)),a=l(n(24)),o=l(n(25)),r=l(n(29)),d=l(n(26)),s=l(n(27)),c=l(n(28)),f=l(n(0)),h=l(n(2)),p=l(n(5)),b=l(n(1128)),m=l(n(1397)),C=l(n(1170));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=p.default.bind(C.default),g={onChange:h.default.func,children:h.default.node.isRequired,selectedKeys:h.default.arrayOf(h.default.string)},O={isCollapsibleGroupItem:h.default.bool},k={isCollapsibleMenuItem:h.default.bool},R=function(e){(0,d.default)(l,e);var t,n=(t=l,function(){var e,n=(0,c.default)(t);if(v()){var l=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function l(e){var t;return(0,a.default)(this,l),(t=n.call(this,e)).handleOnChange=t.handleOnChange.bind((0,r.default)(t)),t}return(0,o.default)(l,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,a=(0,u.default)(e,["children","onChange","selectedKeys"]),o=this.context.isCollapsibleMenuItem;if(o&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(m.default.ItemGroup,(0,i.default)({},a,{onChange:this.handleOnChange}),t));if(o)return f.default.createElement("div",a,t);var r=y(["face-up-item",a.className]);return f.default.createElement(b.default,(0,i.default)({},a,{onChange:n,className:r,selectedKeys:l}),t)}}]),l}(f.default.Component);R.propTypes=g,R.defaultProps={selectedKeys:[]},R.childContextTypes=O,R.contextTypes=k;var _=R;t.default=_},1651:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(17)),u=l(n(22)),a=l(n(24)),o=l(n(25)),r=l(n(29)),d=l(n(26)),s=l(n(27)),c=l(n(28)),f=l(n(0)),h=l(n(2)),p=l(n(5)),b=l(n(1238)),m=l(n(1397)),C=l(n(1170));function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=p.default.bind(C.default),g={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},O={isCollapsibleMenuItem:h.default.bool},k=function(e){(0,d.default)(l,e);var t,n=(t=l,function(){var e,n=(0,c.default)(t);if(v()){var l=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function l(e){var t;return(0,a.default)(this,l),(t=n.call(this,e)).wrappedOnChange=t.wrappedOnChange.bind((0,r.default)(t)),t}return(0,o.default)(l,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,a=e.isDisabled,o=e.onChange,r=(e.shouldCloseOnClick,(0,u.default)(e,["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"])),d=this.context.isCollapsibleMenuItem,s=y(["control",{"is-disabled":a||!l},r.className]);return d?f.default.createElement(m.default.Item,(0,i.default)({},r,{text:t,isSelected:n,isSelectable:l,isDisabled:a,onChange:o})):f.default.createElement("div",{className:y(["face-up-item"])},f.default.createElement(b.default,(0,i.default)({},r,{className:s,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:a||!l})))}}]),l}(f.default.Component);k.propTypes=g,k.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},k.contextTypes=O;var R=k;t.default=R},1652:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),u=l(n(2)),a=l(n(5)),o=l(n(359)),r=l(n(1170)),d=a.default.bind(r.default),s={isCollapsibleMenuItem:u.default.bool},c=function(e,t){return t.isCollapsibleMenuItem?i.default.createElement(o.default.Divider,null):i.default.createElement("div",{className:d(["divider","face-up-item"])})};c.contextTypes=s;var f=c;t.default=f}}]);
//# sourceMappingURL=10-0df27447224ccac4ede5.js.map