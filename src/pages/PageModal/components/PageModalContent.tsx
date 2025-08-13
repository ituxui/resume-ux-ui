// import { useHandleScroll } from '@shared/hooks';
import styles from './PageModal.module.scss';
import classNames from 'classnames';
// import { usePageModal } from './usePageModal';

type PageModalContentProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const PageModalContent = ({ children }: PageModalContentProps) => {
  // const { closeModal } = usePageModal();
  // useHandleScroll();
  return (
    <div
      className={classNames(styles.content)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
