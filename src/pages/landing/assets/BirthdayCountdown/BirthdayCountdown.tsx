import React, { useState, useEffect } from 'react';

import CommonStyles from '@commonStyles/CommonStyles.module.scss'
import styles from './BirthdayCountdown.module.scss';
import classNames from 'classnames';

interface BirthdayCountdownProps {
  birthday: string; // Строка даты в формате 'DD.MM.YYYY'
}

export const BirthdayCountdown: React.FC<BirthdayCountdownProps> = ({ birthday }) => {
  const calculateDaysUntilBirthday = (): string => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Нормализуем текущую дату до начала дня

    // Парсим день и месяц из строки в формате DD.MM.YYYY
    const [day, month] = birthday.split('.').map(Number);

    // Создаем объект даты для дня рождения в текущем году
    let nextBirthday = new Date(today.getFullYear(), month - 1, day);
    nextBirthday.setHours(0, 0, 0, 0); // Нормализуем дату дня рождения до начала дня

    // Если день рождения в текущем году уже прошел, устанавливаем его на следующий год
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, month - 1, day);
      nextBirthday.setHours(0, 0, 0, 0);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return '<em>Сегодня мой день рождения!</em>';
    } else if (diffDays === 1) {
      return '<em>Завтра мой день рождения!</em>';
    } else if (diffDays === 2) {
      return '<em>Послезавтра мой день рождения!</em>';
    } else {
      return `До моего дня рождения осталось <em>${addDaysWord(diffDays)}</em>`;
    }
  };

  const [countdownMessage, setCountdownMessage] = useState<string>('');

  useEffect(() => {
    setCountdownMessage(calculateDaysUntilBirthday());
    // Обновляем сообщение ежедневно для точности
    const timer = setInterval(() => {
      setCountdownMessage(calculateDaysUntilBirthday());
    }, 1000 * 60 * 60 * 24); // Проверяем раз в день

    return () => clearInterval(timer); // Очищаем интервал при размонтировании компонента
  }, [birthday]);

  return (
    <div className={classNames(styles.text, CommonStyles.muted, CommonStyles.fontExtraSmallSemibold)} dangerouslySetInnerHTML={{ __html: countdownMessage }} />
  );
};

function addDaysWord(days: number): string {
  if (!Number.isInteger(days) || days < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  const lastDigit = days % 10;
  const lastTwoDigits = days % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${days} дней`;
  } else if (lastDigit === 1) {
    return `${days} день`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${days} дня`;
  } else {
    return `${days} дней`;
  }
}

// // Examples:
// console.log(addDaysWord(1));   // Output: 1 день
// console.log(addDaysWord(2));   // Output: 2 дня
// console.log(addDaysWord(5));   // Output: 5 дней
// console.log(addDaysWord(10));  // Output: 10 дней
// console.log(addDaysWord(11));  // Output: 11 дней
// console.log(addDaysWord(21));  // Output: 21 день
// console.log(addDaysWord(23));  // Output: 23 дня
// console.log(addDaysWord(100)); // Output: 100 дней
// console.log(addDaysWord(134)); // Output: 134 дня
// console.log(addDaysWord(135)); // Output: 135 дней
