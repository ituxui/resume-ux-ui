// Тип для результата вычисления опыта
interface Experience {
  years: number;
  months?: number;
}

/**
 * Возвращает разницу между датой старта и текущей датой в годах и месяцах
 */
export function getExperience(fromDate: string): Experience {
  const now = new Date();
  const start = new Date(fromDate);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  // Коррекция по дням
  if (now.getDate() < start.getDate()) {
    months--;
  }

  // Если месяцы отрицательные — корректируем годы
  if (months < 0) {
    years--;
    months += 12;
  }

  // Округление: если прошло больше 17 дней — считаем как полный месяц
  const daysPassed = now.getDate() - start.getDate();

  if (daysPassed >= 17) {
    months++;
    if (months === 12) {
      years++;
      months = 0;
    }
  }

  return { years, months };
}

/**
 * Форматирует число лет и месяцев в строку с правильными окончаниями
 */
export function formatExperience(experience: Experience, showMonths: boolean = true): string {
  const { years, months } = experience;
  const monthsStr = showMonths ? ` ${months} ${pluralize(months!, ['месяц', 'месяца', 'месяцев'])}` : '';
  return `${years} ${pluralize(years, ['год', 'года', 'лет'])}${monthsStr}`;
}

/**
 * Возвращает правильное окончание слова по числу
 */
function pluralize(n: number, titles: [string, string, string]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[n % 10 < 5 ? n % 10 : 5]];
}

// // Пример использования:
// const startDate = '2022-10-17';
// const experience = getExperience(startDate);
// const experienceText = formatExperience(experience);

// console.log(experienceText); // Например: "2 года 8 месяцев"
