import React from 'react';
import Button from 'terra-button';
import { NotificationDialogVariants } from '../../../NotificationDialog';
import withNotificationDialog from '../../../withNotificationDialog';

class WithNotificationDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const properties = {
      variant: NotificationDialogVariants.ALERT,
      isOpen: this.state.isOpen,
      onRequestClose: this.handleCloseModal,
      title: 'Make sure that the title relates directly to the choices.',
      message: 'The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.',
      primaryAction: {
        text: 'Close',
        onClick: this.handleCloseModal,
      },
    };

    return (
      <div>
        {withNotificationDialog(properties)}
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default WithNotificationDialog;
