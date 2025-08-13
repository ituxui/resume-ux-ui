import React, { useRef, useEffect, useState } from 'react';
import styles from './FixedContainer.module.scss'; // Импортируем SCSS-модуль
import classNames from 'classnames';

import { Heading } from '@shared/ui/assets/Heading/Heading';


export const FixedContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [initialTop, setInitialTop] = useState<number | null>(null);
  const [showAva, setShowAva] = useState(false);



  useEffect(() => {
    if (!containerRef.current) return;

    // Сохраняем начальную позицию контейнера при монтировании
    // Это важно, чтобы знать, когда переключаться на fixed
    const rect = containerRef.current.getBoundingClientRect();
    setInitialTop(window.scrollY + rect.top);

    const handleScroll = () => {
      if (!containerRef.current || initialTop === null) return;

      const currentScrollY = window.scrollY;

      // Если текущая позиция скролла больше или равна начальной верхней позиции контейнера
      // и контейнер еще не зафиксирован, то фиксируем его
      if (currentScrollY >= initialTop && !isFixed) {
        setIsFixed(true);
      }
      // Если текущая позиция скролла меньше начальной верхней позиции
      // и контейнер зафиксирован, то возвращаем его в absolute
      else if (currentScrollY < initialTop && isFixed) {
        setIsFixed(false);
      }
    };



    window.addEventListener('scroll', handleScroll);



    // Очистка слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialTop, isFixed]);

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles.container} ${isFixed ? styles.fixed : styles.absolute}`}
        style={isFixed ? { top: 0, left: 0, } : {}} // Можете настроить left/width для fixed
      >
        <div className={styles.wrapper}>
          <Heading size={1} className={classNames(styles.heading, styles.headingLeft)}>
            Привет! Я Юрий
          </Heading>

          <img
            src='images/me/ava.png'
            alt="Вверх"
            className={styles.ava}
            onClick={() => setShowAva(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      {showAva && (
        <div className={styles.overlay} onClick={() => setShowAva(false)}>
          <img
            src='images/me/ava.png'
            className={styles.fullscreenImage}
          />
        </div>
      )}
    </>
  );
};

