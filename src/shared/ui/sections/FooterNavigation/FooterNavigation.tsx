import React from 'react';
import classNames from 'classnames';
import styles from './FooterNavigation.module.scss';
import { portfolioData } from '@shared/data/portfolioData';
import { Link } from 'react-router';


type PortfolioTitle = typeof portfolioData[number]['title'];

interface PropsFooterNavigation {
  current: PortfolioTitle;
}

export const FooterNavigation: React.FC<PropsFooterNavigation> = ({ current }) => {
  const currentIndex = portfolioData.findIndex(item => item.title === current);
  const prevIndex = currentIndex === 0 ? portfolioData.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === portfolioData.length - 1 ? 0 : currentIndex + 1;
  const prev = portfolioData[prevIndex];
  const next = portfolioData[nextIndex];
  const home = '/';

  return (
    <nav className={styles.navigation}>
      {next && (
        <Link to={`../${next.url}`} className={classNames(styles.navButton, styles.next)}>
          <span className={styles.secondary}>Следующий проект</span>
          <div className={styles.buttonContent}>
            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {next.title}
          </div>
        </Link>
      )}
      {prev && (
        <Link to={`../${prev.url}`} className={classNames(styles.navButton, styles.prev)}>
          <span className={styles.secondary}>Предыдущий проект</span>
          <div className={styles.buttonContent}>
            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {prev.title}
          </div>
        </Link>
      )}
      <Link to={home} className={classNames(styles.navButton, styles.home)}>
        <div className={styles.buttonContent}>
          <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Главная
        </div>
      </Link>
    </nav>
  );
};
