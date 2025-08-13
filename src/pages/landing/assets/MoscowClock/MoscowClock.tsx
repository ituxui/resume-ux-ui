import React, { useState, useEffect } from 'react';
import styles from './MoscowClock.module.scss';

export const MoscowClock: React.FC = () => {
  const [moscowTime, setMoscowTime] = useState<string>('');

  useEffect(() => {
    const updateMoscowTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        // 'second: '2-digit',' - убрано, чтобы не показывать секунды
        hourCycle: 'h23' // 24-часовой формат
      }).format(now);
      setMoscowTime(formattedTime);
    };

    updateMoscowTime(); // Обновляем время сразу при монтировании

    // Устанавливаем интервал для обновления времени каждую минуту
    // 60 * 1000 миллисекунд = 1 минута
    const intervalId = setInterval(updateMoscowTime, 60 * 1000);

    return () => clearInterval(intervalId); // Очистка интервала
  }, []);

  return (
    <div className={styles.clockContainer}>
      <span className={styles.label}>Сейчас по Москве: </span>
      <span className={styles.timeDisplay}>{moscowTime}</span>
    </div>
  );
};
