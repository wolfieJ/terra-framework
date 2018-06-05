import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
  const evalX = point2.clientX - point1.clientX;
  const evalY = point2.clientY - point1.clientY;
  return Math.sqrt((evalX * evalX) + (evalY * evalY));
};

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.setZoomNode = this.setZoomNode.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.enableTouchStartListener = this.enableTouchStartListener.bind(this);
    this.disableTouchStartListener = this.disableTouchStartListener.bind(this);
    this.enableTouchMoveListener = this.enableTouchMoveListener.bind(this);
    this.disableTouchMoveListener = this.disableTouchMoveListener.bind(this);
    this.enableTouchEndListener = this.enableTouchEndListener.bind(this);
    this.disableTouchEndListener = this.disableTouchEndListener.bind(this);
    this.state = { style: 0 };
  }

  componentDidMount() {
    if (this.zoomNode) {
      // add listener
    }
  }

  componentDidUpdate() {
    if (this.zoomNode) {
      // update listener
    }
  }

  componentWillUnmount() {
    if (this.zoomNode) {
      // remove listener
    }
  }

  onTouchStart(event) {
    // record, potentionally selectively add listener
    if (event.targetTouches.length === 2) {
      this.touchTargets = [].concat(event.targetTouches);
      this.enableTouchMoveListener();
      this.enableTouchEndListener();
    }
  }

  onTouchMove(event) {
    // update, handle listener
    event.preventDefault();
    if (!(event.touches.length === 2 && event.targetTouches.length === 2)) {
      this.calculateState(event);
    }
  }

  onTouchEnd(event) {
    // end, potentially selectively remove listener
    if (event.targetTouches.length === 0) {
      this.disableTouchMoveListener();
      this.disableTouchEndListener();
    }
  }

  setZoomNode(node) {
    this.zoomNode = node;
  }

  enableTouchStartListener() {
    if (!this.escListenerAdded) {
      this.zoomNode.addEventListener('touchstart', this.onTouchStart);
      this.touchStartListenerAdded = true;
    }
  }

  disableTouchStartListener() {
    if (this.escListenerAdded) {
      this.zoomNode.removeEventListener('touchstart', this.onTouchStart);
      this.touchStartListenerAdded = false;
    }
  }

  enableTouchMoveListener() {
    if (!this.escListenerAdded) {
      this.zoomNode.addEventListener('touchmove', this.onTouchMove);
      this.touchMoveListenersAdded = true;
    }
  }

  disableTouchoveListener() {
    if (this.escListenerAdded) {
      this.zoomNode.removeEventListener('touchmove', this.onTouchMove);
      this.touchMoveListenerAdded = false;
    }
  }

  enableTouchEndListener() {
    if (!this.escListenerAdded) {
      this.zoomNode.addEventListener('touchend', this.onTouchEnd);
      this.touchEndListenersAdded = true;
    }
  }

  disableTouchEndListener() {
    if (this.escListenerAdded) {
      this.zoomNode.removeEventListener('touchend', this.onTouchEnd);
      this.touchEndListenerAdded = false;
    }
  }

  calculateState(event) {
    if (event.targetTouches.length === 2 && event.changedTouches.length === 2) {
      // Check if the two target touches are the same ones that started
      // the 2-touch
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
        // Calculate the difference between the start and move coordinates
        // Math needs to calculate diagonal distance
        const cached1 = { x: this.touchTargets[point1].clientX, y: this.touchTargets[point1].clientY };
        const cached2 = { x: this.touchTargets[point2].clientX, y: this.touchTargets[point2].clientY };
        const cachedDistance = calcDistance(cached1, cached2);

        const new1 = { x: event.targetTouches[0].clientX, y: event.targetTouches[0].clientY };
        const new2 = { x: event.targetTouches[1].clientX, y: event.targetTouches[1].clientY };
        const newDistance = calcDistance(new1, new2);

        // TODO: Determine proper scalar rate, this is temporary.
        const step = (newDistance - cachedDistance) / 10;

        this.setState((prevState) => {
          let scaleValue = prevState.scaleValue;
          if (step + scaleValue > 3) {
            scaleValue = prevState.scaleValue;
          } else if (step + scaleValue < 0) {
            scaleValue = 0;
          }
          return { scaleValue };
        });
      } else {
        // empty cache
        this.touchTargets = [];
      }
    }
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

    return (
      <div className={zoomClassNames} style={{ transform: `scale(${this.state.scaleValue})` }} ref={this.setZoomNode}>
        {children}
      </div>
    );
  }
}


Zoom.propTypes = propTypes;
Zoom.defaultProps = defaultProps;

export default Zoom;
