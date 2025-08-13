import React from 'react';
import type { PageModalType } from '../types';
import { useNavigate, useSearchParams, } from 'react-router';

export const usePageModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const openModal = (modal: PageModalType) => {
    const params = new URLSearchParams(window.location.search);
    params.set('modal', modal);
    navigate(`?${params.toString()}`, { replace: true, preventScrollReset: true });
  };

  const createOpenModalHandler = (modalType: PageModalType) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(modalType);
  };

  const closeModal = () => {
    // Create a new URLSearchParams object from the current search parameters
    const params = new URLSearchParams(searchParams);

    // Remove the 'modal' parameter
    params.delete('modal');

    // Navigate to the new URL without the 'modal' parameter
    // The `replace: true` option ensures the browser history is replaced,
    // so the user can't go "back" to the modal.
    // The `preventScrollReset: true` option is useful to keep the scroll position.
    navigate(`?${params.toString()}`, { replace: true, preventScrollReset: true });
  };

  return { openModal, closeModal, createOpenModalHandler };
};
