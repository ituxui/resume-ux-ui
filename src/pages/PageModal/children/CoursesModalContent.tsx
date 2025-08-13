import { ObserveCardSection, Section } from "@shared/ui";
import { PageModal } from '../index';
import { coursesData } from "@shared/data/coursesData";

export const CoursesModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Пройденные курсы IT
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1}>
          {coursesData.map((item, index) => {
            return <ObserveCardSection key={index} {...item} />
          })}
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='technologies'>Технологии</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='soft-skills'>Софт-скиллы</PageModal.Switcher>
    </PageModal.After>
  </>
);
