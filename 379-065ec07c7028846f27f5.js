(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{1437:function(e,n){},1448:function(e){e.exports=JSON.parse('{"name":"terra-slide-panel-manager","main":"lib/SlidePanelManager.js","version":"5.31.0","description":"A DisclosureManager implementation that presents disclosed content using a SlidePanel.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"keywords":["Cerner","Terra","Framework","terra-slide-panel-manager","SlidePanelManager","DisclosureManager","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"homepage":"https://github.com/cerner/terra-framework#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","terra-disclosure-manager":"^4.16.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-action-header":"^2.0.0","terra-content-container":"^3.0.0","terra-slide-group":"^4.19.0","terra-slide-panel":"^3.25.0"},"devDependencies":{"terra-collapsible-menu-view":"^6.31.0","terra-doc-template":"^2.2.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-lowlight":"cd ../.. && THEME=clinical-lowlight-theme npx wdio ./packages/$npm_package_name/clinical-lowlight-wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-lowlight && npm run wdio-fusion"}}')},1967:function(e,n,r){"use strict";r.r(n),n.default="# Terra Slide Panel Manager - Upgrade Guide\n\n## Upgrading from v2.x to v3.x\n\nWith the release of terra-disclosure-manager v3.x, the SlidePanelManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. \n\nThe below example code details the changes necessary to interact with terra-slide-panel-manager v3.x.\n\n```diff\n/**\n * v2.x to v3.x\n */\n import Base from 'terra-base';\n import SlidePanelManager from 'terra-slide-panel-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Panel\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Panel\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'panel',\n          content: {\n            key: 'MY-PANEL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <SlidePanelManager>\n       <MyComponent />\n     </SlidePanelManager>\n   </Base>\n );\n```\n"},2061:function(e,n,r){"use strict";var a=r(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(r(0)),t=a(r(1426)),s=r(1448),i=a(r(1967)),p=function(){return o.default.createElement(t.default,{packageName:s.name,readme:i.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(s.name)})};n.default=p}}]);
//# sourceMappingURL=379-065ec07c7028846f27f5.js.map