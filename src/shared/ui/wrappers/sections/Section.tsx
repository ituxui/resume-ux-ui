import classNames from 'classnames';
import Styles from './Section.module.scss';
import CommonStyles from '@commonStyles/CommonStyles.module.scss';

export type TypeSection = React.JSX.IntrinsicElements['div'] & {
  sublevel?: 0 | 1 | 2
  muted?: boolean
}

export const Section = ({
  children,
  className,
  muted,
  sublevel = 0,
}: TypeSection) => {
  return (
    <div className={classNames(Styles.wrapper,
      Styles[`sublevel-${sublevel}`],
      muted && CommonStyles.muted,
      className,
    )}>
      {children}
    </div>
  )
};
