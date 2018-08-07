/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import InfiniteTableSrc from '!raw-loader!../../../../src/InfiniteTable.jsx';
import InfiniteTableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InfiniteTableExample.jsx';

// Example Files
import InfiniteTableExample from '../example/InfiniteTableExample';

const DocPage = () => (
  <DocTemplate
    // packageName={name}
    // readme={ReadMe}
    // srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Infinite List',
        example: <InfiniteTableExample />,
        source: InfiniteTableExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: InfiniteTableSrc,
      },
    ]}
  />
);

export default DocPage;
