
import Styles from "./ExternalBadgeLinksAggregator.module.scss";
import type { ExternalAggregatorProps } from "../aggregators.types";
import { ExternalBadgeLink } from "@shared/ui/components/ExternalBadgeLink/ExternalBadgeLink";
import { Heading } from "@shared/ui/assets/Heading/Heading";

type ExternalBadgeLinksAggregatorProps = {
  data: ExternalAggregatorProps;
  size: 'small'
}

export const ExternalBadgeLinksAggregator: React.FC<ExternalBadgeLinksAggregatorProps> = ({ data, size }) => {
  return (
    <div className={Styles.wrapper}>

      {data.map((categoryData, index) => (
        <div key={index} className={Styles.category}>
          <Heading size={4}>{categoryData.heading}</Heading>
          <div className={Styles.badges_container}>
            {categoryData.items.map((item, itemIndex) => (
              <ExternalBadgeLink key={itemIndex} size={size} accent="default" href={item.url}>
                {item.title}
              </ExternalBadgeLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
