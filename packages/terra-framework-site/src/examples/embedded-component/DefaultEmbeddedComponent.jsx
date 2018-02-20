import React from 'react';
import EmbeddedComponent from '../../../../terra-embedded-component/src/EmbeddedComponent';
// import PlaceHolder from '../../app/common/Placeholder';

const aManifest = {
  "index.js": "index.js"
};

const DefaultEmbeddedComponent = () => (
  <div style={{ height: '450px', width: '300px' }}>
    <h2> 1st Example </h2>
    <EmbeddedComponent
      basePath="/test"
      placeholder={<div>placeholder</div>}
      // timeoutComponent={}
      // timeoutInterval={}
      // entry="index.js"
      // manifest={aManifest}
    />
  </div>
);

export default DefaultEmbeddedComponent;
