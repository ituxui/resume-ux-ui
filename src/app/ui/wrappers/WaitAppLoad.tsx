import { useEffect, useState, type FC, type ReactNode } from "react";


interface WaitAppLoadProps {
  children: ReactNode;
}

// Компонент-обертка для ожидания загрузки стилей
export const WaitAppLoad: FC<WaitAppLoadProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Функция для проверки загрузки всех ресурсов, кроме изображений
    const checkResourcesLoaded = () => {
      // Проверяем, что документ полностью загружен (кроме лениво загружаемых ресурсов)
      if (document.readyState === 'complete') {
        setIsLoaded(true);
        return;
      }

      // Используем setTimeout для повторной проверки
      const timeout = setTimeout(checkResourcesLoaded, 100);
      return () => clearTimeout(timeout);
    };

    // Запускаем проверку
    checkResourcesLoaded();

    // Добавляем слушатель события загрузки
    window.addEventListener('load', () => setIsLoaded(true));

    // Очистка слушателя
    return () => window.removeEventListener('load', () => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    // Показываем прелоадер, пока ресурсы не загружены
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Привет, Мир!</h2>
      </div>
    );
  }

  return <>{children}</>;
};
