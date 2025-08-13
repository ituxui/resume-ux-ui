import type { TypeObserveCardsSection } from "@shared/data/types";
import { Heading } from "@shared/ui/assets/Heading/Heading";
import { ObserveCard } from "./ObserveCard";
import Styles from "./ObserveCard.module.scss";
import classNames from "classnames";
import CommonStyles from '@commonStyles/CommonStyles.module.scss';

export const ObserveCardSection = (item: TypeObserveCardsSection) => {
  return <div className={Styles['observe-card-section']}>
    <Heading size={4}>{item.heading}</Heading>
    {item.description && <div className={classNames(CommonStyles.muted, Styles['observe-card-section-description'])}>{item.description}</div>}
    <div className={Styles['observe-card-section-items']}>
      {
        item.items.map((item, index) => {
          return <ObserveCard key={index} {...item} />
        })
      }
    </div>
  </div>
};
