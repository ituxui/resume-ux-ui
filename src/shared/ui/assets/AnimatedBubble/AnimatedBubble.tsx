
import classNames from 'classnames';
import styles from './AnimatedBubble.module.scss';
import { SpeachBubbleSvg } from '@pages/landing/assets';

export const AnimatedBubble = () => {

  return (
    <div className={styles.bubbleContainer}>
      <SpeachBubbleSvg />

      <div className={classNames(styles.dotsContainer)}>
        <div className={classNames(styles.dot, styles.dot1)} />
        <div className={classNames(styles.dot, styles.dot2)} />
        <div className={classNames(styles.dot, styles.dot3)} />
      </div>
    </div>
  );
};
