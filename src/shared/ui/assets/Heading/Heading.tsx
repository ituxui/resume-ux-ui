import React from 'react';
import classNames from 'classnames';
import styles from './Heading.module.scss';
import CommonStyles from '@commonStyles/CommonStyles.module.scss';

export type HeadingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  size: HeadingSize;
  kind?: 'thin' | 'default' | 'bold';
  className?: string; // Добавляем возможность передавать дополнительные классы
  muted?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>

export const Heading: React.FC<HeadingProps> = ({
  children,
  size,
  kind = 'default',
  muted,
  className,
  ...props }) => {
  const actualSize = size === 0 ? 1 : size;
  const HeadingTag = `h${actualSize}` as keyof React.JSX.IntrinsicElements;

  return React.createElement(
    HeadingTag,
    {
      ...props,
      className: classNames(
        styles.heading,
        styles[`size-${size}`],
        styles[`kind-${kind}`],
        muted && CommonStyles.muted,
        className
      ),
    },
    <>
      {children}
    </>
  );
};
