
import classNames from 'classnames';
import cls from './InfoItem.module.scss';
import type { HTMLAttributes, ReactNode } from 'react';

type InfoItemProps = {
  heading?: string | ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export const InfoItem = ({ className, heading, children }: InfoItemProps) => {
  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <span className={cls.heading}>{heading} </span><span className={cls.text}>{children}</span>
    </div>
  )
};
