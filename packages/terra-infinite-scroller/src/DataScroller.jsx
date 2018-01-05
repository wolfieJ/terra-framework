import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import styles from './DataScroller.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The ScrollerItem children to be placed within the infinite scroller..
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines whether or not the loading indicator is visible and if callbacks are triggered.
   */
  isFinishedLoading: PropTypes.bool,
  /**
   * Callback trigger when new scroller items are requested..
   */
  onRequestItems: PropTypes.func,
};

const defaultProps = {
  children: [],
  isFinishedLoading: false,
};


class DataScroller extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.enableListeners = this.enableListeners.bind(this);
    this.disableListeners = this.disableListeners.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.newItemCleanUp = this.newItemCleanUp.bind(this);
    this.resetSizeCache = this.resetSizeCache.bind(this);

    this.resetSizeCache(props);
  }

  componentDidMount() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.update();
  }

  componentWillReceiveProps(newProps) {
    const newChildCount = React.Children.count(newProps.children);
    if (newChildCount > this.childCount) {
      this.forcedMaxIndex = this.childCount;
      this.newItemCleanUp(newProps);// temp
    } else if (newChildCount < this.childCount) {
      this.resetSizeCache(newProps);
    }
  }

  componentDidUpdate() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }

    if (!this.hasForcedItems && this.forceRequestItems && this.props.onRequestItems) {
      this.props.onRequestItems();
    }
  }

  componentWillUnmount() {
    this.disableListeners();
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  newItemCleanUp(props) {
    this.childCount = React.Children.count(props.children);
    this.forceRequestItems = false;
    this.hasScrolledItems = false;
    this.hasForcedItems = false;
  }

  resetSizeCache(props) {
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);
  }

  enableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.contentNode.addEventListener('scroll', this.update);
    this.listenersAdded = true;
  }

  disableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.contentNode.removeEventListener('scroll', this.update); // consider tick
    this.listenersAdded = false;
  }

  update() {
    if (!this.hasRequestedItems && this.forceRequestItems && this.props.onRequestItems) {
      this.hasForcedItems = true;
      this.props.onRequestItems();
      return;
    }

    if (!this.contentNode) {
      return;
    }

    this.scrollHeight = this.contentNode.scrollHeight;
    const scrollTop = this.contentNode.scrollTop;
    const scrollHeight = this.contentNode.scrollHeight;
    const clientHeight = this.contentNode.clientHeight;
    const shouldTriggerRequest = scrollHeight - (scrollTop + clientHeight) < clientHeight;

    if (!this.props.isFinishedLoading && shouldTriggerRequest && this.props.onRequestItems && !this.hasScrolledItems) {
      this.hasScrolledItems = true;
      this.props.onRequestItems();
    }
  }

  render() {
    const {
      children,
      isFinishedLoading,
      onRequestItems,
      ...customProps
    } = this.props;

    if (this.childCount <= 0 && !isFinishedLoading) {
      this.forceRequestItems = true;
      return (
        <OverlayContainer className={cx(['full-loading'])} key="scroller-full-Loading">
          <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
        </OverlayContainer>
      );
    }

    let loadingSpinner;
    if (!isFinishedLoading) {
      loadingSpinner = (
        <OverlayContainer className={cx(['loading'])} key="scroller-Loading">
          <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
        </OverlayContainer>
      );
    }

    return (
      <div {...customProps} className={cx(['infinite-scroller', customProps.className])} ref={this.setContentNode}>
        {children}
        {loadingSpinner}
      </div>
    );
  }
}

DataScroller.propTypes = propTypes;
DataScroller.defaultProps = defaultProps;

export default DataScroller;
