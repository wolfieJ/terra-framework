import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="component-integration-tests"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/component-integration-tests"
    readme={ChangeLog}
  />
);

export default DocPage;
