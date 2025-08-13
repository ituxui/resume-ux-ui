// components/PageModal/PageModal.tsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { type PageModalType } from '../types';
import styles from './PageModal.module.scss';
import { ModalContent } from './ModalContent';
import { usePageModal } from './usePageModal';
import { useScrollLock } from '@shared/hooks';
import { useSearchParams } from 'react-router';

const VALID_MODAL_TYPES = new Set<PageModalType>(['media', 'soft-skills', 'books', 'higher-education', 'programms', 'technologies', 'courses', 'ai']);


export const PageModalPortal = () => {
  // const router = useRouter()
  // const searchParams = new URLSearchParams(router.state.location.search);

  const [URLSearchParams,] = useSearchParams()
  // const navigate = useNavigate();
  const { closeModal } = usePageModal();
  // const modalRef = useRef<HTMLDivElement>(null);

  // Локальное состояние — синхронизируется с URL
  const [activeModal, setActiveModal] = useState<PageModalType | null>(null);

  // useHandleScroll()


  // Блокировка скролла при fullView
  useScrollLock(!!activeModal);

  // 1. Синхронизация: URL → состояние при изменении searchParams
  useEffect(() => {
    const modalParam = URLSearchParams.get('modal');
    if (modalParam && VALID_MODAL_TYPES.has(modalParam as PageModalType)) {
      setActiveModal(modalParam as PageModalType);
    } else if (activeModal) {
      // Если в URL нет валидного modal, но состояние есть — сбросим
      setActiveModal(null);
    }
  }, [activeModal, URLSearchParams]); // ← ключевой момент: реагируем на изменение URL

  // 2. Закрытие модалки → обновляем URL
  // const closeModal = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.delete('modal');
  //   navigate(`?${params.toString()}`, { replace: true, preventScrollReset: true });
  // };

  // 3. Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeModal]);

  // // 4. Блокировка скролла фона
  // useEffect(() => {
  //   if (activeModal) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  //   return () => {
  //     if (document.body.style.overflow === 'hidden') {
  //       document.body.style.overflow = '';
  //     }
  //   };
  // }, [activeModal]);

  if (!activeModal) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.wrapper}
      >
        <ModalContent type={activeModal} />
      </div>
    </div>,
    document.body
  );
};
