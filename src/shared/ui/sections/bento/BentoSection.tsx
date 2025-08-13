
import classNames from 'classnames';
import cls from './Bento.module.scss';
import type { HTMLAttributes } from 'react';

type BentoSectionProps = {
  className?: string;
  paddings?: 'no-left-right';
  centered?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const BentoSection = ({ centered, className, children, paddings }: BentoSectionProps) => {
  return (
    <div className={classNames(cls.bentoSection, paddings && cls[`paddings-${paddings}`], centered && cls.centered, [className])}>
      {children}
    </div>
  )
};
