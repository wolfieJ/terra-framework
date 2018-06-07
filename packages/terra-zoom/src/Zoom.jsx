import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
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
    this.setScaleNode = this.setScaleNode.bind(this);
    this.setZoomNode = this.setZoomNode.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.updateScale = this.updateScale.bind(this);
    this.enableTouchStartListener = this.enableTouchStartListener.bind(this);
    this.disableTouchStartListener = this.disableTouchStartListener.bind(this);
    this.enableTouchMoveListener = this.enableTouchMoveListener.bind(this);
    this.disableTouchMoveListener = this.disableTouchMoveListener.bind(this);
    this.enableTouchEndListener = this.enableTouchEndListener.bind(this);
    this.disableTouchEndListener = this.disableTouchEndListener.bind(this);
    this.resetZoomCache = this.resetZoomCache.bind(this);
    this.maxZoomCache = this.maxZoomCache.bind(this);
    this.state = { scaleValue: 1 };

    this.touchStartListenerAdded = false;
    this.touchMoveListenerAdded = false;
    this.touchEndListenerAdded = false;
    this.touchTargets = [];
    this.previousDistance = -1;
    this.previousScale = 1;
  }

  componentDidMount() {
    if (this.zoomNode) {
      this.enableTouchStartListener();
      this.enableTouchMoveListener();
      this.enableTouchEndListener();
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
    }
  }

  onTouchStart(event) {
    // TODO: either this or move needs to validate touches correctly.
    if (event.targetTouches.length === 2) {
      event.preventDefault();
      for (let i = 0; i < event.targetTouches.length; i += 1) {
        this.touchTargets.push(event.targetTouches[i]);
      }
      this.previousDistance = -1;
      this.enableTouchMoveListener();
      this.enableTouchEndListener();
    }
  }

  onTouchMove(event) {
    // TODO: either this or start needs to validate touches correctly.
    if (event.touches.length === 2 && event.targetTouches.length === 2) {
      event.preventDefault();
      if (event.changedTouches.length > 0) {
        this.updateScale(event);
      }
    }
  }

  onTouchEnd(event) {
    if (event.targetTouches.length === 0) {
      this.disableTouchMoveListener();
      this.disableTouchEndListener();
      this.touchTargets = [];
      this.previousDistance = -1;
    }
  }

  setZoomNode(node) {
    this.zoomNode = node;
  }

  setScaleNode(node) {
    this.scaleNode = node;
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

  updateScale(event) {
    let point1;
    let point2;
    for (let i = 0; i < this.touchTargets.length; i += 1) {
      if (this.touchTargets[i].identifier === event.targetTouches[0].identifier) {
        point1 = i;
      }
      if (this.touchTargets[i].identifier === event.targetTouches[1].identifier) {
        point2 = i;
      }
    }

    if (point1 >= 0 && point2 >= 0) {
      const new1 = { x: event.targetTouches[0].clientX, y: event.targetTouches[0].clientY };
      const new2 = { x: event.targetTouches[1].clientX, y: event.targetTouches[1].clientY };
      const newDistance = calcDistance(new1, new2);

      if (this.previousDistance <= 0) {
        // calc using cached, assume a new touch
        const cached1 = { x: this.touchTargets[point1].clientX, y: this.touchTargets[point1].clientY };
        const cached2 = { x: this.touchTargets[point2].clientX, y: this.touchTargets[point2].clientY };
        this.previousDistance = calcDistance(cached1, cached2);
        this.touchOrigin = { x: (cached1.x + cached2.x) / 2, y: (cached1.y + cached2.y) / 2 };

        const rect = this.zoomNode.getBoundingClientRect();
        this.zoomOrigin = { x: this.touchOrigin.x - rect.left, y: this.touchOrigin.y - rect.top };
        this.scaleOrigin = { x: this.zoomOrigin.x + this.zoomNode.scrollLeft, y: this.zoomOrigin.y + this.zoomNode.scrollTop };
        this.initialScale = this.previousScale;
      }

      // get initial scalar value
      let scaleValue = this.previousScale + ((newDistance - this.previousDistance) / 250);

      // round the scalar value to 3 decimal places, it will cause fewer refreshes for trivial scale value differences.
      scaleValue = Math.round(scaleValue * 1000) / 1000;
      if (scaleValue > 2) {
        // 2X Zoom is Max
        scaleValue = 2;
      } else if (scaleValue < 1) {
        // 1X Zoom is Min
        scaleValue = 1;
      }

      this.previousDistance = newDistance;
      if (this.previousScale !== scaleValue) {
        this.previousScale = scaleValue;
        window.requestAnimationFrame(() => {
          this.scaleNode.style.transform = `scale(${this.previousScale})`;
          this.zoomNode.scrollLeft = ((this.scaleOrigin.x / this.initialScale) * this.previousScale) - this.zoomOrigin.x;
          this.zoomNode.scrollTop = ((this.scaleOrigin.y / this.initialScale) * this.previousScale) - this.zoomOrigin.y;
        });
      }
    } else {
      // empty cache
      this.touchTargets = [];
      this.previousDistance = -1;
    }
  }

  resetZoomCache() {
    this.touchTargets = [];
    this.previousScale = 1;
    window.requestAnimationFrame(() => { this.scaleNode.style.transform = `scale(${this.previousScale})`; });
  }

  maxZoomCache() {
    this.touchTargets = [];
    this.previousScale = 2;
    window.requestAnimationFrame(() => { this.scaleNode.style.transform = `scale(${this.previousScale})`; });
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
          <div className={cx('scale')} ref={this.setScaleNode} style={{ transform: `scale(${this.previousScale})` }}>
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
