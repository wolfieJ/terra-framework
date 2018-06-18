import React from 'react';
import NotificationDialog from './NotificationDialog';

const withNotificationDialog = (properties) => {
  const divTarget = document.createElement('div');
  divTarget.id = 'notification-dialog';
  document.body.appendChild(divTarget);
  return (<NotificationDialog {...properties} />);
};

export default withNotificationDialog;
