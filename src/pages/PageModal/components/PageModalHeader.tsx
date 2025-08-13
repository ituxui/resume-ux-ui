import styles from './PageModal.module.scss';
import { usePageModal } from './usePageModal';
import { X } from 'lucide-react';
import { Heading } from '@shared/ui/assets/Heading/Heading';

type PageModalHeaderProps = {
} & React.HTMLAttributes<HTMLDivElement>;

export const PageModalHeader = ({ children }: PageModalHeaderProps) => {
  const { closeModal } = usePageModal();
  return (
    <header
      className={styles.header}
    >
      <Heading size={3}>
        {children}
      </Heading>
      <button
        className={styles.closeButton}
        onClick={closeModal}
        aria-label="Закрыть модальное окно"
      >
        <X />
      </button>
    </header>
  );
}
