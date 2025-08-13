
import { ObserveCardSection, Section } from "@shared/ui";
import { PageModal } from "..";
import { programmsData } from "@shared/data/programmsData";

export const ProgrammsModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Программы
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1}>
          {programmsData.map((item, key) => {
            return <ObserveCardSection key={key} {...item} />
          })}
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='books'>Книги</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='media'>Медиа</PageModal.Switcher>
    </PageModal.After>
  </>
);
