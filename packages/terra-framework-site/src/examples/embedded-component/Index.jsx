/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-embedded-component/docs/README.md';
import { version } from 'terra-embedded-component/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import EmbeddedComponentSrc from '!raw-loader!terra-embedded-component/src/EmbeddedComponent';

// Example Files
import DefaultEmbeddedComponent from './DefaultEmbeddedComponent';

const EmbeddedComponentExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={EmbeddedComponentSrc} />
    <h2>Examples</h2>
    <DefaultEmbeddedComponent />
  </div>
);

export default EmbeddedComponentExamples;
