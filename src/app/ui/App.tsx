import { Outlet, ScrollRestoration, } from 'react-router';
import Styles from './App.module.scss';
import { PageModal } from '@pages';

export function App() {

  return (
    <>
      <div className={Styles.wrapper}>
        <Outlet />
      </div>
      <ScrollRestoration />

      <PageModal.Portal />
    </>
  )
}



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
