import { Outlet, ScrollRestoration, } from 'react-router';
import { PageModal } from '@pages';
import { StyleLoader } from './wrappers/StyleLoader';
import { useBodyBackground } from './hooks/useBodyBackground';

export function App() {
  useBodyBackground();
  return (
    <StyleLoader>
      <Outlet />
      <ScrollRestoration />
      <PageModal.Portal />
    </StyleLoader>
  )
}



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
