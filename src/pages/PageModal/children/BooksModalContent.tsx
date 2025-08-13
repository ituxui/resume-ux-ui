import { FeatureLargeImageExternalLinkCard, Section } from "@shared/ui";
import Styles from './BooksModalContent.module.scss';
import { PageModal } from '../index';

export const BooksModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Сборники и книги
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1} className={Styles.wrapper}>
          <FeatureLargeImageExternalLinkCard href="https://www.ozon.ru/category/na-kryuchke-kak-sozdavat-produkty-formiruyushchie-privychki/" iconSrc='images/books/На крючке.jpg' title='Hooked. На крючке. Как создавать продукты, формирующие привычки' subtitle='Эта книга дала мне глубокое понимание механик формирования пользовательских привычек. Как UX/UI дизайнер, я применил принципы "крючка" (триггер, действие, переменное вознаграждение, инвестиции) для создания более вовлекающих и удерживающих интерфейсов, что критически важно для успеха любого цифрового продукта.' />
          <FeatureLargeImageExternalLinkCard href="https://roadmap.sh/ux-design" iconSrc='images/books/roadmap.sh.png' title='Roadmap Ux-Design' subtitle="Пошаговый гайд для UX дизайнер в 2025 года. Материала очень много, сейчас изучаю, и другим рекомендую" />
          <FeatureLargeImageExternalLinkCard href="https://roadmap.sh/design-system" iconSrc='images/books/roadmap.sh.png' title='Roadmap Design System' subtitle="Как создать дизайн-систему. В процессе изучения" />
          <FeatureLargeImageExternalLinkCard href="https://www.ozon.ru/product/dizayn-privychnyh-veshchey-norman-donald-2128830406/?at=k2to8rqJ8cr8OjXnh8mVQZuYP13PZfNB9yRMhMym09O" iconSrc='images/books/Дизайн привычных вещей.jpg' title='Дизайн привычных вещей' subtitle="Читаю эту книгу. Это классика, которая формирует мое понимание пользовательского опыта. Норман Дональд учит видеть дизайн во всем, акцентируя внимание на аффордансах, сигнификаторах и ментальных моделях. Это фундаментальные знания для любого UX/UI дизайнера, позволяющие создавать интуитивно понятные и эффективные интерфейсы." />
          <FeatureLargeImageExternalLinkCard href="https://www.ozon.ru/product/designing-virtual-worlds-1619683450/?at=OgtEz02Bzcv9ry5Xfo84Q0vuWV8mA5fAlXLzGuKYDngA&sh=OswPjJRsOg" iconSrc='images/books/Designing Virtual Worlds.jpg' title='Designing Virtual Worlds Ричарда Бартла' subtitle="Читаю эту книгу. Хотя книга ориентирована на гейм-дизайн, она содержит бесценные уроки по созданию систем, которые вовлекают и удерживают пользователей. Как UX/UI дизайнер, я почёрпываю из нее идеи о мотивации пользователей, построении игровых циклов и создании ощущения прогресса, что применимо и в дизайне неигровых приложений для повышения вовлеченности." />
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='higher-education'>Высшее образование</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='programms'>Программы</PageModal.Switcher>
    </PageModal.After>
  </>
);
