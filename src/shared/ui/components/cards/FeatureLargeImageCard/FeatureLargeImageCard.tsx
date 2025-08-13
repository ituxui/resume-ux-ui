import React from 'react';
import styles from './FeatureLargeImageCard.module.scss';
import classNames from 'classnames';
import { Heading } from '@shared/ui/assets/Heading/Heading';

// Определяем типы для пропсов компонента
interface FeatureLargeImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSrc: string;
  title: string;
  subtitle?: string;
  size?: 'full';
}

// Экспортируем компонент как константу в формате стрелочной функции
export const FeatureLargeImageCard: React.FC<FeatureLargeImageCardProps> = ({
  iconSrc,
  title,
  subtitle,
  className,
  size
}) => {
  return (
    <div className={classNames(styles.container, size && styles[size], className)}>
      <img src={iconSrc} alt={`${title} icon`} className={styles.icon} />
      <div className={styles.textWrapper}>
        <Heading size={4}>{title}</Heading>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};
