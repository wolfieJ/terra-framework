(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1082:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(17)),d=a(t(22)),i=a(t(0)),u=a(t(229)),n=a(t(2)),r=a(t(5)),s=a(t(1094)),c=r.default.bind(s.default),_={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},f={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(_)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},m=function(e){var l=e.header,t=e.footer,a=e.children,n=e.onRequestClose,r=e.isOpen,s=e.ariaLabel,f=e.width,m=e.closeOnOutsideClick,h=e.rootSelector,p=(0,d.default)(e,["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"]);if(!r)return null;var g=["dialog-modal-wrapper"];return f in _?g.push("width-".concat(_[f])):g.push("width-1120"),i.default.createElement(u.default,{ariaLabel:s,role:"dialog",classNameModal:c(g),isOpen:r,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:m,rootSelector:h},i.default.createElement("div",(0,o.default)({},p,{className:c("dialog-modal-inner-wrapper",p.className)}),i.default.createElement("div",{className:c("dialog-modal-container")},i.default.createElement("div",null,l),i.default.createElement("div",{className:c("dialog-modal-body")},a),i.default.createElement("div",null,t))))};m.propTypes=f,m.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};var h=m;l.default=h},1094:function(e,l,t){e.exports={"dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___3L6PG","width-320":"DialogModal-module__width-320___1SJka","width-480":"DialogModal-module__width-480___2dOBX","width-560":"DialogModal-module__width-560___3zVv8","width-640":"DialogModal-module__width-640___2PEtl","width-800":"DialogModal-module__width-800___2rG5D","width-960":"DialogModal-module__width-960___wkRF0","width-1120":"DialogModal-module__width-1120___qNLsc","width-1280":"DialogModal-module__width-1280___1bosK","width-1440":"DialogModal-module__width-1440___1bYIL","width-1600":"DialogModal-module__width-1600___2Rb_O","width-1760":"DialogModal-module__width-1760___2xeul","width-1920":"DialogModal-module__width-1920___1Vq72","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___3kstA","dialog-modal-container":"DialogModal-module__dialog-modal-container___10XP8","dialog-modal-header":"DialogModal-module__dialog-modal-header___vojqY","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___2S67Y","dialog-modal-body":"DialogModal-module__dialog-modal-body___xtsrz"}},2209:function(e,l,t){"use strict";var a=t(6);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(24)),d=a(t(25)),i=a(t(29)),u=a(t(26)),n=a(t(27)),r=a(t(28)),s=a(t(0)),c=a(t(59)),_=a(t(84)),f=a(t(234)),m=a(t(1082));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p=function(e){(0,u.default)(a,e);var l,t=(l=a,function(){var e,t=(0,r.default)(l);if(h()){var a=(0,r.default)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,n.default)(this,e)});function a(){var e;return(0,o.default)(this,a),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(a,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(m.default,{ariaLabel:"Dialog Modal Long",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(_.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(f.default,{start:"Footer Goes here"})},s.default.createElement("p",null,e),s.default.createElement("p",null,e),s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),a}(s.default.Component);l.default=p}}]);
//# sourceMappingURL=370-44fe51d7dc5dd3525435.js.map