import { routeMap } from "@routes/utils";
import { ExternalLink, InfoItem, InnerLink, Section, SoloImage } from "@shared/ui";
import type { TimelineItemData } from "@shared/ui/sections/Timeline/Timeline.types";

export const listOfCompletedProjects: TimelineItemData[] = [
  {
    title: 'Многостраничный портал застройщика →',
    innerLink: routeMap.uip,
    externalLink: 'https://uipdv.ru/',
    description: <>
      <InfoItem heading='Компания'>
        <ExternalLink href="https://www.rusprofile.ru/id/10626056" accent='high'>
          ООО «СЗ-Управление Инвестиционных Программ» ↗
        </ExternalLink>
      </InfoItem>
      <InfoItem heading='Статус'>
        В открытом доступе. <ExternalLink href='https://uipdv.ru/' accent='high'>Открыть ↗</ExternalLink>
      </InfoItem>
      <InfoItem heading='Платформа'>
        Web
      </InfoItem>
      <InfoItem heading='Описание разработки'>
        <InnerLink to={routeMap.uip} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/uip1.jpeg' alt='Проект УИП' />
      </Section>
    </>,
    status: 'completed',
  },
  {
    title: 'Приложение для терминала сбора данных для завода по заправке балонов →',
    innerLink: routeMap.tsd,
    description: <>
      <InfoItem heading='Компания'>(NDA)</InfoItem>
      <InfoItem heading='Статус'>Внутренний продукт компании</InfoItem>
      <InfoItem heading='Платформа'>Android <ExternalLink href="https://www.chainway.net/Products/Info/142" accent='high'>Chainway C5 UHF ↗</ExternalLink></InfoItem>
      <InfoItem heading='Описание разработки'>
        <InnerLink to={routeMap.tsd} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/tsd1.jpeg' alt='Проект УИП' />
      </Section>
    </>,
    status: 'completed',
  },
  {
    title: 'Многостраничный портал для «Института дополнительного профессионального образования» →',
    innerLink: routeMap.dvipraz,
    externalLink: 'https://dvipraz.ru/',
    description: <>
      <InfoItem heading='Компания'>
        <ExternalLink href="https://www.rusprofile.ru/id/9260851" accent='high'>
          АНО ДПО "ДВИПРАЗ" ↗
        </ExternalLink>
      </InfoItem>
      <InfoItem heading='Статус'>
        <span>В открытом доступе. </span>
        <ExternalLink href='https://dvipraz.ru/' accent='high'>Открыть ↗</ExternalLink>
      </InfoItem>
      <InfoItem heading='Платформа'>Web</InfoItem>
      <InfoItem heading='Описание разработки'>
        <InnerLink to={routeMap.dvipraz} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/dvipraz1.jpg' alt='Проект УИП' />
      </Section>
    </>,
    status: 'completed',
  },
  {
    title: 'Безопасное управление бизнесом через настроенный удалённый рабочий стол (remote desktop protocol) →',
    innerLink: routeMap.rdpLanding,
    description: <>
      <InfoItem heading='Компания'>
        <ExternalLink href='https://www.rusprofile.ru/id/1237700454045' accent='high'>ООО «4А» ↗</ExternalLink>
      </InfoItem>
      <InfoItem heading='Статус'>
        Внутренний продукт компании. Готовится к выпуску на рынок
      </InfoItem>
      <InfoItem heading='Платформа'>Web</InfoItem>
      <InfoItem heading='Разработка лендинга'>
        <InnerLink to={routeMap.rdpLanding} accent='high'>Перейти →</InnerLink>
      </InfoItem>
      <InfoItem heading='Разработка дашбоарда'>
        <InnerLink to={routeMap.rdpDashboard} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/rdp1.png' alt='Проект УИП' />
      </Section>
    </>,
    status: 'completed',
  },
  {
    title: 'Международный оператор доставки посылок из Китая →',
    innerLink: routeMap.dostav,
    description: <>
      <InfoItem heading='Компания'>(NDA)</InfoItem>
      <InfoItem heading='Статус'>Готовится к выпуску MVP</InfoItem>
      <InfoItem heading='Платформа'>Web</InfoItem>
      <InfoItem heading='Описание разработки'>
        <InnerLink to={routeMap.dostav} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/dostav1.jpg' alt='Проект УИП' />
      </Section>
    </>,
    status: 'completed',
  },
  {
    title: 'Система учёта пассажиров бизнес зала международного авиатерминала «Аэроакт» →',
    innerLink: routeMap.aeroakt,
    description: <>
      <InfoItem heading='Компания'>
        <ExternalLink href="https://www.rusprofile.ru/id/428984" accent='high'>
          ООО «Авиатерминал» ↗
        </ExternalLink>
      </InfoItem>
      <InfoItem heading='Статус'>Использовалось с 2016 по 2019 гг.</InfoItem>
      <InfoItem heading='Платформа'>Excel</InfoItem>
      <InfoItem heading='Описание разработки'>
        <InnerLink to={routeMap.aeroakt} accent='high'>Перейти →</InnerLink>
      </InfoItem>

      <Section sublevel={1}>
        <SoloImage src='images/landing/aeroakt1.jpg' alt='Проект Аэроакт' />
      </Section>
    </>,
    status: 'completed',
  },
]

// <Heading size={3} label={'Система учёта пассажиров бизнес зала международного авиатерминала'} onClick={() => navigate(routeMap.aeroakt)} />
// <div className={SharedStyles.subsection}>
//   <InfoItem heading='Компания' text='ООО «Авиатерминал»' />
//   <InfoItem heading='Статус' text='Закрытое использование' />
//   <InfoItem heading='Примечание' text={<span className={'muted'}>Разрабатывал его <em>по собственной инициативе</em> когда работал в Аэропорту на должности, не связанной с IT, так как в бизнес-процессах предприятия было множество болей. Но я им горжусь, так как <em>с него началось понимание</em>, что я хочу делать приложения, упрощающие процессы.</span>} />
//   <InfoItem heading='Платформа' text='Excel' />
//   <InfoItem heading='Описание разработки' text={<InnerLink to={routeMap.aeroakt} accent='high'>Перейти →</InnerLink>} />
// </div>
// {/* <GalleryBrief images={[
//   'images/landing/aeroakt1.jpg',
//   'images/landing/aeroakt2.png',
//   'images/landing/aeroakt3.png',
//   'images/landing/aeroakt4.png',
// ]} /> */}

// <SoloImage src='images/landing/aeroakt1.jpg' alt='Проект Аэроакт' />








