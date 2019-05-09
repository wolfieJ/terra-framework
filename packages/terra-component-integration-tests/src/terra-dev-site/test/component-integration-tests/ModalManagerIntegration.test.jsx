import React from 'react';
import DisclosureComponent from './DisclosureIntegrationComponent';
import ModalManager from '../../../../../terra-modal-manager/src/ModalManager';

const ModalManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
