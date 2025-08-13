import { type FC, type HTMLAttributes } from 'react';
import styles from './Badges.module.scss';
import classNames from 'classnames';
import type { BadgesAccent } from './badges.types';


interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  accent?: BadgesAccent; // Необязательное свойство accent, по умолчанию 'default'
  size: 'small' | 'large';
}

export const Badge: FC<BadgeProps> = ({
  accent = 'default', // Устанавливаем 'default' как значение по умолчанию
  children,
  size,
  className,
  ...rest
}) => {

  return (
    <span
      className={classNames(
        styles.wrapper,
        styles[`accent_${accent}`],
        styles[`size_${size}`],
        className,
      )}
      {...rest} // Передаем все остальные HTML-атрибуты тега <span>
    >
      {children}
    </span>
  );
};
