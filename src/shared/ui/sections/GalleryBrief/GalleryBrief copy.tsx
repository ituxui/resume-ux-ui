import React, { useState, useRef, useEffect, useCallback, type CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './GalleryBrief.module.scss';

interface GalleryBriefProps {
  images: string[];
}

export const GalleryBrief: React.FC<GalleryBriefProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Добавляем состояние для ширины изображения и используем его
  const [imageWidth, setImageWidth] = useState(0);

  // Обновляем ширину изображения при монтировании и изменении размера окна
  useEffect(() => {
    const updateImageWidth = () => {
      if (galleryRef.current) {
        setImageWidth(galleryRef.current.offsetWidth);
      }
    };

    updateImageWidth(); // Устанавливаем ширину при первом рендере
    window.addEventListener('resize', updateImageWidth); // Слушаем изменения размера окна

    return () => {
      window.removeEventListener('resize', updateImageWidth); // Очистка слушателя
    };
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании и очистится при размонтировании

  const getTranslateX = useCallback((index: number) => {
    return -index * imageWidth;
  }, [imageWidth]);

  const setPositionByIndex = useCallback(() => {
    const newTranslate = getTranslateX(currentIndex);
    setCurrentTranslate(newTranslate);
    setPrevTranslate(newTranslate);
  }, [currentIndex, getTranslateX]);

  // Вызываем setPositionByIndex при изменении currentIndex или imageWidth
  useEffect(() => {
    setPositionByIndex();
  }, [currentIndex, setPositionByIndex, imageWidth]); // Добавили imageWidth в зависимости

  const handleTouchStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in event ? event.touches[0].clientX : event.clientX);
    cancelAnimationFrame(animationRef.current!);
  }, []);

  const handleTouchMove = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const dragDistance = currentX - startX;
    setCurrentTranslate(prevTranslate + dragDistance);
  }, [isDragging, startX, prevTranslate]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (movedBy > 50 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setPositionByIndex(); // Snap back if not enough drag
    }
  }, [currentTranslate, prevTranslate, currentIndex, images.length, setPositionByIndex]);

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : prev));
  }, [images.length]);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('mouseleave', handleTouchEnd as EventListener); // For mouse dragging
    }
    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('mouseleave', handleTouchEnd as EventListener);
      }
    };
  }, [handleTouchEnd]);

  // Animation for smooth transitions
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        const targetTranslate = getTranslateX(currentIndex);
        const diff = targetTranslate - currentTranslate;
        if (Math.abs(diff) > 1) {
          setCurrentTranslate(prev => prev + diff * 0.1); // Ease-out effect
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCurrentTranslate(targetTranslate);
          cancelAnimationFrame(animationRef.current!);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [currentTranslate, currentIndex, isDragging, getTranslateX]);

  const sliderStyle: CSSProperties = {
    transform: `translateX(${currentTranslate}px)`,
    transition: isDragging ? 'none' : 'transform 0.05s ease-out',
  };

  return (
    <div className={styles.galleryBrief}>
      <div
        className={styles.mainImageContainer}
        ref={galleryRef}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.slider} style={sliderStyle}>
          {images.map((image, index) => (
            <div className={styles.sliderWrapper} key={index}>
              <div className={styles.sliderBg} style={{ backgroundImage: `url(${image})` }} />
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className={styles.mainImage}
                draggable="false"
              />
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button className={classNames(styles.arrow, styles.arrowLeft)} onClick={handlePrev}>
            <div className={styles.arrowCircle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.chevron}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button className={classNames(styles.arrow, styles.arrowRight)} onClick={handleNext}>
            <div className={styles.arrowCircle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.chevron}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </button>
        )}
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={classNames(styles.thumbnail, { [styles.active]: index === currentIndex })}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
