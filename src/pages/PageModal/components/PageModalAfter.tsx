
import styles from './PageModal.module.scss';
// import { usePageModal } from './usePageModal';
// import { Heading } from '@shared/ui/assets/Heading/Heading';

export type PageModalAfterProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const PageModalAfter = ({ children }: PageModalAfterProps) => {
  // const { closeModal } = usePageModal();
  return (
    <div
      className={styles.after}
    >
      {children}
    </div>
  );
}
