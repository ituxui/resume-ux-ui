import { ExternalLink, Section } from "@shared/ui";

import Styles from './HigherEducationModalContent.module.scss';
import { PageModal } from '../index';
import { Heading } from "@shared/ui/assets/Heading/Heading";

export const HigherEducationModalContent = () => (
  <>
    <PageModal.Container className={Styles.wrapper}>
      <PageModal.Header>
        Высшее образование
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1} className={Styles.section}>
          <img src='images/brand/education/education top.png' alt='education top' className={Styles.imageTop} />
          <Section sublevel={1} className={Styles.text}>
            <Heading size={4}><ExternalLink href='https://ru.wikipedia.org/wiki/Педагогический_институт_ТОГУ'>Педагогический Институт Тихоокеанского Государственного Университета ↗</ExternalLink></Heading>
            <div>Факультет востоковедения и истории</div>
            <div>Переводчик-лингвист китайского и английского языков</div>
            <div><em>2006-2012 гг.</em></div>
          </Section>
          <img src='images/brand/education/education bottom.png' alt='education bottom' className={Styles.imageBottom} />
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='soft-skills'>Софт-скиллы</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='books'>Книги</PageModal.Switcher>
    </PageModal.After>
  </>
);

