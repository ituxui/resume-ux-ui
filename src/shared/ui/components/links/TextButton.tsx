import React, { type FC, type ButtonHTMLAttributes } from 'react';
import styles from './Link.module.scss';
import classNames from 'classnames';
import type { LinkAccent } from './links.types';


interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: LinkAccent; // Необязательное свойство accent, по умолчанию 'default'
  children: React.ReactNode; // Содержимое ссылки
}

export const TextButton: FC<TextButtonProps> = ({
  accent = 'default', // Устанавливаем 'default' как значение по умолчанию
  children,
  className,
  ...rest
}) => {

  return (
    <button
      type="button" // Указываем, что это кнопка
      className={classNames(
        styles.link,
        styles[`accent_${accent}`], // Применяем стили в зависимости от значения accent
        className,
      )}
      {...rest} // Передаем все остальные HTML-атрибуты тега <button>
    >
      {children}
    </button>
  );
};
