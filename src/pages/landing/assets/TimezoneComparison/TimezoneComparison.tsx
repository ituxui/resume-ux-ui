import React, { useEffect, useState } from 'react';
import styles from './TimezoneComparison.module.scss';
import CommonStyles from '@commonStyles/CommonStyles.module.scss';
import classNames from 'classnames';

// Предполагаемый часовой пояс, с которым мы сравниваем (UTC+10)
const TARGET_UTC_OFFSET_HOURS = 10;

export const TimezoneComparison: React.FC = () => {
  const [comparisonText, setComparisonText] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const userOffsetMinutes = now.getTimezoneOffset();
    const userOffsetHours = -userOffsetMinutes / 60; // Смещение пользователя относительно UTC

    // Разница между часовым поясом пользователя и целевым часовым поясом
    // Положительное значение означает, что пользовательский часовой пояс впереди целевого
    // Отрицательное значение означает, что пользовательский часовой пояс отстает от целевого
    const differenceHours = userOffsetHours - TARGET_UTC_OFFSET_HOURS;

    let text = '';
    if (differenceHours === 0) {
      // Если часовые пояса совпадают, возвращаем null
      text = '';
    } else if (differenceHours > 0) {
      // Пользовательский часовой пояс опережает целевой
      text = `От своего времени отнимите <em>${addHoursWord(differenceHours)}</em>`;
    } else {
      // Пользовательский часовой пояс отстает от целевого
      // Используем Math.abs, чтобы получить положительное значение для сообщения
      text = `К своему времени добавьте <em>${addHoursWord(Math.abs(differenceHours))}</em>`;
    }

    setComparisonText(text);
  }, []);

  if (comparisonText === null || comparisonText === '') {
    return null; // Возвращаем null, если нет текста для отображения
  }

  return (
    <div className={classNames(styles.text, CommonStyles.muted, CommonStyles.fontExtraSmallSemibold)} dangerouslySetInnerHTML={{ __html: comparisonText }} />
  );
};


function addHoursWord(hours: number): string {
  // if (!Number.isN(hours)) {
  //   throw new Error("Input must be a non-negative integer.");
  // }

  const actualHours = Math.abs(hours);

  const lastDigit = actualHours % 10;
  const lastTwoDigits = actualHours % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${actualHours} часов`; // e.g., 11 часов, 12 часов, 13 часов, 14 часов
  } else if (lastDigit === 1) {
    return `${actualHours} час`;   // e.g., 1 час, 21 час, 101 час
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${actualHours} часа`;  // e.g., 2 часа, 3 часа, 4 часа, 22 часа
  } else {
    return `${actualHours} часов`; // e.g., 0 часов, 5 часов, 10 часов, 20 часов
  }
}

// // Examples:
// console.log(addHoursWord(1));   // Output: 1 час
// console.log(addHoursWord(2));   // Output: 2 часа
// console.log(addHoursWord(5));   // Output: 5 часов
// console.log(addHoursWord(10));  // Output: 10 часов
// console.log(addHoursWord(11));  // Output: 11 часов
// console.log(addHoursWord(21));  // Output: 21 час
// console.log(addHoursWord(23));  // Output: 23 часа
// console.log(addHoursWord(100)); // Output: 100 часов
// console.log(addHoursWord(134)); // Output: 134 часа
// console.log(addHoursWord(135)); // Output: 135 часов
// console.log(addHoursWord(0));   // Output: 0 часов
