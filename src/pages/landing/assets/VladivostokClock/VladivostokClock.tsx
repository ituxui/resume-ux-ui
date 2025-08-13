import React, { useState, useEffect } from 'react';
import styles from './VladivostokClock.module.scss'; // Подключаем SCSS модуль

export const VladivostokClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Создаем объект Intl.DateTimeFormat для часового пояса Asia/Vladivostok
      // и формата "HH:MM" (24-часовой формат)
      const formatter = new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // Отключаем 12-часовой формат, чтобы получить HH:MM
        timeZone: 'Asia/Vladivostok',
      });

      const formattedTime = formatter.format(now);
      setTime(formattedTime);
    };

    // Обновляем время сразу при монтировании компонента
    updateClock();

    // Устанавливаем интервал для обновления времени каждую минуту
    // Можно обновить и каждую секунду, если нужна большая точность,
    // но для HH:MM минуты достаточно.
    const intervalId = setInterval(updateClock, 1000 * 60); // Обновляем каждую минуту

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей означает, что эффект запустится только один раз при монтировании

  return (
    <span className={styles.clockContainer}>
      {/* Здесь нет никаких специфических стилей, только базовый div */}
      {time}
    </span>
  );
};
