import React from 'react';
import PropTypes from 'prop-types';
import { render, unmountComponentAtNode } from 'react-dom';
import Base, { intlShape } from 'terra-base';
import NotificationDialog from 'terra-notification-dialog';

const removeNotificationDialog = () => {
  const target = document.getElementById('terra-stateless-notification-dialog');
  unmountComponentAtNode(target);
  target.parentNode.removeChild(target);
};

const propTypes = {
  intl: intlShape,
};

class StatelessNotificationDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
  }

  handlePrimaryAction() {
    if (this.props.primaryAction.onClick) {
      this.props.primaryAction.onClick();
    }

    removeNotificationDialog();
  }

  handleSecondaryAction() {
    if (this.props.secondaryAction.onClick) {
      this.props.secondaryAction.onClick();
    }

    removeNotificationDialog();
  }

  render() {
    const { intl, primaryAction, secondaryAction } = this.props;

    let wrappedPrimaryAction;
    if (primaryAction) {
      wrappedPrimaryAction = {
        text: primaryAction.text,
        onClick: this.handlePrimaryAction,
      };
    }

    let wrappedSecondaryAction;
    if (secondaryAction) {
      wrappedSecondaryAction = {
        text: secondaryAction.text,
        onClick: this.handleSecondaryAction,
      };
    }

    return (
      <Base locale={(intl && intl.locale) || 'en'}>
        <NotificationDialog
          {...this.props}
          primaryAction={wrappedPrimaryAction}
          secondaryAction={wrappedSecondaryAction}
          isOpen
          onRequestClose={() => {}}
        />
      </Base>
    );
  }
}

StatelessNotificationDialog.propTypes = propTypes;

const presentNotificationDialog = (props) => {
  const divTarget = document.createElement('div');
  divTarget.id = 'terra-stateless-notification-dialog';
  document.body.appendChild(divTarget);
  render(<StatelessNotificationDialog {...props} />, divTarget);
};

export default StatelessNotificationDialog;
export {
  StatelessNotificationDialog,
  presentNotificationDialog,
  removeNotificationDialog,
};
