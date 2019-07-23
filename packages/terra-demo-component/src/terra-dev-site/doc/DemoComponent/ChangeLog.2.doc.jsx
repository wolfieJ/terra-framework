import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="demo-component"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/demo-component"
    readme={ChangeLog}
  />
);

export default DocPage;
