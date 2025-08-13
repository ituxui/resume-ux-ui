import { type FC } from "react";
import styles from "./ObserveCard.module.scss";
import { Heading } from "@shared/ui/assets/Heading/Heading";
import classNames from "classnames";
import CommonStyles from '@commonStyles/CommonStyles.module.scss';
import type { TypeObserveCard } from "@shared/data";





export const ObserveCard: FC<TypeObserveCard> = (card) => {
  return (
    <a
      href={card.url}
      className={classNames(styles.card, !card.imgUrl && styles.noImage)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {card.imgUrl && <div className={styles.imageWrapper}>
        <img src={card.imgUrl} alt={card.heading} className={styles.image} />
      </div>
      }
      <div className={styles.content}>

        <Heading size={5}>{card.heading}</Heading>
        {card.description && (
          <div className={classNames(styles.description, CommonStyles.muted)}>{card.description}</div>
        )}
      </div>
    </a>
  );
};
