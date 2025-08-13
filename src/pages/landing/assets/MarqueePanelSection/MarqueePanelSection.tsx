import { technologiesIObserveData } from "@shared/data";
import { BubbleWrapItem, MarqueePanel } from "@shared/ui";
import { memo, useEffect, useMemo, useState } from "react";

const getValuesBasedOnWidth = () => {
  if (window.innerWidth < 840) {
    return [10, 5];
  }
  return [8, 3, 12];
};

export const MarqueePanelSection = memo(() => {
  const [values, setValues] = useState(getValuesBasedOnWidth());

  useEffect(() => {
    const handleResize = () => {
      setValues(getValuesBasedOnWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Мемоизация списка элементов
  const items = useMemo(
    () =>
      technologiesIObserveData.flatMap((category) =>
        category.items.map((item) => (
          <BubbleWrapItem key={item.title} url={item.url}>
            {item.title}
          </BubbleWrapItem>
        ))
      ),
    []
  );

  return (
    <MarqueePanel speeds={values} direction="left">
      {items}
    </MarqueePanel>
  );
});

MarqueePanelSection.displayName = "MarqueePanelSection";
