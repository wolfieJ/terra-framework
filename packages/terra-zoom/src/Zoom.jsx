import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import LodashDebounce from 'lodash.debounce';
import 'terra-base/lib/baseStyles';
import styles from './Zoom.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The component to display in the main content area.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const calcDistance = (point1, point2) => {
  const evalX = point2.x - point1.x;
  const evalY = point2.y - point1.y;
  return Math.sqrt((evalX * evalX) + (evalY * evalY));
};

class Zoom extends React.Component {
  constructor(props) {
    super(props);

    // TODO: evaluate need to all bindings.
    this.setScaleNode = this.setScaleNode.bind(this);
    this.setZoomNode = this.setZoomNode.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onDblclick = this.onDblclick.bind(this);
    this.invalidateCapture = LodashDebounce(this.invalidateCapture.bind(this), 500);
    this.enableTouchStartListener = this.enableTouchStartListener.bind(this);
    this.disableTouchStartListener = this.disableTouchStartListener.bind(this);
    this.enableTouchMoveListener = this.enableTouchMoveListener.bind(this);
    this.disableTouchMoveListener = this.disableTouchMoveListener.bind(this);
    this.enableTouchEndListener = this.enableTouchEndListener.bind(this);
    this.disableTouchEndListener = this.disableTouchEndListener.bind(this);
    this.enableMouseWheelListener = this.enableMouseWheelListener.bind(this);
    this.disableMouseWheelListener = this.disableMouseWheelListener.bind(this);
    this.enableDblclickListener = this.enableDblclickListener.bind(this);
    this.disableDblclickListener = this.disableDblclickListener.bind(this);
    this.updateDblclickScale = this.updateDblclickScale.bind(this);
    this.updateTouchScale = this.updateTouchScale.bind(this);
    this.updateWheelScale = this.updateWheelScale.bind(this);
    this.updateScale = this.updateScale.bind(this);
    this.resetZoomCache = this.resetZoomCache.bind(this);
    this.maxZoomCache = this.maxZoomCache.bind(this);
    this.state = { scaleValue: 1 };

    this.touchStartListenerAdded = false;
    this.touchMoveListenerAdded = false;
    this.touchEndListenerAdded = false;
    this.dblclickListenerAdded = false;
    this.mouseWheelListenerAdded = false;

    this.touchTargets = [];
    this.previousDistance = -1;
    this.currentScale = 1;
    this.isInitialValid = true;
  }

  componentDidMount() {
    if (this.zoomNode) {
      this.enableTouchStartListener();
      this.enableMouseWheelListener();
      this.enableDblclickListener();
    }
  }

  componentDidUpdate() {
    if (this.zoomNode) {
      this.enableTouchStartListener();
    }
  }

  componentWillUnmount() {
    if (this.zoomNode) {
      this.disableTouchStartListener();
      this.disableTouchMoveListener();
      this.disableTouchEndListener();
      this.disableMouseWheelListener();
      this.disableDblclickListener();
    }
  }

  onTouchStart(event) {
    const validTouches = this.validStartTouches(event);
    if (validTouches.length === 2) {
      event.preventDefault();
      this.touchTargets = validTouches;
      this.previousDistance = -1;
      this.enableTouchMoveListener();
      this.enableTouchEndListener();
    }
  }

  onTouchMove(event) {
    const validTouches = this.validMoveTouches(event);
    if (validTouches.length === 2) {
      event.preventDefault();
      if (event.changedTouches.length > 0) {
        this.updateTouchScale(validTouches);
      }
    } else {
      // empty cache
      this.touchTargets = [];
      this.previousDistance = -1;
    }
  }

  onTouchEnd(event) {
    if (event.touches.length === 0) {
      this.disableTouchMoveListener();
      this.disableTouchEndListener();
      this.touchTargets = [];
      this.previousDistance = -1;
    }
  }

  onWheel(event) {
    if (event.ctrlKey) {
      event.preventDefault();
      this.updateWheelScale(event);
    }
  }

  onDblclick(event) {
    event.preventDefault();
    this.updateDblclickScale(event);
  }

  setZoomNode(node) {
    this.zoomNode = node;
  }

  setScaleNode(node) {
    this.scaleNode = node;
  }

