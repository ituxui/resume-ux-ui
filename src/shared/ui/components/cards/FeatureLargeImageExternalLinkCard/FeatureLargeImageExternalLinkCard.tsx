import React from 'react';
import styles from './FeatureLargeImageExternalLinkCard.module.scss';
import classNames from 'classnames';
import { Heading } from '@shared/ui/assets/Heading/Heading';

// Определяем типы для пропсов компонента
interface FeatureLargeImageExternalLinkCardProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  iconSrc: string;
  title: string;
  subtitle?: string;
}

// Экспортируем компонент как константу в формате стрелочной функции
export const FeatureLargeImageExternalLinkCard: React.FC<FeatureLargeImageExternalLinkCardProps> = ({
  iconSrc,
  title,
  subtitle,
  className,
  href,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classNames(styles.container, className)}>
      <img src={iconSrc} alt={`${title} icon`} className={styles.icon} />
      <div className={styles.textWrapper}>
        <Heading size={4} className={styles.title}>{title} ↗</Heading>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </a>
  );
};
