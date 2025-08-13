import { useEffect } from 'react';
import { useLocation } from 'react-router';


export const useBodyBackground = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract pathname and ignore search params
    const isRootPath = location.pathname === '/';

    document.body.style.backgroundColor = isRootPath
      ? 'var(--bg-color-solid-body)'
      : 'var(--bg-read-color-body)';

    // Optional: Clean up on unmount or route change, but not necessary here unless you have transitions
    return () => {
      // Reset if needed, e.g.,
      document.body.style.backgroundColor = '';
    };
  }, [location.pathname]); // Depend only on pathname to re-run on navigation
};
