import { Section, Timeline } from "@shared/ui";
import { PageModal } from '../index';
import { listOfOtherJobs } from "@src/app/data/listOfOtherJobs";

export const SoftSkillsModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Софт-скиллы
      </PageModal.Header>


      <PageModal.Content>

        <Section sublevel={1} muted>
          Другие работы и виды занятости, которые привели к получению софт-скиллов
        </Section>
        <Section sublevel={1}>
          <Timeline data={listOfOtherJobs} />
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='courses'>Курсы</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='higher-education'>Высшее образование</PageModal.Switcher>
    </PageModal.After>
  </>
);
