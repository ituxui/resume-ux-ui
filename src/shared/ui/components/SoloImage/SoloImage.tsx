import React, { useState, useEffect, useRef, type ImgHTMLAttributes } from 'react';
import styles from './SoloImage.module.scss';
import classNames from 'classnames';
import { useScrollLock } from '@shared/hooks';

type PropType = {
  mode?: 'fullWidth' | 'mobileScreens';
} & ImgHTMLAttributes<HTMLImageElement>;

export const SoloImage: React.FC<PropType> = (props) => {
  const { mode = 'fullWidth', ...others } = props;
  const [isFullView, setIsFullView] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  // 👇 Добавляем состояние для размеров
  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useScrollLock(isFullView);

  const checkImageHeight = () => {
    if (imgRef.current) {
      const viewportHeight = window.innerHeight - 48;
      const imageHeight = imgRef.current.getBoundingClientRect().height;
      setIsCentered(imageHeight < viewportHeight);
    }
  };

  // 1. Получаем и сохраняем размеры при выходе из полноэкранного режима
  useEffect(() => {
    if (!isFullView && wrapperRef.current) {
      setOriginalSize({
        width: wrapperRef.current.offsetWidth,
        height: wrapperRef.current.offsetHeight,
      });
    }
  }, [isFullView]);

  useEffect(() => {
    checkImageHeight();
    window.addEventListener('resize', checkImageHeight);
    return () => window.removeEventListener('resize', checkImageHeight);
  }, []);

  return (
    <>
      {/* 2. Добавляем "заполнитель" с оригинальными размерами */}
      {isFullView && (
        <div
          style={{
            width: originalSize.width,
            height: originalSize.height,
          }}
        />
      )}
      {/* 3. Передаем ref для получения размеров */}
      <div
        ref={wrapperRef}
        className={classNames(styles.wrapper, {
          [styles['wrapper--fullView']]: isFullView,
          [styles[`mode--${mode}`]]: mode,
          [styles.centered]: isCentered,
        })}
        onClick={() => {
          if (isFullView) {
            setIsFullView(false);
          }
        }}
      >
        <img
          ref={imgRef}
          className={styles['wrapper__viewport']}
          {...others}
          onClick={() => {
            if (!isFullView) {
              setIsFullView(true);
            }
          }}
          onLoad={checkImageHeight}
        />
      </div>
    </>
  );
};
