import classNames from 'classnames';
import Styles from './Bento.module.scss';
import { Heading, type HeadingSize } from '@shared/ui/assets/Heading/Heading';
import { Icon, type IconTypes } from '@shared/ui/assets/icons';
import CommonStyles from '@commonStyles/CommonStyles.module.scss';

export type PropsBentoHeaderProps = React.JSX.IntrinsicElements['div'] & {
  iconName?: IconTypes
  headingSize?: HeadingSize;
  inverted?: boolean;
}

export const BentoHeader = ({ children, className, iconName, headingSize = 3, inverted = false }: PropsBentoHeaderProps) => {
  return (
    <div className={classNames(Styles.header, [className])}>
      <Heading size={headingSize} inverted={inverted}>
        {children}
      </Heading>
      {iconName && typeof iconName === 'string' &&
        <div className={Styles.header_icon}>
          <Icon type={iconName} size={headingSize === 3 ? 'lg' : 'md'} className={classNames(inverted && CommonStyles.inverted)} />
        </div>
      }
    </div>
  )
};
