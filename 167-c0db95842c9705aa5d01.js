(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1015:function(e,t,n){e.exports={"form-input":"Input-module__form-input___2z_wq","form-error":"Input-module__form-error___IGQwF","form-incomplete":"Input-module__form-incomplete___3zAWO"}},1028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(2)),i=u(n(5)),l=u(n(1015));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=i.default.bind(l.default),g={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,name:a.default.string,pattern:a.default.string,placeholder:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},O={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,placeholder:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},F=function(e){function t(){return p(this,t),b(this,v(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,a=t.disabled,i=t.isIncomplete,l=t.isInvalid,u=t.onBlur,o=t.onChange,p=t.onFocus,f=t.name,b=t.pattern,v=t.placeholder,h=t.refCallback,g=t.required,O=t.type,F=t.ariaLabel,S=t.value,k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","placeholder","refCallback","required","type","ariaLabel","value"])),x=y(["form-input",{"form-error":l},{"form-incomplete":i&&g&&!l},k.className]);return k&&Object.prototype.hasOwnProperty.call(k,"aria-label")?e=F||k["aria-label"]:F&&(e=F),k["aria-label"]=e,g&&(k["aria-required"]="true"),void 0!==S?k.value=S:void 0!==n&&(k.defaultValue=n),r.default.createElement("input",s({},k,{ref:function(e){h&&h(e)},name:f,type:O,pattern:b,placeholder:v,onBlur:u,onChange:o,onFocus:p,disabled:a,required:g,className:x}))}}])&&f(n.prototype,a),i&&f(n,i),t}(r.default.Component);F.propTypes=g,F.defaultProps=O,F.isInput=!0;var S=F;t.default=S},1138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),i=n(1010),l=n.n(i),u=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-form-validation",version:"1.31.0",url:t})}},1711:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(165)),i=r(n(24)),l=r(n(25)),u=r(n(29)),o=r(n(26)),s=r(n(27)),d=r(n(28)),c=r(n(1198)),m=r(n(1199)),p=r(n(0)),f=n(1100),b=r(n(1101)),v=r(n(59)),h=r(n(363));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(){var e=(0,m.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return t.length<3?e("Not long enough"):e("TerraUser"===t?"Name is Unavailable":"")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){(0,o.default)(r,e);var t,n=(t=r,function(){var e,n=(0,d.default)(t);if(O()){var r=(0,d.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function r(e){var t;return(0,i.default)(this,r),(t=n.call(this,e)).state={},t.submitForm=t.submitForm.bind((0,u.default)(t)),t}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:t},p.default.createElement(f.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"profile-description",label:"Description",error:n.error,isInvalid:!n.valid,inputAttrs:g({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:F},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:n.error,isInvalid:"Name is Unavailable"===n.error,isIncomplete:"Not long enough"===n.error||"Required"===n.error,inputAttrs:g({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(h.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(p.default.Component);t.default=S},1712:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(165)),i=r(n(24)),l=r(n(25)),u=r(n(29)),o=r(n(26)),s=r(n(27)),d=r(n(28)),c=r(n(0)),m=n(1100),p=r(n(1101)),f=r(n(1238)),b=r(n(1501)),v=r(n(357)),h=r(n(1499)),y=r(n(1500)),g=r(n(59)),O=r(n(363)),F=r(n(372));function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var j=function(e){return e&&e.length>0?void 0:"Required"},E=function(e){(0,o.default)(r,e);var t,n=(t=r,function(){var e,n=(0,d.default)(t);if(x()){var r=(0,d.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function r(e){var t;return(0,i.default)(this,r),(t=n.call(this,e)).state={},t.submitForm=t.submitForm.bind((0,u.default)(t)),t}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.errors,r=e.submitFailed;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(m.Field,{name:"description",validate:j},(function(e){var t=e.input,n=e.meta;return c.default.createElement(p.default,{inputId:"description",label:"Description",error:n.error,isInvalid:n.submitFailed,inputAttrs:k({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement("div",null,c.default.createElement(y.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==n.meal,error:n.meal},c.default.createElement(m.Field,{name:"meal",type:"radio",value:"chicken",validate:j,component:function(e){var t=e.input;return c.default.createElement(h.default,{inputAttrs:k({},t),labelText:"Chicken",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"vegetarian",validate:j,component:function(e){var t=e.input;return c.default.createElement(h.default,{inputAttrs:k({},t),labelText:"Vegetarian",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"fish",validate:j,component:function(e){var t=e.input;return c.default.createElement(h.default,{inputAttrs:k({},t),labelText:"Fish",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}))),c.default.createElement(m.Field,{name:"travel",type:"select",validate:j,component:function(e){var t=e.input,n=e.meta;return c.default.createElement(v.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:n.submitFailed&&void 0!==n.error,error:n.error},c.default.createElement(F.default,{id:"airliner",name:t.name,onChange:function(e){t.onChange(e)},defaultValue:t.value,placeholder:"Select an Airline"},c.default.createElement(F.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),c.default.createElement(F.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),c.default.createElement(F.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),c.default.createElement("div",null,c.default.createElement(b.default,{legend:"What are all the conference tracks you plan on attending?",error:n.tracks,isInvalid:r&&void 0!==n.tracks},c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:j,component:function(e){var t=e.input;return c.default.createElement(f.default,{inputAttrs:k({},t),labelText:"Developer",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:j,component:function(e){var t=e.input;return c.default.createElement(f.default,{inputAttrs:k({},t),labelText:"Designer",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:j,component:function(e){var t=e.input;return c.default.createElement(f.default,{inputAttrs:k({},t),labelText:"Soft skills",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}))),c.default.createElement(g.default,{text:"Submit",type:g.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(O.default,{marginBottom:"small"},c.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(c.default.Component);t.default=E},1713:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(165)),i=r(n(24)),l=r(n(25)),u=r(n(29)),o=r(n(26)),s=r(n(27)),d=r(n(28)),c=r(n(1198)),m=r(n(1199)),p=r(n(0)),f=n(1100),b=r(n(1101)),v=r(n(59)),h=r(n(363));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(){var e=(0,m.default)(c.default.mark((function e(t){var n;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e("TerraUser"!==t?"":"Name is Unavailable")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){(0,o.default)(r,e);var t,n=(t=r,function(){var e,n=(0,d.default)(t);if(O()){var r=(0,d.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function r(e){var t;return(0,i.default)(this,r),(t=n.call(this,e)).state={},t.submitForm=t.submitForm.bind((0,u.default)(t)),t}return(0,l.default)(r,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.pristine,r=e.invalid;return p.default.createElement("form",{noValidate:!0,onSubmit:t},p.default.createElement(f.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"description-input",label:"Description",error:n.error,isInvalid:n.submitFailed&&void 0!==n.error,inputAttrs:g({placeholder:"Description"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:F},(function(e){var t=e.input,n=e.meta;return p.default.createElement(b.default,{inputId:"user-name-disabled",label:"User Name",error:n.error,isInvalid:n.submitFailed&&void 0!==n.error,onChange:function(e){t.onChange(e.target.value)},inputAttrs:g({placeholder:"Description"},t),value:t.value,required:!0})})),p.default.createElement(v.default,{text:"Submit",isDisabled:r||n,type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(h.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),r}(p.default.Component);t.default=S},2388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var r=n(17),a=n.n(r),i=n(22),l=n.n(i),u=n(0),o=n.n(u),s=n(354),d=n(1138),c=n(1711),m=n.n(c),p={};function f(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}f.isMDXComponent=!0;var b=n(1012),v=n.n(b),h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Validation On Input",description:n,example:o.a.createElement(m.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},y=n(1712),g=n.n(y),O={};function F(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={{\n                placeholder: \'Description\',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}F.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Validation On Submit",description:n,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(F,null),isExpanded:r})},k=n(1713),x=n.n(k),j={};function E(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},j,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}E.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(v.a,{title:t||"Validation Disable Submit",description:n,example:o.a.createElement(x.a,null),exampleSrc:o.a.createElement(E,null),isExpanded:r})},C={};function I(e){var t=e.components,n=l()(e,["components"]);return Object(s.mdx)("wrapper",a()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)(d.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"validation-events"},"Validation Events"),Object(s.mdx)("h2",{id:"dynamic-validation"},"Dynamic Validation"),Object(s.mdx)("p",null,"The default behavior of ",Object(s.mdx)("em",{parentName:"p"},"react-final-form")," is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below."),Object(s.mdx)("h2",{id:"display-validation-onsubmit"},"Display Validation onSubmit"),Object(s.mdx)("p",null,"Forms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below."),Object(s.mdx)("h2",{id:"disable-form-submission-for-an-invalid-form"},"Disable form submission for an invalid form"),Object(s.mdx)("p",null,"The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not."),Object(s.mdx)("p",null,"Consult ",Object(s.mdx)("a",a()({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"react-final-form")," for further functionality that can be used."),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(h,{title:"Validation onInput",mdxType:"ValidationOnInput"}),Object(s.mdx)(S,{title:"Validation onSubmit",mdxType:"ValidationOnSubmit"}),Object(s.mdx)(w,{title:"Validation Disable Submit",mdxType:"ValidationDisableSubmit"}))}I.isMDXComponent=!0}}]);
//# sourceMappingURL=167-c0db95842c9705aa5d01.js.map