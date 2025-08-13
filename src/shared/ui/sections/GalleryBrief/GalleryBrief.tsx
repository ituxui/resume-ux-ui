import React, { useState, useCallback, useRef, useEffect } from 'react';
import { type EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoHeight from 'embla-carousel-auto-height';
import { GalleryBriefThumbs } from './GalleryBriefThumbs';
import styles from './GalleryBrief.module.scss';
import classNames from 'classnames';
import { NextButton, PrevButton, usePrevNextButtons } from './GalleryBriefArrowButtons';
import { useScrollLock } from '@shared/hooks';

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
  mode?: 'fullWidth' | 'mobileScreens';
};

export const GalleryBrief: React.FC<PropType> = ({ images, options, mode = 'fullWidth' }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const slides = Array.from({ length: images.length }, (_, i) => i);
  const draggable = slides.length > 1;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState<number | null>(null);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    {
      align: 'center',
      duration: 10,
      watchDrag: draggable,
      watchResize: true,
      ...options,
    },
    [AutoHeight({ active: true })]
  );

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    {
      containScroll: 'keepSnaps',
      dragFree: true,
      duration: 10,
      align: 'start',
      watchDrag: draggable,
    },
    [AutoHeight({ active: true })]
  );

  const handleImgLoad = useCallback(() => {
    emblaMainApi?.reInit();
  }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !draggable) return;
      emblaMainApi.scrollTo(index);

      if (rootRef.current) {
        const rect = rootRef.current.getBoundingClientRect();
        if (rect.top < 0) {
          rootRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    [emblaMainApi, draggable]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi || !draggable) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, draggable]);

  useEffect(() => {
    if (!emblaMainApi || !draggable) return;
    onSelect();
    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect, draggable]);

  // Блокировка скролла при fullView
  useScrollLock(isFullView);

  // Тоггл с замером высоты до fixed
  const handleToggleFullView = useCallback(() => {
    if (!isFullView && rootRef.current) {
      setPlaceholderHeight(rootRef.current.offsetHeight);
      setIsFullView(true);
    } else {
      setIsFullView(false);
      setPlaceholderHeight(null);
    }
  }, [isFullView]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaMainApi);

  return (
    <>
      {placeholderHeight !== null && <div style={{ height: placeholderHeight }} />}
      <div
        ref={rootRef}
        className={classNames(styles.galleryBrief, {
          [styles['galleryBrief--fullView']]: isFullView,
          [styles[`mode--${mode}`]]: mode,
          [styles.draggable]: draggable,
        })}
        onClick={(event) => {
          const shouldDisable =
            (event.target as HTMLElement).closest(`.${styles['gallery-brief-thumbs__slide']}`) ||
            (event.target as HTMLElement).closest(`.${styles.emblaButton}`);
          if (shouldDisable) return;
          if (isFullView) handleToggleFullView();
        }}
      >
        <div
          className={styles['galleryBrief__viewport']}
          ref={emblaMainRef}
          onClick={(event) => {
            const shouldDisable =
              (event.target as HTMLElement).closest(`.${styles['gallery-brief-thumbs__slide']}`) ||
              (event.target as HTMLElement).closest(`.${styles.emblaButton}`);
            if (shouldDisable) return;
            handleToggleFullView();
          }}
        >
          <div className={styles['galleryBrief__container']}>
            {images.map((imgSrc, index) => (
              <div
                className={classNames(styles['galleryBrief__slide'], 'modal')}
                key={index}
                style={isFullView ? { overflowY: 'auto', maxHeight: '100dvh' } : {}}
              >
                <img
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  className={styles['galleryBrief__slide__img']}
                  onLoad={handleImgLoad}
                />
              </div>
            ))}
          </div>

          {draggable && (
            <div className={styles.emblaButtons}>
              <PrevButton onClick={() => onPrevButtonClick()} disabled={prevBtnDisabled} />
              <NextButton onClick={() => onNextButtonClick()} disabled={nextBtnDisabled} />
            </div>
          )}
        </div>

        {slides.length > 1 && (
          <div className={styles.galleryBriefThumbs}>
            <div className={styles['galleryBriefThumbs__viewport']} ref={emblaThumbsRef}>
              <div className={styles['galleryBriefThumbs__container']}>
                {images.map((imgSrc, index) => (
                  <GalleryBriefThumbs
                    key={index}
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    imgSrc={imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

