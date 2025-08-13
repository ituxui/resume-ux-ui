import React from 'react';
import classNames from 'classnames';
import styles from './TimelineItem.module.scss';
import { Calendar, Check, Loader2 } from 'lucide-react'; // Импортируем иконки
import type { TimelineItemData } from './Timeline.types';
import { Heading } from '@shared/ui/assets/Heading/Heading';
import { Section } from '@shared/ui/wrappers/sections/Section';
import { useNavigate } from 'react-router';
// import { Badge } from '@shared/ui/components/Badge/Badge';

interface TimelineItemProps {
  item: TimelineItemData;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const navigate = useNavigate()
  const itemClasses = classNames(styles.timelineItem, {
    [styles.completed]: item.status === 'completed',
    [styles.calendar]: item.status === 'calendar',
  }, isLast && styles.last);

  const iconClasses = classNames(styles.icon, {
    [styles.completedIcon]: item.status === 'completed',
    [styles.calendarIcon]: item.status === 'calendar',
    [styles.inProgressIcon]: item.status === 'inProgress',
  });
  return (
    <div className={itemClasses}>
      <div className={styles.lineAndIcon}>
        <div className={iconClasses}>
          {item.status === 'completed'
            ? (
              <Check size={16} className={styles.checkIcon} /> // Иконка для completed
            )
            : item.status === 'calendar'
              ? (
                <Calendar size={16} className={styles.calendarIcon} /> // Иконка для calendar
              )
              : (
                <Loader2 size={16} className={classNames(styles.loaderIcon, styles.spin)} /> // Иконка для inProgress с анимацией вращения
              )}
        </div>
        {/* {!isLast && <div className={styles.verticalLine}></div>} */}
        <div className={styles.verticalLine}></div>

      </div>
      <div className={styles.content}>
        {item.date && <div className={styles.date}>{item.date}</div>} {/* date теперь необязателен */}
        <div className={styles.header}>
          <Heading size={3}
            className={classNames(
              item.innerLink && styles.innerLink,
            )}
            onClick={() => {
              if (item.innerLink) {
                navigate(item.innerLink);
              }
            }}
          >{item.title}</Heading>

          {/* {item.innerLink && <Badge href={item.innerLink} size='h3' className={styles.badge} />}
          {item.externalLink && <Badge href={item.externalLink} size='h3' className={styles.badge} />} */}
        </div>
        <Section sublevel={2} className={styles.description}>{item.description}</Section>
      </div>
    </div>
  );
};
