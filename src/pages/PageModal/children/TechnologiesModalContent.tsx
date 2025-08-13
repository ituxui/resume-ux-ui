import { Section } from "@shared/ui";

import { PageModal } from '../index';
import { technologiesIObserveData } from "@shared/data";
import { ExternalBadgeLinksAggregator } from "@shared/ui/sections/aggregators/ExternalBadgeLinksAggregator/ExternalBadgeLinksAggregator";

export const TechnologiesModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Технологии, изучаемые в рамках T-Shape
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1}>
          <ExternalBadgeLinksAggregator size="small" data={technologiesIObserveData} />
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='ai'>ИИ</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='courses'>Курсы</PageModal.Switcher>
    </PageModal.After>
  </>
);
