/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ComponentIntegrationTestsSrc from '!raw-loader!../../../../src/ComponentIntegrationTests';

// Example Files
import DefaultComponentIntegrationTests from '../example/DefaultComponentIntegrationTests';
import DefaultComponentIntegrationTestsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultComponentIntegrationTests.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default ComponentIntegrationTests',
        example: <DefaultComponentIntegrationTests />,
        source: DefaultComponentIntegrationTestsSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'ComponentIntegrationTests',
          componentSrc: ComponentIntegrationTestsSrc,
        },
    ]}
  />
);

export default DocPage;
