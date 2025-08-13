import React, { type HTMLAttributes } from 'react';
import styles from './Bento.module.scss';
import classNames from 'classnames';

export type BentoItemProps = {
  children: React.ReactNode;
  clickable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const BentoItem: React.FC<BentoItemProps> = ({ children, className, clickable, ...props }) => {
  const itemClass = classNames(
    styles['bento-item'],
    clickable && styles['bento-item-clickable'],
    className,
  );
  return <div {...props} className={itemClass}>{children}</div>;
};
