import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import { DisclosureManagerV2, availableDisclosureSizes } from 'terra-disclosure-manager';
import styles from '../ModalManager.module.scss';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * An Object (or a function that returns an Object) that defines the strings presented to the user by the DisclosureManager's NavigationPromptCheckpoints.
   */
  navigationPromptOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    rejectButtonText: PropTypes.string,
    acceptButtonText: PropTypes.string,
    emphasizedAction: PropTypes.oneOf(['accept', 'reject']),
  })]).isRequired,
  disclosureAccessory: React.element,
};

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

class ModalManagerV2 extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(manager) {
    const { children, ...customProps } = this.props;

    const topComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
    const topComponentData = manager.disclosureComponentData[topComponentKey] || {};
    const headerDataForDisclosedComponent = topComponentData.headerAdapter || {};

    const containerClassNames = cx([
      'container',
      customProps.className,
    ]);

    const classArray = ['modal-manager'];
    const isFullscreen = manager.minimizeDisclosure || topComponentData.size === availableDisclosureSizes.FULLSCREEN;
    if (!isFullscreen) {
      if (typeof topComponentData.size === 'object') {
        classArray.push(`height-${topComponentData.size.height}`, `width-${topComponentData.size.width}`);
      } else if (typeof topComponentData.size === 'string') {
        classArray.push(`height-${heightFromSize[topComponentData.size]}`, `width-${widthFromSize[topComponentData.size]}`);
      }
    }

    return (
      <div {...customProps} className={containerClassNames}>
        {manager.wrappedChildren}
        <AbstractModal
          isOpen={!!manager.disclosureComponentKeys.length}
          isFullscreen={isFullscreen}
          classNameModal={cx(classArray)}
          onRequestClose={() => {
            if (!headerDataForDisclosedComponent.blockNavigation) {
              manager.popDisclosureStack();
            }
          }}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <ContentContainer
            fill
            header={(
              <React.Fragment>
                <ActionHeader
                  title={headerDataForDisclosedComponent && headerDataForDisclosedComponent.title}
                  onClose={manager.disclosureComponentKeys.length === 1 && !headerDataForDisclosedComponent.blockNavigation ? manager.popDisclosureStack : undefined}
                  onBack={manager.disclosureComponentKeys.length > 1 && !headerDataForDisclosedComponent.blockNavigation ? manager.popDisclosureStack : undefined}
                >
                  {headerDataForDisclosedComponent && headerDataForDisclosedComponent.actions}
                </ActionHeader>
                {this.props.disclosureAccessory}
              </React.Fragment>
            )}
          >
            {manager.disclosureComponentKeys.map((key, index) => (
              <div
                key={key}
                style={{
                  height: '100%', overflow: 'auto', backgroundColor: 'white', position: 'relative', display: (index !== manager.disclosureComponentKeys.length - 1 ? 'none' : 'block'), width: '100%',
                }}
              >
                {manager.disclosureComponentData[key].component}
              </div>
            ))}
          </ContentContainer>
        </AbstractModal>
      </div>
    );
  }

  render() {
    const { children, navigationPromptOptions } = this.props;

    return (
      <DisclosureManagerV2
        supportedDisclosureTypes={[disclosureType]}
        render={this.renderModal}
        navigationPromptOptions={navigationPromptOptions}
        trapNestedDisclosureRequests
      >
        {children}
      </DisclosureManagerV2>
    );
  }
}

ModalManagerV2.propTypes = propTypes;

export default ModalManagerV2;
