import { useEffect, useState, type FC, type ReactNode } from "react";


interface StyleLoaderProps {
  children: ReactNode;
}

// Компонент-обертка для ожидания загрузки стилей
export const StyleLoader: FC<StyleLoaderProps> = ({ children }) => {
  const [isStylesLoaded, setIsStylesLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Функция проверки загрузки стилей
    const checkStylesLoaded = (): void => {
      const styleSheets: StyleSheetList = document.styleSheets;
      const allLoaded: boolean = Array.from(styleSheets).every((sheet: CSSStyleSheet) => {
        try {
          // Проверяем, что стили загружены и доступны
          return sheet.cssRules || sheet.rules;
        } catch (e: any) {
          // Игнорируем ошибки для кросс-доменных стилей
          console.log('StyleLoader Error: ', e);
          return true;
        }
      });

      if (allLoaded) {
        setIsStylesLoaded(true);
      }
    };

    // Проверяем стили сразу
    checkStylesLoaded();

    // Настраиваем MutationObserver для отслеживания изменений в <head>
    const observer: MutationObserver = new MutationObserver(checkStylesLoaded);
    const headElement: HTMLHeadElement = document.head;
    observer.observe(headElement, { childList: true, subtree: true });

    // Дополнительная проверка через интервал
    const interval: NodeJS.Timeout = setInterval(checkStylesLoaded, 100);

    // Очистка при размонтировании
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []); // Пустой массив зависимостей, так как эффект выполняется только один раз

  // Показываем загрузочный экран, пока стили не загружены
  if (!isStylesLoaded) {
    return <></>; // Можно заменить на спиннер
  }

  return <>{children}</>;
};
