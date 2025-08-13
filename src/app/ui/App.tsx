import { Outlet, ScrollRestoration, } from 'react-router';
import { PageModal } from '@pages';
import { WaitAppLoad } from './wrappers/WaitAppLoad';
import { useBodyBackground } from './hooks/useBodyBackground';

export function App() {
  useBodyBackground();
  return (
    <WaitAppLoad>
      <Outlet />
      <ScrollRestoration />
      <PageModal.Portal />
    </WaitAppLoad>
  )
}



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
