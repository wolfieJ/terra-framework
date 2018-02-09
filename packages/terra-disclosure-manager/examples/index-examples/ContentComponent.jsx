import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import AppDelegate from 'terra-app-delegate';
import ActionHeader from 'terra-clinical-action-header';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import ResponsiveElement from 'terra-responsive-element';
import Arrange from 'terra-arrange';


import DisclosureComponent from './DisclosureComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  disclosureType: PropTypes.string,
};

class ContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemKey: 0, // Default first list item is selected
    };
    this.renderButton = this.renderButton.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick() {
    this.setState({
      selectedItemKey: this.state.selectedItemKey + 1,
    });
  }

  renderButton(size) {
    const { app, disclosureType } = this.props;

    return (
      <div>
        <Button
          text={`Disclose (${size})`}
          onClick={() => {
            app.disclose({
              preferredType: disclosureType,
              size,
              content: {
                key: `Content-Disclosure-${size}`,
                component: <DisclosureComponent name={`Disclosure Component (${size})`} disclosureType={disclosureType} />,
              },
            });
          }}
        />

      </div>
    );
  }

  render() {
    const { app, disclosureType } = this.props;
    const detailsContainerOne = (<div> I inside details container first </div>);
    const detailsContainerTwo = (<div> I inside details container Second </div>);

    const detailsContainerArray = [detailsContainerOne, detailsContainerTwo];
    const mobileView = (<SingleSelectList
      isDivided
      hasChevrons={false}
      onChange={() => {
        app.disclose({
          preferredType: disclosureType,
          size: 'medium',
          content: {
            key: 'Content-Disclosure-medium',
            component: <DisclosureComponent name={'Disclosure Component size'} disclosureType={disclosureType} display={detailsContainerArray} displayId={this.state.selectedItemKey} />,
          },
        });
      }}
    >
      {
        <SingleSelectList.Item
          content={(<div>I am list Item</div>)}
          isSelectable
        />
        }
    </SingleSelectList>);
    // Change the details view on click
    const desktopView = (
      <Arrange
        fitStart={
          (<SingleSelectList
            isDivided
            hasChevrons={false}
            onChange={this.handleListItemClick}
          >
            {
              <SingleSelectList.Item
                content={(<div>I am list Item</div>)}
                isSelectable
              />
              }
          </SingleSelectList>)
        }
        fill={detailsContainerArray[this.state.selectedItemKey]}
      />
    );
    return (

      <ResponsiveElement
        defaultElement={mobileView}
        responsiveTo="window"
        medium={desktopView}
      />
    );
  }
}

ContentComponent.propTypes = propTypes;

export default ContentComponent;
