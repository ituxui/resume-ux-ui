import classNames from 'classnames';
import Styles from './Bento.module.scss';
import { Heading, type HeadingSize } from '@shared/ui/assets/Heading/Heading';
import { Icon, type IconTypes } from '@shared/ui/assets/icons';

export type PropsBentoHeaderProps = React.JSX.IntrinsicElements['div'] & {
  iconName?: IconTypes
  headingSize?: HeadingSize;
}

export const BentoHeader = ({ children, className, iconName, headingSize = 3 }: PropsBentoHeaderProps) => {
  return (
    <div className={classNames(Styles.header, [className])}>
      <Heading size={headingSize}>
        {children}
      </Heading>
      {iconName && typeof iconName === 'string' &&
        <div className={classNames(Styles.header_icon)}>
          <Icon type={iconName} size={headingSize === 3 ? 'lg' : 'md'} />
        </div>
      }
    </div>
  )
};