  validStartTouches(event) {
    const validTouches = [];
    if (event.targetTouches.length === 2) {
      validTouches.push(event.targetTouches[0], event.targetTouches[1]);
    } else if (event.touches.length === 2) {
      for (let i = 0; i < event.touches.length; i += 1) {
        const touch = event.touches[i];
        if (touch.target === this.zoomNode || this.zoomNode.contains(touch.target)) {
          validTouches.push(touch);
        }
      }
    }
    return validTouches;
  }

  validMoveTouches(event) {
    const validTouches = [];
    if (event.touches.length === 2 && event.targetTouches.length === 2) {
      validTouches.push(event.targetTouches[0], event.targetTouches[1]);
    } else if (event.touches.length === 2) {
      const identifiers = [this.touchTargets[0].identifier, this.touchTargets[1].identifier];
      for (let i = 0; i < event.touches.length; i += 1) {
        if (identifiers.indexOf(event.touches[i].identifier) >= 0) {
          validTouches.push(event.touches[i]);
        }
      }
    }
    return validTouches;
  }

  enableTouchStartListener() {
    if (!this.touchStartListenerAdded) {
      this.zoomNode.addEventListener('touchstart', this.onTouchStart);
      this.touchStartListenerAdded = true;
    }
  }

  disableTouchStartListener() {
    if (this.touchStartListenerAdded) {
      this.zoomNode.removeEventListener('touchstart', this.onTouchStart);
      this.touchStartListenerAdded = false;
    }
  }

  enableTouchMoveListener() {
    if (!this.touchMoveListenersAdded) {
      this.zoomNode.addEventListener('touchmove', this.onTouchMove);
      this.touchMoveListenersAdded = true;
    }
  }

  disableTouchMoveListener() {
    if (this.touchMoveListenerAdded) {
      this.zoomNode.removeEventListener('touchmove', this.onTouchMove);
      this.touchMoveListenerAdded = false;
    }
  }

  enableTouchEndListener() {
    if (!this.touchEndListenersAdded) {
      this.zoomNode.addEventListener('touchend', this.onTouchEnd);
      this.touchEndListenersAdded = true;
    }
  }

  disableTouchEndListener() {
    if (this.touchEndListenerAdded) {
      this.zoomNode.removeEventListener('touchend', this.onTouchEnd);
      this.touchEndListenerAdded = false;
    }
  }

  enableMouseWheelListener() {
    if (!this.mouseWheelListenerAdded) {
      this.zoomNode.addEventListener('wheel', this.onWheel);
      this.touchEndListenersAdded = true;
    }
  }

  disableMouseWheelListener() {
    if (this.mouseWheelListenerAdded) {
      this.zoomNode.removeEventListener('wheel', this.onWheel);
      this.mouseWheelListenerAdded = false;
    }
  }

  enableDblclickListener() {
    if (!this.dblclickListenerAdded) {
      this.zoomNode.addEventListener('dblclick', this.onDblclick);
      this.dblclickListenerAdded = true;
    }
  }

  disableDblclickListener() {
    if (this.dblclickListenerAdded) {
      this.zoomNode.removeEventListener('dblclick', this.onDblclick);
      this.dblclickListenerAdded = false;
    }
  }

  captureInitialValues(clientOrigin) {
    const validCursor = this.initialClientOrigin && this.initialClientOrigin.x === clientOrigin.x && this.initialClientOrigin.y === clientOrigin.y;
    if (validCursor && this.isInitialValid) {
      return;
    }

    this.initialScale = this.currentScale;
    this.initialScrollLeft = this.zoomNode.scrollLeft;
    this.initialScrollTop = this.zoomNode.scrollTop;
    this.initialClientOrigin = clientOrigin;

    const zoomRect = this.zoomNode.getBoundingClientRect();
    const scaleRect = this.scaleNode.getBoundingClientRect();
    this.initialZoomOrigin = { x: clientOrigin.x - zoomRect.left, y: clientOrigin.y - zoomRect.top };
    this.initialScaleOrigin = { x: clientOrigin.x - scaleRect.left, y: clientOrigin.y - scaleRect.top };
    this.isInitialValid = true;
  }

