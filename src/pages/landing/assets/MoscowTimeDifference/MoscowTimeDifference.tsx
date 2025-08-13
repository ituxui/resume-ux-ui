// src/components/MoscowTimeDifference/MoscowTimeDifference.tsx
import React, { useState, useEffect } from 'react';
import styles from './MoscowTimeDifference.module.scss';
import classNames from 'classnames';
import CommonStyles from '@commonStyles/CommonStyles.module.scss';

export const MoscowTimeDifference: React.FC = () => {
  const [displayMessage, setDisplayMessage] = useState<string | null>(null);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date(); // Текущий момент времени (UTC)

      // 1. Определяем часовой пояс пользователя
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // 2. Получаем текущие часы в часовом поясе пользователя
      const userCurrentHour = parseInt(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        hourCycle: 'h23',
        timeZone: userTimeZone
      }).format(now), 10);

      // 3. Получаем текущие часы в Московском часовом поясе
      const moscowCurrentHour = parseInt(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        hourCycle: 'h23',
        timeZone: 'Europe/Moscow'
      }).format(now), 10);

      // 4. Сравниваем текущие часы. Если совпадают, ничего не отображаем.
      if (userCurrentHour === moscowCurrentHour) {
        setDisplayMessage(null);
        return;
      }

      // 5. Вычисляем, сколько будет 15:00 по Москве в часовом поясе пользователя.
      // Создаем объект Date, который представляет 15:00 ТЕКУЩЕГО ДНЯ по Московскому времени.
      // Это делается путем создания новой даты, которая изначально будет в локальном TZ
      // пользователя, но затем мы "просим" форматировщик отформатировать её так,
      // как если бы она была в Moscow. Это сложный момент, но Intl.DateTimeFormat
      // справляется с этим лучше всего.

      // Создадим базовую дату, которую будем манипулировать для московского времени.
      // Важно получить текущий год, месяц, день по Москве, чтобы избежать ошибок с переходом дня.
      // const moscowDateFormatter = new Intl.DateTimeFormat('en-US', {
      //   year: 'numeric',
      //   month: '2-digit',
      //   day: '2-digit',
      //   timeZone: 'Europe/Moscow'
      // });
      // const parts = moscowDateFormatter.formatToParts(now);
      // const year = parseInt(parts.find(p => p.type === 'year')?.value || '0', 10);
      // const month = parseInt(parts.find(p => p.type === 'month')?.value || '0', 10) - 1; // Месяц 0-11
      // const day = parseInt(parts.find(p => p.type === 'day')?.value || '0', 10);

      // Теперь создаем Date объект, который представляет 15:00 указанного дня в UTC
      // (а затем при форматировании в Europe/Moscow он будет 15:00)
      // Создаем дату, которая в часовом поясе Москвы будет 15:00.
      // Для этого мы можем просто создать Date объект и передать его Intl.DateTimeFormat,
      // указав часовой пояс 'Europe/Moscow' для его создания.
      // Однако, чтобы создать Date-объект, который "знает", что он 15:00 по Москве,
      // нужно использовать конструктор Date(year, month, day, hours, minutes, seconds)
      // и затем преобразовать его в UTC, или же воспользоваться моментом времени UTC.

      // Правильный путь:
      // 1. Получаем текущий год, месяц, день по Москве (как числа).
      const moscowYear = parseInt(new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone: 'Europe/Moscow' }).format(now));
      const moscowMonth = parseInt(new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: 'Europe/Moscow' }).format(now)) - 1; // JS месяцы 0-11
      const moscowDay = parseInt(new Intl.DateTimeFormat('en-US', { day: 'numeric', timeZone: 'Europe/Moscow' }).format(now));

      // 2. Создаем Date-объект, который в UTC представляет 15:00 по Москве.
      // new Date(Date.UTC(year, month, day, hours, minutes, seconds))
      // Мы хотим 15:00 по Москве. Москва - это UTC+3.
      // Значит, 15:00 по Москве = 12:00 UTC.
      // const moscow15hAsUtcDate = new Date(Date.UTC(moscowYear, moscowMonth, moscowDay, 15 - 3, 0, 0)); // 15:00 MSK = 12:00 UTC

      // Если Москва перейдет на летнее/зимнее время, это может измениться.
      // Более универсальный способ узнать смещение:
      const moscowOffset = new Date().toLocaleString('en', { timeZoneName: 'shortOffset', timeZone: 'Europe/Moscow' })
        .match(/(GMT[+-]\d+)/)?.[1]; // Например, "GMT+3"
      let moscowOffsetHoursCalculated = 0;
      if (moscowOffset) {
        const offsetSign = moscowOffset.includes('+') ? 1 : -1;
        const offsetValue = parseInt(moscowOffset.match(/\d+/)?.[0] || '0');
        moscowOffsetHoursCalculated = offsetSign * offsetValue;
      }
      // Пересчитываем moscow15hAsUtcDate с учетом динамического смещения
      const preciseMoscow15hAsUtcDate = new Date(Date.UTC(moscowYear, moscowMonth, moscowDay, 15 - moscowOffsetHoursCalculated, 0, 0));


      // 3. Форматируем этот UTC-объект в часовой пояс пользователя
      const moscow15hInUserTimeZone = parseInt(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        hourCycle: 'h23',
        timeZone: userTimeZone
      }).format(preciseMoscow15hAsUtcDate), 10);

      // 6. Устанавливаем сообщение
      setDisplayMessage(
        `По часовому поясу ${userTimeZone} <em>${addHoursWord(moscow15hInUserTimeZone)}</em>`
      );
    };

    calculateTimeDifference();

    // Если нужно, чтобы сообщение обновлялось, например, при переходе через полночь
    // (актуально, если 15:00 по Москве может приходиться на другой день у пользователя),
    // или при смене часа у пользователя, можно использовать интервал.
    // Например, раз в 5 минут, чтобы избежать лишней нагрузки.
    // const intervalId = setInterval(calculateTimeDifference, 5 * 60 * 1000);
    // return () => clearInterval(intervalId);

  }, []); // Пустой массив зависимостей означает, что эффект запускается один раз при монтировании

  if (!displayMessage) {
    return null; // Если сообщение не нужно отображать, возвращаем null
  }

  return (
    <div className={classNames(styles.text, CommonStyles.muted, CommonStyles.fontExtraSmallSemibold)} dangerouslySetInnerHTML={{ __html: displayMessage }} />
  );
};

function addHoursWord(hours: number): string {
  // Проверка, что входное значение - целое число
  if (!Number.isInteger(hours)) {
    throw new Error("Input must be an integer.");
  }

  // Используем абсолютное значение, если число отрицательное
  const actualHours = Math.abs(hours);

  // Получаем последнюю и последние две цифры
  const lastDigit = actualHours % 10;
  const lastTwoDigits = actualHours % 100;

  // Логика склонения слова "час"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `до ${actualHours} часов`; // e.g., до 11 часов, до 12 часов, до 13 часов, до 14 часов
  } else if (lastDigit === 1) {
    return `до ${actualHours} часа`; // e.g., до 1 часа, до 21 часа, до 101 часа
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `до ${actualHours} часов`; // e.g., до 2 часов, до 3 часов, до 4 часов, до 22 часов
  } else {
    return `до ${actualHours} часов`; // e.g., до 0 часов, до 5 часов, до 10 часов, до 20 часов
  }
}
