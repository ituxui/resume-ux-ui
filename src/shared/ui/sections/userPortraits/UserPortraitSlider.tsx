import React, { useState, useRef } from 'react';
import styles from './UserPortraitSlider.module.scss';

export interface UserPortrait {
  id: number;
  name: string;
  age: string;
  occupation: string;
  goal: string;
  needs: string[];
  behaviors: string[];
  frustrations: string[];
}

interface UserPortraitSliderProps {
  userPortraits: UserPortrait[];
}

export const UserPortraitSlider: React.FC<UserPortraitSliderProps> = ({ userPortraits }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? userPortraits.length - 1 : prev - 1));
    scrollToTop();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === userPortraits.length - 1 ? 0 : prev + 1));
    scrollToTop();
  };

  if (userPortraits.length === 0) {
    return <div className={styles.empty}>No portraits</div>;
  }

  const { name, age, occupation, goal, needs, behaviors, frustrations } = userPortraits[currentIndex];

  return (
    <div className={styles.slider} ref={sliderRef} data-index={currentIndex}>
      <div className={styles.portrait}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.info}>
          {age} | {occupation}
        </div>
        <div className={styles.section}>
          <h4>Цели</h4>
          <div>{goal}</div>
        </div>
        <div className={styles.section}>
          <h4>Потребности</h4>
          <ul>
            {needs.map((need, index) => (
              <li key={index}>{need}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Поведение</h4>
          <ul>
            {behaviors.map((behavior, index) => (
              <li key={index}>{behavior}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Фрустрации</h4>
          <ul>
            {frustrations.map((frustration, index) => (
              <li key={index}>{frustration}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navigation}>
        <button
          className={styles.arrow}
          onClick={handlePrev}
          disabled={userPortraits.length <= 1}
          aria-label="Previous portrait"
        >
          {'Предыдущий'}
        </button>
        <span className={styles.counter}>
          {currentIndex + 1}/{userPortraits.length}
        </span>
        <button
          className={styles.arrow}
          onClick={handleNext}
          disabled={userPortraits.length <= 1}
          aria-label="Next portrait"
        >
          {'Следующий'}
        </button>
      </div>
    </div>
  );
};
