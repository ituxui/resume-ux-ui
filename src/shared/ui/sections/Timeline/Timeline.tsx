import React from 'react';
import styles from './Timeline.module.scss';
import { TimelineItem } from './TimelineItem';
import type { TimelineItemData } from './Timeline.types';

interface TimelineProps {
  data: TimelineItemData[];
}

export const Timeline: React.FC<TimelineProps> & { Item: typeof TimelineItem } = ({ data }) => {
  return (
    <div className={styles.timeline}>
      {data.map((item, index) => (
        <Timeline.Item
          key={item.title?.toString() ?? index}
          item={item}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};

Timeline.Item = TimelineItem;
