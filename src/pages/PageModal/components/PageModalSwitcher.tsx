import React from 'react';
import type { PageModalType } from '../types';
import { usePageModal } from './usePageModal';
import Styles from './PageModal.module.scss';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type PageModalSwitcherProps = {
  direction: 'prev' | 'next';
  modalType: PageModalType;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageModalSwitcher = ({ children, direction, className, modalType }: PageModalSwitcherProps) => {

  const { createOpenModalHandler } = usePageModal();
  return (
    <button
      className={classNames(Styles.pageModalSwitcher, Styles[direction], className)}
      onClick={createOpenModalHandler(modalType)}>
      {direction === 'prev' && <ArrowLeft size={16} className={Styles.icon} />}
      <div className={Styles.pageModalSwitcher_text}>
        {children}
      </div>
      {direction === 'next' && <ArrowRight size={16} className={Styles.icon} />}
    </button>
  );
};
