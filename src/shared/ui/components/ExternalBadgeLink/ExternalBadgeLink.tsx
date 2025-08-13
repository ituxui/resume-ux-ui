import React, { type FC, type AnchorHTMLAttributes } from 'react';
import styles from './Badges.module.scss';
import classNames from 'classnames';
import type { BadgesAccent } from './badges.types';


interface ExternalBadgeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // Обязательный href
  accent?: BadgesAccent; // Необязательное свойство accent, по умолчанию 'default'
  size: 'small' | 'large';
  children: React.ReactNode; // Содержимое ссылки
}

export const ExternalBadgeLink: FC<ExternalBadgeLinkProps> = ({
  href,
  accent = 'default', // Устанавливаем 'default' как значение по умолчанию
  children,
  size,
  className,
  ...rest
}) => {

  return (
    <a
      href={href}
      target="_blank" // Всегда открывать в новой вкладке
      rel="noopener noreferrer" // Важно для безопасности при target="_blank"
      className={classNames(
        styles.wrapper,
        styles[`accent_${accent}`],
        styles[`size_${size}`],
        className,
      )}
      {...rest} // Передаем все остальные HTML-атрибуты тега <a>
    >
      {children}
    </a>
  );
};
