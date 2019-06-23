import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import Input from 'terra-form-input';
import ActionHeader from 'terra-action-header';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

import { withDisclosureManager, disclosureManagerShape, DisclosureHeaderAdapter } from 'terra-disclosure-manager';
import NavigationPrompt from 'terra-navigation-prompt';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string,
  disclosureType: PropTypes.string,
  disclosureManager: disclosureManagerShape,
};

const defaultProps = {
  name: 'Disclosure Component',
};

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: undefined,
    };
  }

  render() {
    const { disclosureManager, name, disclosureType } = this.props;
    const { text } = this.state;

    return (
      <div style={{ height: '1000px' }}>
        {text && text.length ? <NavigationPrompt description={name} /> : undefined}
        <DisclosureHeaderAdapter
          title={name}
          actions={name === 'Nested Disclosure Component (small)' ? (
            <CollapsibleMenuView>
              <CollapsibleMenuView.Toggle
                text="Toggle Item 1"
                key="toggle1"
              />
              <CollapsibleMenuView.Toggle
                text="Toggle Item 2"
                key="toggle2"
              />
              <CollapsibleMenuView.Divider key="Divider1" />
              <CollapsibleMenuView.Item
                text="Menu Button 1"
                key="MenuButton1"
                shouldCloseOnClick={false}
                subMenuItems={[
                  <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
                  <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
                ]}
              />
              <CollapsibleMenuView.Item
                text="Menu Button 2"
                key="MenuButton 2"
                shouldCloseOnClick={false}
                subMenuItems={[
                  <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
                  <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
                ]}
              />
            </CollapsibleMenuView>
          ) : undefined}
        />
        <div className={cx('content-wrapper')}>
          <h3>{name}</h3>
          <p>The disclosed component can disclose content within the same panel.</p>
          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>
          <Button
            text="Dismiss"
            onClick={() => {
              disclosureManager.dismiss()
                .catch(() => {
                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console
                });
            }}
          />
          <Button
            text="Disclose Again"
            onClick={() => {
              disclosureManager.disclose({
                preferredType: disclosureType,
                size: 'large',
                component: <WrappedDisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,
                onDismiss: () => {
                  console.log('onDismiss - content was dismissed');
                },
              });
            }}
          />
          <br />
          <br />
          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>
          <Input
            value={this.state.text || ''}
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
          />
          {this.state.text && this.state.text.length ? <p>Component has unsaved changes!</p> : null}
        </div>
      </div>
    );
  }
}

DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;

const WrappedDisclosureComponent = withDisclosureManager(DisclosureComponent);

export default withDisclosureManager(WrappedDisclosureComponent);
