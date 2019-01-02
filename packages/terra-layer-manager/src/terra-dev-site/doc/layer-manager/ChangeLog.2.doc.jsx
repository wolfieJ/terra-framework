import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-layer-manager"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-layer-manager"
    readme={ChangeLog}
  />
);

export default DocPage;
