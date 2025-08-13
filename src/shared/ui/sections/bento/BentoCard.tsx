
import classNames from 'classnames';
import cls from './Bento.module.scss';
import type { HTMLAttributes } from 'react';

type BentoCardProps = {
  className?: string;
  paddings?: 'no-left-right' | 'no-top-bottom';
  clickable?: boolean
} & HTMLAttributes<HTMLDivElement>;

export const BentoCard = ({
  className,
  children,
  paddings,
  clickable,
  ...props
}: BentoCardProps) => {
  return (
    <div className={classNames(
      cls.bentoCard,
      paddings && cls[`paddings-${paddings}`],
      clickable && cls.clickable,
      [className]
    )}
      {...props}
    >
      {children}
    </div>
  )
};
