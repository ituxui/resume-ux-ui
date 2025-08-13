import React, { useState } from 'react';
import styles from './ExpandableImage.module.scss';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ExpandableImage: React.FC<ExpandableImageProps> = ({ src, alt, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className={styles.thumbnail}
        onClick={toggleExpand}
      />
      {isExpanded && (
        <div className={styles.overlay} onClick={toggleExpand}>
          <img
            src={src}
            alt={alt}
            className={styles.fullscreenImage}
          />
        </div>
      )}
    </div>
  );
};
