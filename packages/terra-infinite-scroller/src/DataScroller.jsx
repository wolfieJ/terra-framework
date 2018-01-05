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
    this.updateItemCache = this.updateItemCache.bind(this);
    this.initializeItemCache = this.initializeItemCache.bind(this);

    this.initializeItemCache(props);
  }

  componentDidMount() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.triggerItemRequest();
  }

  componentWillReceiveProps(newProps) {
    const newChildCount = React.Children.count(newProps.children);
    if (newChildCount > this.childCount) {
      this.forcedMaxIndex = this.childCount;
      this.updateItemCache(newProps);
    } else if (newChildCount < this.childCount) {
      this.initializeItemCache(newProps);
    }
  }

  componentDidUpdate() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.update(); // ensure this works if not enough data as well
  }

  componentWillUnmount() {
    this.disableListeners();
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  triggerItemRequest() {
    if (!this.props.isFinishedLoading && !this.hasRequestedItems && this.props.onRequestItems) {
      this.hasRequestedItems = true;
      this.props.onRequestItems();
    }
  }

  updateItemCache(props) {
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);
    this.hasRequestedItems = false;
  }

  initializeItemCache(props) {
    this.itemsByIndex = [];
    this.scrollGroups = [];
    this.boundary = {
      topBoundryIndex: -1,
      hiddenTopHeight: -1,
      bottomBoundryIndex: -1,
      hiddenBottomHeight: -1,
    };
    this.updateItemCache(props);
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
    if (!this.contentNode) {
      return;
    }

    this.scrollHeight = this.contentNode.scrollHeight;
    const scrollTop = this.contentNode.scrollTop;
    const scrollHeight = this.contentNode.scrollHeight;
    const clientHeight = this.contentNode.clientHeight;
    const shouldTriggerRequest = scrollHeight - (scrollTop + clientHeight) < clientHeight;
    const notEnoughData = scrollHeight <= clientHeight;

    if (shouldTriggerRequest || notEnoughData) {
      this.triggerItemRequest();
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
