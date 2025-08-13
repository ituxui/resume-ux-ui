// import React from 'react';
// import classNames from 'classnames';
// import { Heading } from '@shared/ui/assets/Heading/Heading';
// import styles from './FeatureBrandCard.module.scss';

// // Определяем типы для пропсов компонента
// interface FeatureBrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
//   iconSrc: string;
//   title: string;
//   subtitle: string;
// }

// // Экспортируем компонент как константу в формате стрелочной функции
// export const FeatureBrandCard: React.FC<FeatureBrandCardProps> = ({
//   iconSrc,
//   title,
//   subtitle,
//   className
// }) => {
//   return (
//     <div className={classNames(styles.container, className)}>
//       <img src={iconSrc} alt={`${title} icon`} className={styles.icon} />
//       <div className={styles.textWrapper}>
//         <Heading size={3}>{title}</Heading>
//         <div className={styles.subtitle}>{subtitle}</div>
//       </div>
//     </div>
//   );
// };
