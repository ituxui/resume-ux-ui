// Функция для получения правильного склонения слова "год"
const getAgeText = (age: number): string => {
  if (age === 0) {
    return '0 лет';
  }

  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${age} лет`;
  }

  if (lastDigit === 1) {
    return `${age} год`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${age} года`;
  }

  return `${age} лет`;
};

// Функция для вычисления возраста
const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

interface AgeDisplayProps {
  className?: string;
}

export const AgeDisplay: React.FC<AgeDisplayProps> = () => {
  const birthDate = new Date('1990-03-02');
  const age = calculateAge(birthDate);

  return getAgeText(age);
};
