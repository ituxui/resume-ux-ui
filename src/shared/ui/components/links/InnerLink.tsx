import { type FC, type ReactNode } from 'react';
import classNames from 'classnames';
// import { routeImportMap } from '@routes';
import styles from './Link.module.scss';
import type { LinkAccent } from './links.types';
import { Link, type LinkProps } from 'react-router';


// Пропсы для InnerLink, расширяющие LinkProps
interface InnerLinkProps extends LinkProps {
  to: string;
  children: ReactNode;
  accent?: LinkAccent; // Необязательное свойство accent, по умолчанию 'default'
  className?: string;
  underline?: boolean;
}

export const InnerLink: FC<InnerLinkProps> = ({
  accent,
  children,
  className,
  to,
  underline = true,
  ...props }) => {

  return (
    <Link
      to={to}
      // onMouseEnter={handlePrefetch}
      // onMouseLeave={handleCancelPrefetch}
      // onFocus={handlePrefetch}
      // onBlur={handleCancelPrefetch}
      className={classNames(
        styles.link,
        styles[`accent_${accent}`], // Применяем стили в зависимости от значения accent
        className,
        underline && styles.underline,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};


// const timeoutRef = useRef<NodeJS.Timeout | null>(null);

// const handlePrefetch = useCallback(() => {
//   // Очищаем предыдущий таймер, если он существует
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//   }

//   // Устанавливаем новый таймер на 100 мс
//   timeoutRef.current = setTimeout(() => {
//     if (routeImportMap[to]) {
//       routeImportMap[to](); // Запускаем динамический импорт
//     }
//   }, 150);
// }, [to]);

// const handleCancelPrefetch = useCallback(() => {
//   // Очищаем таймер при уходе курсора или потере фокуса
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = null;
//   }
// }, []);
