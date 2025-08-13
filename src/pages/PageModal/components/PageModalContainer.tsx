// import { useHandleScroll } from '@shared/hooks';
import styles from './PageModal.module.scss';
import classNames from 'classnames';
// import { usePageModal } from './usePageModal';

type PageModalContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const PageModalContainer = ({ children, className }: PageModalContainerProps) => {
  // const { closeModal } = usePageModal();
  // useHandleScroll();
  return (
    <div
      className={classNames(styles.modal, 'modal', className)}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
