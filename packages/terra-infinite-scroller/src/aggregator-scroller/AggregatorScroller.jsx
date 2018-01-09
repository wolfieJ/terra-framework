import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ResizeObserver from 'resize-observer-polyfill';
import ScrollerUtils from '../utils/_ScrollerUtils';
import ScrollerItem from './_AggregatorScrollerItem';
import styles from './AggregatorScroller.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The ScrollerItem children to be placed within the infinite scroller..
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback trigger when new scroller items are requested..
   */
  requestedVisbleIndex: PropTypes.number,
};

const defaultProps = {
  children: [],
  requestedVisbleIndex: -1,
};

const createSpacer = (height, index) => <div className={cx(['spacer'])} style={{ height }} key={`scrollerSpacer-${index}`} />;

class AggregatorScroller extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.handleResize = this.throttle(this.handleResize.bind(this), 250);
    this.resetSizeCache = this.resetSizeCache.bind(this);
    this.enableListeners = this.enableListeners.bind(this);
    this.disableListeners = this.disableListeners.bind(this);
    this.updatePersistentItems = this.updatePersistentItems.bind(this);
    this.getPersistentItems = this.getPersistentItems.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.wrapChild = this.wrapChild.bind(this);

    this.resetSizeCache(props);
    this.cached = false;
    this.preventInitialAdjust = true;
    this.needsScrollUpdate = false;
  }

  componentDidMount() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }
    this.update();
  }

  componentWillReceiveProps(newProps) {
    if (React.Children.count(newProps.children) !== this.childCount) {
      this.resetSizeCache(newProps);
    }

    if (newProps.requestedVisbleIndex !== this.props.requestedVisbleIndex && newProps.requestedVisbleIndex >= 0) {
      this.scrollToIndex(newProps.requestedVisbleIndex);
    }
  }

  componentDidUpdate() {
    if (!this.listenersAdded) {
      this.enableListeners();
    }

    if (this.needsScrollUpdate) {
      this.scrollToIndex(this.props.requestedVisbleIndex);
    }

    this.preventUpdate = false;
  }

  componentWillUnmount() {
    this.disableListeners();
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getPersistentItems(persistentIndexes, startIndex, endIndex, spacerIndex) {
    const items = [];
    let newSpacerIndex = spacerIndex;
    let segmentHeight = 0;
    for (let i = startIndex; i <= endIndex; i += 1) {
      if (persistentIndexes.indexOf(i) >= 0) {
        if (segmentHeight > 0) {
          items.push(createSpacer(segmentHeight, newSpacerIndex));
          newSpacerIndex += 1;
          segmentHeight = 0;
        }
        items.push(this.wrapChild(this.childrenArray[i], i, false));
      } else {
        items.push(this.wrapChild(this.childrenArray[i], i, false));
        segmentHeight += this.itemsByIndex[i].height;
        if (i === endIndex) {
          items.push(createSpacer(segmentHeight, newSpacerIndex));
          newSpacerIndex += 1;
        }
      }
    }
    return { items, spacerIndex: newSpacerIndex };
  }

  getStandardItems(startIndex, endIndex, spacerIndex, spacerHeight) {
    const items = [];
    for (let i = startIndex; i <= endIndex; i += 1) {
      items.push(this.wrapChild(this.childrenArray[i], i, false));
    }
    items.push(createSpacer(spacerHeight, spacerIndex));
    return items;
  }

  getScrollContent() {
    let topSpacer = [];
    let bottomSpacer = [];
    const topItems = [];
    const bottomItems = [];
    let spacerIndex = 0;
    if (this.persistentItems.length) {
      this.persistentItems.forEach((persistentIndex) => {
        if (this.boundary.topBoundryIndex >= 0 && persistentIndex <= this.boundary.topBoundryIndex) {
          topItems.push(persistentIndex);
        } else if (this.boundary.bottomBoundryIndex >= 0 && persistentIndex >= this.boundary.bottomBoundryIndex) {
          bottomItems.push(persistentIndex);
        }
      });
    }

    if (topItems.length) {
      const persistent = this.getPersistentItems(topItems, 0, this.boundary.topBoundryIndex, spacerIndex);
      topSpacer = persistent.items;
      spacerIndex = persistent.spacerIndex;
    } else if (this.boundary.hiddenTopHeight > 0) {
      topSpacer = this.getStandardItems(0, this.boundary.topBoundryIndex, spacerIndex, this.boundary.hiddenTopHeight);
      spacerIndex += 1;
    }

    if (bottomItems.length) {
      const persistent = this.getPersistentItems(bottomItems, this.boundary.bottomBoundryIndex, this.itemsByIndex.length - 1, spacerIndex);
      bottomSpacer = persistent.items;
      spacerIndex = persistent.spacerIndex;
    } else if (this.boundary.hiddenBottomHeight > 0) {
      bottomSpacer = this.getStandardItems(this.boundary.bottomBoundryIndex, this.itemsByIndex.length - 1, spacerIndex, this.boundary.hiddenBottomHeight);
      spacerIndex += 1;
    }

    const visibleChildren = ScrollerUtils.getVisibleChildren(this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild);
    return topSpacer.concat(visibleChildren).concat(bottomSpacer);
  }

  updatePersistentItems() {
    this.persistentItems = [];
    this.itemsByIndex.forEach((item, itemIndex) => {
      if (item.isPersistent) {
        this.persistentItems.push(itemIndex);
      }
    });
  }

  resetSizeCache(props) {
    this.itemsByIndex = [];
    this.persistentItems = [];
    this.childCount = React.Children.count(props.children);
    this.childrenArray = React.Children.toArray(props.children);

    this.boundary = {
      topBoundryIndex: -1,
      hiddenTopHeight: -1,
      bottomBoundryIndex: -1,
      hiddenBottomHeight: -1,
    };
  }

  wrapChild(child, index, isRenderable) {
    const wrappedCallBack = (node) => {
      this.updateHeight(node, index, child.props.isPersistent);
      if (child.props.refCallback) {
        child.props.refCallback(node);
      }
    };
    return (
      <ScrollerItem refCallback={wrappedCallBack} key={`scrollerItem-${index}`} isRenderable={isRenderable} scrollProps={{ 'data-infinite-scroller-index': index }}>
        {child}
      </ScrollerItem>
    );
  }

  throttle(fn) {
    return (...args) => {
      const context = this;
      const now = performance.now();
      if (this.last && now < this.last + 250) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.last = now;
          this.disableScroll = false;
          fn.apply(context, args);
        }, 250);
      } else {
        this.last = now;
        this.disableScroll = true;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.last = now;
          this.disableScroll = false;
          fn.apply(context, args);
        }, 250);
      }
    };
  }

  enableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      this.handleResize(entries[0].contentRect);
    });
    this.resizeObserver.observe(this.contentNode);
    this.contentNode.addEventListener('scroll', this.update); // consider tick
    this.listenersAdded = true;
  }

  disableListeners() {
    if (!this.contentNode) {
      return;
    }
    this.resizeObserver.disconnect(this.contentNode);
    this.contentNode.removeEventListener('scroll', this.update); // consider tick
    this.listenersAdded = false;
  }

  handleResize() {
    if (this.scrollHeight !== this.contentNode.scrollHeight) {
      this.adjustHeight();
    }
  }

  adjustHeight() {
    if (this.preventInitialAdjust) {
      this.preventInitialAdjust = false;
      return;
    }
    if (this.contentNode) {
      this.persistentItems = [];
      this.itemsByIndex.forEach((item, itemIndex) => {
        const scrollItemNode = this.contentNode.querySelector(`[data-infinite-scroller-index="${itemIndex}"]`);
        if (scrollItemNode) {
          if (!item.height || Math.abs(scrollItemNode.clientHeight - item.height) > 1) {
            this.itemsByIndex[itemIndex].height = scrollItemNode.clientHeight;
          }
          if (!item.offsetTop || Math.abs(item.offsetTop - scrollItemNode.offsetTop) > 1) {
            this.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;
          }
          this.adjustTrailingItems(itemIndex);
        }
        if (item.isPersistent) {
          this.persistentItems.push(itemIndex);
        }
      });

      this.boundary = {
        topBoundryIndex: -1,
        hiddenTopHeight: -1,
        bottomBoundryIndex: -1,
        hiddenBottomHeight: -1,
      };
      this.update();
    }
  }

  adjustTrailingItems(index) {
    let lastTop = this.itemsByIndex[index].offsetTop;
    let lastHeight = this.itemsByIndex[index].height;
    for (let i = index + 1; i < this.itemsByIndex.length; i += 1) {
      lastTop += lastHeight;
      lastHeight = this.itemsByIndex[i].height;
      this.itemsByIndex[i].offsetTop = lastTop;
    }
  }

  update() {
    if (!this.contentNode || this.disableScroll || this.preventUpdate) {
      return;
    }

    const contentData = ScrollerUtils.getContentData(this.contentNode);
    const hiddenItems = ScrollerUtils.getHiddenItems(this.itemsByIndex, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);
    this.scrollHeight = contentData.scrollHeight;

    if (hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {
      this.preventUpdate = true;
      this.boundary = {
        topBoundryIndex: hiddenItems.topHiddenItem.index,
        hiddenTopHeight: hiddenItems.topHiddenItem.height,
        bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,
        hiddenBottomHeight: hiddenItems.bottomHiddenItem.height,
      };
      this.forceUpdate();
    }
  }

  updateHeight(node, index, isPersistent) {
    if (node) {
      this.itemsByIndex[index] = this.itemsByIndex[index] || {};
      let updatedHeight = false;
      if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - node.clientHeight) > 1) {
        this.itemsByIndex[index].height = node.clientHeight;
        updatedHeight = true;
      }
      if (!this.itemsByIndex[index].offsetTop || Math.abs(this.itemsByIndex[index].offsetTop - node.offsetTop) > 1) {
        this.itemsByIndex[index].offsetTop = node.offsetTop;
      }
      let updatedPersistence = true;
      if (this.itemsByIndex[index].isPersistent !== isPersistent) {
        this.itemsByIndex[index].isPersistent = isPersistent;
        updatedPersistence = true;
      }
      if (this.itemsByIndex.length === this.childCount) {
        if (updatedHeight) {
          this.adjustHeight();
        } else if (updatedPersistence) {
          this.updatePersistentItems();
        }
      }
    }
  }

  scrollToIndex(index) {
    this.needsScrollUpdate = false;

    if (!this.contentNode) {
      return;
    }

    if (index === 0) {
      this.contentNode.scrollTop = 0;
      return;
    }

    if (index >= this.childCount - 1) {
      this.contentNode.scrollTop = this.contentNode.scrollHeight;
      return;
    }

    const scrollItemNode = this.contentNode.querySelector(`[data-infinite-scroller-index="${index}"]`);
    if (scrollItemNode) {
      if (this.contentNode.scrollTop === scrollItemNode.offsetTop) {
        return;
      }
      this.contentNode.scrollTop = scrollItemNode.offsetTop;
      return;
    }

    this.needsScrollUpdate = true;
    const item = this.itemsByIndex[index];
    this.contentNode.scrollTop = item.offsetTop;
  }

  render() {
    const {
      children,
      requestedVisbleIndex,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} className={cx(['infinite-scroller', customProps.className])} ref={this.setContentNode}>
        {this.getScrollContent(children)}
      </div>
    );
  }
}

AggregatorScroller.propTypes = propTypes;
AggregatorScroller.defaultProps = defaultProps;

export default AggregatorScroller;
