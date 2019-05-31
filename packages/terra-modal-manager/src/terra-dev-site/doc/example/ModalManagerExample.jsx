import React from 'react';
import classNames from 'classnames/bind';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ModalManager from 'terra-modal-manager/lib/ModalManager';
import styles from 'terra-modal-manager/lib/terra-dev-site/doc/example/example-styles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import ContentComponent from './ContentComponent';

const cx = classNames.bind(styles);

const exampleTitle = 'Descriptive Notification Prompt Title';
const exampleMessage = 'A Notification Prompt usually has an introductory warning instructing the user that there are unsaved changes or that there is a similar situation that warrants capturing the user\'s attention and requires that they take action before continuing.\n\nIt is good practice to include details about the originating source (page name, side-panel title, modal header title, etc.) and location description (form name, title from the section of the page, general position, etc.) to provide the user a contextual reference as to where they have an area needing attention: e.g. where data is about to be lost, the window about to be closed, the section about to be removed. Following the initial details, it is helpful to include a detailed description educating the user about any danger or caution as to what will happen to the current items about to be lost (form data, page content, etc.) if the user chooses each of the two actions provided in the notification prompt message.';
const exampleRejectButtonText = 'Descriptive Reject Button Action';
const exampleAcceptButtonText = 'Descriptive Accept Button Action';

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager
      navigationPromptOptions={{
        title: exampleTitle,
        message: exampleMessage,
        rejectButtonText: exampleRejectButtonText,
        acceptButtonText: exampleAcceptButtonText,
      }}
    >
      <ContentComponent disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerExample;
