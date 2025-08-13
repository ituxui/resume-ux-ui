import type { PageModalType } from '../types';

// Фабричная функция для создания обработчиков модальных окон
export const createModalHandler = (modalType: PageModalType) => (e: React.MouseEvent) => {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  params.set('modal', modalType);
  window.history.replaceState(null, '', `?${params.toString()}`);
};

// Альтернативная фабричная функция с дополнительными опциями
export const createModalHandlerWithOptions = (
  modalType: PageModalType,
  options?: {
    preventDefault?: boolean;
    replaceState?: boolean;
  }
) => (e: React.MouseEvent) => {
  if (options?.preventDefault !== false) {
    e.preventDefault();
  }

  const params = new URLSearchParams(window.location.search);
  params.set('modal', modalType);

  if (options?.replaceState !== false) {
    window.history.replaceState(null, '', `?${params.toString()}`);
  } else {
    window.history.pushState(null, '', `?${params.toString()}`);
  }
};

// Универсальная функция для прямого использования
export const handleModalClick = (modalType: PageModalType) => (e: React.MouseEvent) => {
  e.preventDefault();
  const params = new URLSearchParams(window.location.search);
  params.set('modal', modalType);
  window.history.replaceState(null, '', `?${params.toString()}`);
};
