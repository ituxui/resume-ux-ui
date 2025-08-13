import { type FC, useMemo } from 'react';
interface TimeSinceProps {
  startDate: string;
}

const declension = (number: number, words: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5];
  return words[index];
};

export const TimeSince: FC<TimeSinceProps> = ({ startDate }) => {
  const timeSinceText = useMemo(() => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearText = `${years} ${declension(years, ['год', 'года', 'лет'])}`;
    const monthText = `${months} ${declension(months, ['месяц', 'месяца', 'месяцев'])}`;

    if (years === 0 && months === 0) {
      return 'меньше месяца';
    } else if (years === 0) {
      return `${monthText}`;
    } else if (months === 0) {
      return `${yearText}`;
    } else {
      return `${yearText} и ${monthText}`;
    }
  }, [startDate]);

  return timeSinceText;
};
