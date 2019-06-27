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
  onSubmitValue: PropTypes.func,
};

const defaultProps = {
  name: 'Disclosure Component',
};

class DisclosureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    const { disclosureManager, name, disclosureType } = this.props;
    const { text } = this.state;

    console.log('Rendering DisclosureComponent');

    return (
      <div style={{ height: '1000px' }}>
        <DisclosureHeaderAdapter
          title={name}
          actions={name === 'Nested Disclosure Component ()' ? (
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
          <p>The disclosed component can disclose content within the same disclosure view.</p>
          <Button
            text="Disclose Again"
            onClick={() => {
              this.setState({
                valueFromDisclosure: undefined,
              }, () => {
                disclosureManager.disclose({
                  preferredType: disclosureType,
                  size: 'large',
                  component: (
                    <WrappedDisclosureComponent
                      name={`Nested ${name}`}
                      disclosureType={disclosureType}
                      onSubmitValue={(value) => {
                        this.setState({
                          valueFromDisclosure: value,
                        }, this.dismissDisclosure);
                      }}
                    />
                  ),
                  onDismiss: () => {
                    if (!this.state.valueFromDisclosure) {
                      console.log('onDismiss - content was dismissed without submitting value');
                    }
                  },
                }).then(({ dismissDisclosure }) => {
                  this.dismissDisclosure = dismissDisclosure;
                });
              });
            }}
          />
          <br />
          <br />
          <p>The disclosed component can provide callbacks to and receive data from the component it discloses.</p>
          <p>
            Value from disclosed component:
            {' '}
            <b>{this.state.valueFromDisclosure}</b>
          </p>
          <br />
          <br />
          <Button
            text="Update Size - tiny"
            onClick={() => {
              disclosureManager.setSize('tiny');
            }}
          />
          <Button
            text="Update Size - small"
            onClick={() => {
              disclosureManager.setSize('small');
            }}
          />
          <Button
            text="Update Size - medium"
            onClick={() => {
              disclosureManager.setSize('medium');
            }}
          />
          <Button
            text="Update Size - large"
            onClick={() => {
              disclosureManager.setSize('large');
            }}
          />
          <Button
            text="Update Size - huge"
            onClick={() => {
              disclosureManager.setSize('huge');
            }}
          />
          <Button
            text="Update Size - fullscreen"
            onClick={() => {
              disclosureManager.setSize('fullscreen');
            }}
          />
          <br />
          <br />
          <p>The disclosed component can render a NavigationPrompt to prevent navigation away from the view when unsaved state is present.</p>
          <p>Navigating away from this view with input present in the field below will prompt the user for confirmation.</p>
          <p>When the Submit Value button is pressed, a callback to the previous component is executed.</p>
          <Input
            value={this.state.text || ''}
            onChange={(event) => {
              this.setState({
                text: event.target.value || '',
              });
            }}
          />
          <Button
            text="Submit Value"
            isDisabled={!text.length}
            onClick={() => {
              if (this.props.onSubmitValue) {
                const textValue = this.state.text;
                this.setState({
                  text: '',
                }, () => {
                  this.props.onSubmitValue(textValue);
                });
              }
            }}
          />
          {text.length ? <NavigationPrompt description={name} /> : undefined}
        </div>
      </div>
    );
  }
}

DisclosureComponent.propTypes = propTypes;
DisclosureComponent.defaultProps = defaultProps;

const WrappedDisclosureComponent = withDisclosureManager(DisclosureComponent);

export default withDisclosureManager(WrappedDisclosureComponent);
