import { useEffect, useState, type FC, type ReactNode } from "react";


interface WaitAppLoadProps {
  children: ReactNode;
}

// Компонент-обертка для ожидания загрузки стилей
export const WaitAppLoad: FC<WaitAppLoadProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Функция для проверки загрузки всех изображений
    const loadImages = () => {
      const images = document.getElementsByTagName('img');
      const imagePromises = Array.from(images).map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            // Если изображение уже в кэше
            resolve(true);
          } else {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true); // Продолжаем, даже если изображение не загрузилось
          }
        });
      });

      // Ожидаем загрузки всех изображений
      Promise.all(imagePromises).then(() => {
        setIsLoaded(true);
      });
    };

    // Ждем полной загрузки документа
    if (document.readyState === 'complete') {
      loadImages();
    } else {
      window.addEventListener('load', loadImages);
      return () => window.removeEventListener('load', loadImages);
    }
  }, []);

  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Функция для проверки загрузки всех ресурсов, кроме изображений
  //   const checkResourcesLoaded = () => {
  //     // Проверяем, что документ полностью загружен (кроме лениво загружаемых ресурсов)
  //     if (document.readyState === 'complete') {
  //       setIsLoaded(true);
  //       return;
  //     }

  //     // Используем setTimeout для повторной проверки
  //     const timeout = setTimeout(checkResourcesLoaded, 100);
  //     return () => clearTimeout(timeout);
  //   };

  //   // Запускаем проверку
  //   checkResourcesLoaded();

  //   // Добавляем слушатель события загрузки
  //   window.addEventListener('load', () => setIsLoaded(true));

  //   // Очистка слушателя
  //   return () => window.removeEventListener('load', () => setIsLoaded(true));
  // }, []);

  if (!isLoaded) {
    // Показываем прелоадер, пока ресурсы не загружены
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '32px', fontWeight: 'bold !important' }}>
        Привет, Мир!
      </div>
    );
  }

  return <>{children}</>;
};
