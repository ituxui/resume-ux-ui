import { ObserveCardSection, Section } from "@shared/ui";

import { PageModal } from '../index';
import { mediaData } from "@shared/data";

export const MediaModalContent = () => (
  <>
    <PageModal.Container>
      <PageModal.Header>
        Список отслеживаемых медиа
      </PageModal.Header>

      <PageModal.Content>
        <Section sublevel={1}>
          {mediaData.map((item, index) => {
            return <ObserveCardSection key={index} {...item} />
          })}
        </Section>
      </PageModal.Content>
    </PageModal.Container>
    <PageModal.After>
      <PageModal.Switcher direction='prev' modalType='programms'>Программы</PageModal.Switcher>
      <PageModal.Switcher direction='next' modalType='ai'>ИИ</PageModal.Switcher>
    </PageModal.After>
  </>
);


// <Section sublevel={1}>
//   <Heading size={4}>UX UI и продуктовый дизайн</Heading>
//   <div className={CommonStyles.muted}>Каналы, блоги и ресурсы по продуктовому дизайну и UX/UI.</div>
//   <div>
//     <ExternalLink href='https://t.me/pdigest' accent='high'>Дайджест продуктового дизайна</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/jun_hi' accent='high'>Дизайнер, привет</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@UPROCK' accent='high'>UPROCK</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@disarto.digital' accent='high'>Disarto</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@Mizko' accent='high'>Mizko</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@designchampions' accent='high'>Jesse Showalter</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@DesignCourse' accent='high'>DesignCourse</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@iosgetthrough/featured' accent='high'>авось прорвемся</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/ilyabirman_channel' accent='high'>Канал Ильи Бирмана</ExternalLink>,{' '}
//     <ExternalLink href='https://shuka.design/' accent='high'>щука</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/shukagram' accent='high'>щука (Telegram)</ExternalLink>,{' '}
//     <ExternalLink href='https://dsgners.ru/' accent='high'>dsgners</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@neoreframer' accent='high'>NeoReframer</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@steblina' accent='high'>Sergey Steblina (YouTube)</ExternalLink>,{' '}
//     <ExternalLink href='https://knowhowtodesign.notion.site/' accent='high'>Sergey Steblina (Notion)</ExternalLink>,{' '}
//     <ExternalLink href='https://www.steblina.com/' accent='high'>Sergey Steblina (Website)</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/ne_znal_ai' accent='high'>Sergey Steblina (Telegram)</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@romanoduvanov/videos' accent='high'>Роман Одуванов</ExternalLink>,{' '}
//     <ExternalLink href='https://sanya-kvo.ru/video-uroki' accent='high'>Study Kvo. Обучение веб-дизайну и UX UI</ExternalLink>,{' '}
//     <ExternalLink href='https://formfactor.ru/newcases' accent='high'>Formfactor.ru • Карьера дизайнера продукта</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/+h2dgtmuUHj82OWFi' accent='high'>Formfactor.ru (Telegram)</ExternalLink>
//   </div>
// </Section>

// <Section sublevel={1}>
//   <Heading size={4}>UI дизайн</Heading>
//   <div className={CommonStyles.muted}>Ресурсы для вдохновения и обучения UI дизайну.</div>
//   <div>
//     <ExternalLink href='https://www.youtube.com/@alexeybychkov_' accent='high'>Alexey Bychkov: веб-дизайн и фриланс</ExternalLink>,{' '}
//     <ExternalLink href='https://www.awwwards.com/' accent='high'>awwwards</ExternalLink>,{' '}
//     <ExternalLink href='https://www.unsection.com/' accent='high'>unsection</ExternalLink>,{' '}
//     <ExternalLink href='https://startups.gallery/' accent='high'>startups.gallery</ExternalLink>,{' '}
//     <ExternalLink href='https://maxibestof.one/websites' accent='high'>maxibestof</ExternalLink>,{' '}
//     <ExternalLink href='https://saaspo.com/' accent='high'>saaspo</ExternalLink>,{' '}
//     <ExternalLink href='https://ui8.net/' accent='high'>ui8</ExternalLink>,{' '}
//     <ExternalLink href='https://refero.design/' accent='high'>refero</ExternalLink>,{' '}
//     <ExternalLink href='https://uiverse.io' accent='high'>uiverse</ExternalLink>,{' '}
//     <ExternalLink href='https://mobbin.com/' accent='high'>mobbin</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/uiwebdesignbest' accent='high'>Ui Web Design</ExternalLink>
//   </div>
// </Section>

// <Section sublevel={1}>
//   <Heading size={4}>Fullstack</Heading>
//   <div className={CommonStyles.muted}>Источники для изучения фуллстек разработки.</div>
//   <div>
//     <ExternalLink href='https://www.youtube.com/@codewithantonio' accent='high'>Code With Antonio</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@javascriptmastery/featured' accent='high'>JavaScript Mastery</ExternalLink>,{' '}
//     <ExternalLink href='https://www.lapa.ninja/' accent='high'>lapa.ninja</ExternalLink>,{' '}
//     <ExternalLink href='https://land-book.com/' accent='high'>land-book</ExternalLink>,{' '}
//     <ExternalLink href='https://godly.website/' accent='high'>godly.website</ExternalLink>
//   </div>
// </Section>

// <Section sublevel={1}>
//   <Heading size={4}>Фронтенд и вёрстка</Heading>
//   <div className={CommonStyles.muted}>Каналы и ресурсы, посвященные фронтенд разработке и вёрстке.</div>
//   <div>
//     <ExternalLink href='https://t.me/front_end_dev' accent='high'>FrontEndDev</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/fedevelopment' accent='high'>FrontEnd Development</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/frontendnoteschannel_ru' accent='high'>Frontender's notes [ru]</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/frontend_web_space' accent='high'>Frontend & Web space</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/FrontendPortal' accent='high'>Frontend Portal</ExternalLink>
//   </div>
// </Section>

// <Section sublevel={1}>
//   <Heading size={4}>Программирование: общее</Heading>
//   <div className={CommonStyles.muted}>Общие ресурсы по программированию и разработке.</div>
//   <div>
//     <ExternalLink href='https://www.youtube.com/@REDGroup' accent='high'>RED Group</ExternalLink>,{' '}
//     <ExternalLink href='https://www.youtube.com/@WebDevSimplified' accent='high'>Web Dev Simplified</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/hack_less' accent='high'>Этичный Хакер</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/ulbi_tv' accent='high'>Ulbi TV - fullstack разработка на JavaScript</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/whackdoor' accent='high'>Бэкдор</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/web_Ninjas' accent='high'>Web Ninja | Backend & Frontend</ExternalLink>
//   </div>
// </Section>

// <Section sublevel={1}>
//   <Heading size={4}>Искусственный интеллект</Heading>
//   <div className={CommonStyles.muted}>Источники информации и каналы по искусственному интеллекту.</div>
//   <div>
//     <ExternalLink href='https://t.me/strangedalle' accent='high'>Ai molodca</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/neuro_pixel' accent='high'>НЕЙРОПИКСЕЛЬ</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/ii_community' accent='high'>ИИ</ExternalLink>,{' '}
//     <ExternalLink href='https://t.me/syntxfamily' accent='high'>SYNTX FAMILY</ExternalLink>
//   </div>
// </Section>
