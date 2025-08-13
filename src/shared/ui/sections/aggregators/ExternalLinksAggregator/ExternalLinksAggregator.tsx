
import Styles from "./ExternalLinksAggregator.module.scss";
import type { ExternalAggregatorProps } from "../aggregators.types";
import { ExternalLink } from "@shared/ui/components/links/ExternalLink";

type ExternalLinksAggregatorProps = {
  data: ExternalAggregatorProps;
}

export const ExternalLinksAggregator: React.FC<ExternalLinksAggregatorProps> = ({ data }) => {
  return (
    <div className={Styles.wrapper}>

      {data.map((categoryData, index) => (
        <div key={index}> {/* Удалены классы Tailwind */}
          <h4>
            {categoryData.heading}
          </h4>
          <ul> {/* Удалены классы Tailwind */}
            {categoryData.items.map((item, itemIndex) => (
              <li key={itemIndex}> {/* Удалены классы Tailwind */}
                <ExternalLink href={item.url}> {/* Удален accent */}
                  {item.title}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