  invalidateCapture() {
    this.isInitialValid = false;
  }

  updateDblclickScale(event) {
    if (this.isUpdating) {
      return;
    }

    // don't need to find a way to only do this once, already works
    const clickOrigin = { x: event.clientX, y: event.clientY };
    this.captureInitialValues(clickOrigin);

    // get scalar value
    let scaleValue = 2;
    if (this.currentScale > 1) {
      scaleValue = 1;
    }
    this.updateScale(scaleValue);
  }

  updateTouchScale(touches) {
    if (this.isUpdating) {
      return;
    }

    const new1 = { x: touches[0].clientX, y: touches[0].clientY };
    const new2 = { x: touches[1].clientX, y: touches[1].clientY };
    const newDistance = calcDistance(new1, new2);

    if (this.previousDistance <= 0) {
      // calc using cached, assume a new touch
      const cached1 = { x: this.touchTargets[0].clientX, y: this.touchTargets[0].clientY };
      const cached2 = { x: this.touchTargets[1].clientX, y: this.touchTargets[1].clientY };
      const touchOrigin = { x: (cached1.x + cached2.x) / 2, y: (cached1.y + cached2.y) / 2 };

      this.previousDistance = calcDistance(cached1, cached2);
      this.captureInitialValues(touchOrigin);
    }

    // get scalar value
    const scaleValue = this.currentScale + ((newDistance - this.previousDistance) / 250);
    this.previousDistance = newDistance;
    this.updateScale(scaleValue);
  }

  updateWheelScale(event) {
    if (this.isUpdating) {
      return;
    }

    // need to find a way to only do this once, reliably...
    const wheelOrigin = { x: event.clientX, y: event.clientY };
    this.captureInitialValues(wheelOrigin);

    // get scalar value
    const scaleValue = this.currentScale + (event.deltaY / 50);
    this.updateScale(scaleValue);

    // invalidate here
    this.invalidateCapture();
  }

  updateScale(scaleValue) {
    // round the scalar value to 3 decimal places, it will cause fewer refreshes for trivial scale value differences.
    // let newScale = Number(`${Math.round(`${scaleValue}e4`)}e-3`);
    let newScale = scaleValue;
    if (scaleValue > 2) {
      // 2X Zoom is Max
      newScale = 2;
    } else if (scaleValue < 1) {
      // 1X Zoom is Min
      newScale = 1;
    }

    if (this.currentScale !== newScale) {
      this.isUpdating = true;
      this.currentScale = newScale;
      window.requestAnimationFrame(() => {
        this.scaleNode.style.transform = `scale(${this.currentScale})`;
        this.zoomNode.scrollLeft = (this.initialScaleOrigin.x * (this.currentScale / this.initialScale)) - this.initialZoomOrigin.x;
        this.zoomNode.scrollTop = (this.initialScaleOrigin.y * (this.currentScale / this.initialScale)) - this.initialZoomOrigin.y;
        this.isUpdating = false;
      });
    }
  }

  resetZoomCache() {
    this.touchTargets = [];
    this.currentScale = 1;
    window.requestAnimationFrame(() => { this.scaleNode.style.transform = `scale(${this.currentScale})`; });
  }

  maxZoomCache() {
    this.touchTargets = [];
    this.currentScale = 2;
    window.requestAnimationFrame(() => { this.scaleNode.style.transform = `scale(${this.currentScale})`; });
  }

  render() {
    const {
      children,
      ...customProps
    } = this.props;
    const zoomClassNames = cx([
      'zoom',
      customProps.className,
    ]);

    // TODO: Incorporate the terra-scroll when possible for the zoomNode.
    return (
      <ContentContainer
        fill
        header={
          <div>
            <button onClick={this.resetZoomCache}>Reset</button>
            <button onClick={this.maxZoomCache}>Max</button>
          </div>
        }
      >
        <div className={zoomClassNames} ref={this.setZoomNode}>
          <div className={cx('scale')} ref={this.setScaleNode} style={{ transform: `scale(${this.currentScale})` }}>
            {children}
          </div>
        </div>
      </ContentContainer>
    );
  }
}

Zoom.propTypes = propTypes;
Zoom.defaultProps = defaultProps;

export default Zoom;
