/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../package.json';
import ReadMe from '../../../docs/README.md';

// Component Source
import ZoomSrc from '!raw-loader!../../../src/Zoom.jsx';
import ZoomExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ZoomExample.jsx';

// Example Files
import ZoomExample from './example/ZoomExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Zoom',
        example: <ZoomExample />,
        source: ZoomExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: ZoomSrc,
      },
    ]}
  />
);

export default DocPage;
