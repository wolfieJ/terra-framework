/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import DemoComponentSrc from '!raw-loader!../../../../src/DemoComponent';

// Example Files
import DefaultDemoComponent from '../example/DefaultDemoComponent';
import DefaultDemoComponentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDemoComponent.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default DemoComponent',
        example: <DefaultDemoComponent />,
        source: DefaultDemoComponentSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'DemoComponent',
          componentSrc: DemoComponentSrc,
        },
    ]}
  />
);

export default DocPage;
