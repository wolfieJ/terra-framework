import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SonOfDataGridSrc from '!raw-loader!../../../../src/SonOfDataGrid.jsx';

// Example Files
import SonOfDataGridStandard from '../example/SonOfDataGridStandard';
import SonOfDataGridStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SonOfDataGridStandard.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Layout - Standard',
        example: <SonOfDataGridStandard />,
        source: SonOfDataGridStandardSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: SonOfDataGridSrc,
      },
    ]}
  />
);

export default DocPage;
