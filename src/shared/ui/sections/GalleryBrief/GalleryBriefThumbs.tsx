import React from 'react';
import styles from './GalleryBrief.module.scss';

type PropType = {
  selected: boolean;
  imgSrc: string;
  onClick: () => void;
};

export const GalleryBriefThumbs: React.FC<PropType> = (props) => {
  const { selected, imgSrc, onClick } = props;

  return (
    <div
      className={`${styles['gallery-brief-thumbs__slide']} ${selected ? styles['gallery-brief-thumbs__slide--selected'] : ''
        }`}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles['gallery-brief-thumbs__slide__button']}
      >
        <img
          src={imgSrc}
          alt="Thumbnail"
          className={styles['gallery-brief-thumbs__slide__img']}
        />
      </button>
    </div>
  );
};
