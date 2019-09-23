import React from 'react';
import Button from 'terra-button';
import Card from 'terra-card/lib/Card';
import IconRight from 'terra-icon/lib/icon/IconRight';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './StartScreen.module.scss';
const cx = classNames.bind(styles);


const startScreenContent = (
  <React.Fragment>
    <Text colorClass={cx(['text-title-startline'])}>Let's</Text>
    <Text colorClass={cx(['text-title-emphasisline'])}>Get Started</Text>
    <div className={cx('visual-divider')} />
    <Text colorClass={cx(['text-instructions'])}>First you need to select a patient.</Text>
    <Text colorClass={cx(['text-instructions'])}>Choose from your schedule, list, or search to find a patient.</Text>
    <Button variant="action" icon={<IconRight />} isReversed text="Select a Patient" className={cx('call-to-action')} />
  </React.Fragment>
);

const startScreenCardContent = (
    <Card variant="raised" className={cx('card')}>
      <Card.Body>
        <Spacer padding="large+4">
          {startScreenContent}
        </Spacer>
      </Card.Body>
    </Card>
);

const tinyStartScreen = (
  <div className={cx(['start-screen', 'tiny', 'base'])}>
    {startScreenContent} 
  </div>
);
const mediumStartScreen = (
  <div className={cx(['start-screen', 'medium', 'base'])}> 
    {startScreenCardContent}
  </div>
);
const largeStartScreen = (
  <div className={cx(['start-screen', 'large', 'base'])}> 
    {startScreenCardContent}
  </div>
);

const StartScreen = () => {
  return (
    <ResponsiveElement
      tiny={tinyStartScreen}
      medium={mediumStartScreen}
      large={largeStartScreen}
    />
  );
};

export default StartScreen;
