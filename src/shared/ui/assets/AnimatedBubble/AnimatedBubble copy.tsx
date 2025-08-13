
import classNames from 'classnames';
import styles from './AnimatedBubble.module.scss';

export const AnimatedBubble = () => {

  return (
    <div className={styles.bubbleContainer}>
      <div className={classNames(styles.bubble, styles.fadeIn)}>
        <div className={classNames(styles.dot, styles.dot1)} />
        <div className={classNames(styles.dot, styles.dot2)} />
        <div className={classNames(styles.dot, styles.dot3)} />
      </div>
    </div>
  );
};
