// import Tilt from 'react-parallax-tilt';
import classNames from 'classnames';

import Styles from './Landing.module.scss';
import { AnimatedBubble, Bento, BrandIcon, ExternalLink, FeatureLargeImageCard, FlexHeight1, Section, Timeline } from '@shared/ui';
import { Heading } from '@shared/ui/assets/Heading/Heading';
import CommonStyles from '@commonStyles/CommonStyles.module.scss'
import { Badge, } from '@shared/ui';
import {
  AgeDisplay,
  BirthdayCountdown, MarqueePanelSection, MediaSvg, MoscowTimeDifference, PreloadImages, TimezoneComparison, VladivostokClock,
  WorkDuration
} from './assets';
import {
  AfterEffectsSvg, AiSvg, AutohotkeySvg, BlenderSvg, ClickUpSvg, ClockifySvg, DrawioSvg, FigmaSvg, FocusTodoSvg, MiroSvg, PhotoshopSvg,
} from '@shared/ui';
import { ArrowRight, Plus } from 'lucide-react';
import { usePageModal } from '@pages/PageModal/components';
import { listOfCompletedProjects } from '@src/app/data/listOfCompletedProjects';


export const Landing = () => {
  const { createOpenModalHandler } = usePageModal();
  return (
    <>

      <Section className={Styles.headingContainer}>
        <Heading size={0} className={classNames(Styles.heading)}>
          Привет! Я Юрий
        </Heading>

        <div className={Styles.links}>
          <Badge href='https://vk.com/indigosay' />
          <Badge href='https://t.me/Rumar1' />
          <Badge href='xreider@yandex.ru' />
          <Badge
            text="PDF"
            href="/https resume-ux-ui.vercel.app.pdf" // Путь к файлу в папке public
            download={true} // Указываем, что нужно скачать файл
          />
        </div>

        <Heading size={3} kind='thin' className={classNames(Styles.description, CommonStyles.muted)}>
          UX UI дизайнер с профессиональным опытом <em><WorkDuration /></em> и <em className={CommonStyles.nowrap}>T-shaped</em> знаниями фулстек программирования. Реализовал 9 многостраничных приложений. <em>Ищу удалённую позицию</em> в продуктовой компании, использующую лучшие практики, чтобы применить и углубить экспертизу.<br />Давайте поговорим о Вашем продукте!
        </Heading>

        <div className={Styles.avaContainer}>

          {/* <Tilt
            perspective={1000}
            // glareEnable={true}
            // glareMaxOpacity={0.45}
            tiltMaxAngleX={5}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={1500}
            className={Styles.avaTilt}
          >
            <img
              src='images/me/me.png'
              alt="Вверх"
              className={Styles.ava}
            />
          </Tilt> */}
          {/* <img src='images/me/1757918111.jpg' alt="я" className={Styles.ava} /> */}
          <img src='images/me/647141.png' alt="я" className={Styles.ava} />
        </div>
      </Section>

      <Section>
        <Bento className={Styles.first_bento}>

          <Bento.Item className={Styles.first_bento_worktime}>
            <Bento.Header iconName='clock'>
              Желаемое время работы
            </Bento.Header>
            <div className={Styles.bento_body}>
              Будни до 15 часов по Москве
            </div>
            <MoscowTimeDifference />
            {/* <MoscowClock /> */}
          </Bento.Item>

          <Bento.Item className={Styles.first_bento_location}>
            <Bento.Header iconName='map-pin'>
              Мои локация и время
            </Bento.Header>
            <FlexHeight1 />
            <div className={Styles.bento_body}>
              Россия, Хабаровск, <VladivostokClock /> (UTC+10)
            </div>
            <TimezoneComparison />
          </Bento.Item>

          <Bento.Item className={Styles.first_bento_education}>
            <Bento.Header iconName='graduation-cap'>
              Образование
            </Bento.Header>
            <Bento.Card className={Styles.first_bento_education_it_courses}
              onClick={createOpenModalHandler('courses')}
              clickable
            >
              <span>Курсы IT</span> <span>{'более 30'}</span>
            </Bento.Card>
            <Bento.Card
              onClick={createOpenModalHandler('higher-education')}
              clickable
            >
              <div>Высшее образование</div>
              <div className={classNames(CommonStyles.muted, CommonStyles.fontExtraSmallSemibold)}>Переводчик-лингвист китайского и&nbsp;английского&nbsp;языков</div>
            </Bento.Card>
          </Bento.Item>

          <Bento.Item className={Styles.first_bento_age}>
            <Bento.Header iconName='cake'>
              Возраст
            </Bento.Header>
            <div className={Styles.bento_body}>
              <AgeDisplay /> (2 марта 1990 г.)
            </div>
            <FlexHeight1 />
            <BirthdayCountdown birthday='02.03.1990' />
          </Bento.Item>

          <Bento.Item className={Styles.first_bento_family}>
            <Bento.Header iconName='heart'>
              Семья
            </Bento.Header>
            <FlexHeight1 />
            <div className={Styles.bento_body}>
              Женат, ребёнок
            </div>
          </Bento.Item>

          <Bento.Item className={Styles.first_bento_army}>
            <Bento.Header iconName='shield'>
              Армия
            </Bento.Header>
            <FlexHeight1 />
            <div className={Styles.bento_body}>
              Отслужил 1 год
            </div>
          </Bento.Item>

        </Bento>
      </Section>


      <Section>
        <Section sublevel={2}>
          <Badge inverted showIcon={false} text={'Портфолио'} />
        </Section>
        <Heading size={2} className={classNames(Styles.heading)}>
          Мои работы
        </Heading>

        <Section sublevel={2}>
          <Heading muted size={4} kind='thin' className={classNames(Styles.heading)}>
            Разрабатывал интерфейсы приложений кибербезопасности (rdp protocol), образовательных платформ, строительных компаний, терминалов сбора данных промышленных предприятий, международного оператора доставки грузов, закрытых систем для управляющих жилыми домами компаний со встроенным умным домом, систем видеонаблюдения с искуственным интеллектом, сервиса заказов товара из Китая, системы учёта пассажиров для аэропорта, лендингов, информационных сайтов.
          </Heading>
          <Heading muted size={4} kind='thin' className={classNames(Styles.heading)}>
            Выставлено ограниченное количество проектов из-за NDA.
          </Heading>
        </Section>
        <Section sublevel={1}>
          <Timeline data={listOfCompletedProjects} />


        </Section>
      </Section>


      <Section>
        <Section sublevel={1}>
          <Badge inverted showIcon={false} text={'Кликните, чтобы открыть бенто'} />
        </Section>
        <Heading size={2} className={classNames(Styles.heading)}>
          Дополнительно обо мне
        </Heading>
        <Section sublevel={1}>
          <Bento className={Styles.second_bento} areItemsClickable>
            <Bento.Item className={Styles.second_bento_programms} clickable
              onClick={createOpenModalHandler('programms')}>
              <Bento.Header headingSize={4}>
                Программы
              </Bento.Header>

              <Bento.Section className={Styles.second_bento_programms_figma_section}>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.figma.com/" accent='high'>
                        Figma ↗
                      </ExternalLink>
                    </>
                  }
                  hasMargin={false}
                >
                  <FigmaSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://clickup.com/" accent='high'>
                        ClickUp ↗
                      </ExternalLink>
                      <div>Универсальный инструмент для управления проектами</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <ClickUpSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://miro.com/" accent='high'>
                        Miro ↗
                      </ExternalLink>
                      <div>Онлайн-доска для совместной работы</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <MiroSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.draw.io/" accent='high'>
                        Draw.io ↗
                      </ExternalLink>
                      <div>Онлайн-инструмент для создания диаграмм и блок-схем</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <DrawioSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://clockify.me/" accent='high'>
                        Clockify ↗
                      </ExternalLink>
                      <div>Трекер времени. Периодически считаю потраченное время для самоанализа и мотивации</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <ClockifySvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://focustodo.cn/" accent='high'>
                        Focus To-Do ↗
                      </ExternalLink>
                      <div>Таймер по технике Pomodoro, периодически использую для мотивации</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <FocusTodoSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.autohotkey.com/" accent='high'>
                        AutoHotkey ↗
                      </ExternalLink>
                      <div>Программа для создания макросов через скрипты</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <AutohotkeySvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.blender.org/" accent='high'>
                        Blender ↗
                      </ExternalLink>
                      <div>3D-редактор. Изучал интерфейс подробно на курсах, делал некоторые модели, например, логотипы</div>
                    </>
                  }
                  hasMargin={false}
                >
                  <BlenderSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.adobe.com/products/illustrator.html" accent='high'>
                        Adobe Illustrator ↗
                      </ExternalLink>
                      <div>Хорошо знаю интерфейс. Проходил несколько курсов, часто использую в редактировании векторной графики</div>
                    </>
                  }
                  fullSizeIcon
                  hasMargin={false}
                >
                  <AiSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.adobe.com/products/photoshop.html" accent='high'>
                        Adobe Photoshop ↗
                      </ExternalLink>
                      <div>Хорошо знаю интерфейс.Проходил несколько курсов по цветокору, ретуши, фотобашу и matte-painting.</div>
                    </>
                  }
                  fullSizeIcon
                  hasMargin={false}
                >
                  <PhotoshopSvg />
                </BrandIcon>
                <BrandIcon
                  tooltipText={
                    <>
                      <ExternalLink href="https://www.adobe.com/products/aftereffects.html" accent='high'>
                        Adobe After Effects ↗
                      </ExternalLink>
                      <div>Проходил немного курсов, делал некоторые простые задачи для создания простых анимаций, позиционировании логотипа в пространстве на видео</div>
                    </>
                  }
                  fullSizeIcon
                  hasMargin={false}
                >
                  <AfterEffectsSvg />
                </BrandIcon>
                <BrandIcon hasMargin={false}>
                  <Plus />
                </BrandIcon>
              </Bento.Section>
            </Bento.Item>


            <Bento.Item className={Styles.second_bento_ai} clickable
              onClick={createOpenModalHandler('ai')}>
              <Bento.Section centered className={Styles.second_bento_ai_section}>
                <Bento.Header headingSize={3}>
                  {'ИИ'}
                </Bento.Header>
                <div className={Styles.second_bento_ai_section_div}>Инструменты</div>
                <Bento.Header headingSize={1}>
                  {'30'}
                </Bento.Header>
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles.second_bento_technologies} clickable
              onClick={createOpenModalHandler('technologies')}>
              <Bento.Header headingSize={4}>
                Технологии в рамках T-Shape
              </Bento.Header>

              <Bento.Section paddings='no-left-right' className={Styles.second_bento_technologies_section}>
                <MarqueePanelSection />
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles.second_bento_courses} clickable
              onClick={createOpenModalHandler('courses')}>
              <Bento.Header headingSize={4}>
                Курсы IT
              </Bento.Header>

              <FlexHeight1 />
              <Bento.Section className={CommonStyles.muted}>
                Прошёл <em>более 30 курсов</em> по UX UI дизайну, программированию, графике, 3D-моделированию, анимации, видеомонтажу, цветокоррекции и другим направлениям
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles.second_bento_education} clickable
              onClick={createOpenModalHandler('higher-education')}>
              <Bento.Header headingSize={4}>
                Высшее образование
              </Bento.Header>
              <FlexHeight1 />
              <Bento.Section className={classNames(Styles.second_bento_education_section, CommonStyles.muted)}>
                <em>2006-2012 гг.</em> — <ExternalLink underline={false} href='https://ru.wikipedia.org/wiki/Педагогический_институт_ТОГУ'>Педагогический Институт Тихоокеанского Государственного Университета ↗</ExternalLink>, Факультет востоковедения и истории, переводчик-лингвист китайского и английского языков
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles.second_bento_media} clickable
              onClick={createOpenModalHandler('media')}>
              <Bento.Header headingSize={4}>
                Медиа
              </Bento.Header>
              <Bento.Section className={Styles.second_bento_media_section}>
                <MediaSvg />
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles['second_bento_soft_skills']} clickable
              onClick={createOpenModalHandler('soft-skills')}>
              <Bento.Header headingSize={4}>
                Софт-скиллы
              </Bento.Header>
              {/* Указать что как переводчик учился общению, переводческой этики, умению постигать коммуникацию */}
              <Bento.Section className={Styles.second_bento_soft_skills_section}>
                <AnimatedBubble />
              </Bento.Section>
            </Bento.Item>

            <Bento.Item className={Styles.second_bento_books} clickable
              onClick={createOpenModalHandler('books')}>
              <Bento.Header headingSize={4}>
                Сборники и книги
              </Bento.Header>
              <Bento.Section className={Styles.second_bento_books_section}>
                <FeatureLargeImageCard iconSrc='images/books/На крючке.jpg' title='Hooked. На крючке. Как создавать продукты, формирующие привычки' />
              </Bento.Section>
              <div className={Styles.second_bento_books_bottom}>
                <div className={Styles.second_bento_books_bottom_button}>
                  Все книги <ArrowRight size={16} />
                </div>
              </div>
            </Bento.Item>
          </Bento>
        </Section>
      </Section>

      <Section>
        <Section sublevel={1}>
          <Badge inverted showIcon={false} text={'Скачайте'} />
        </Section>
        <Heading size={2} className={classNames(Styles.heading)}>
          Подарок за просмотр
        </Heading>


        {/* // TODO: */}
        <Section sublevel={1}>
          <Bento>

            <Bento.Item className={Styles.third_bento_framework}>
              <Bento.Header headingSize={4}>
                Как правильно выбрать тестирование?
              </Bento.Header>

              <Bento.Section className={CommonStyles.muted}>
                <div>Фреймворк (алгоритм) выбора типа тестирования. Вы можете предложить свои правки. Последнее обновление 15.09.2025</div>
              </Bento.Section>
            </Bento.Item>

            {/* <Bento.Item className={Styles.third_bento_ux_roadmap}>
              <Bento.Header headingSize={4}>
                Что нужно знать UX дизайнеру?
              </Bento.Header>

              <Bento.Section className={CommonStyles.muted}>
                <div>Подборка материалов в Obsidian, которые нужны в работе и понимании профессии UX дизайнера. Список пополняется. Последнее обновление 15.09.2025</div>
              </Bento.Section>
            </Bento.Item> */}

          </Bento>

        </Section>
      </Section>

      <Section>
        <Section sublevel={1}>
          <Badge inverted showIcon={false} text={'Контакты'} />
        </Section>
        <Heading size={2} className={classNames(Styles.heading)}>
          Поговорим о Ваших проектах?
        </Heading>

        <Section sublevel={1} className={CommonStyles.muted}>

          <Heading muted size={4} kind='thin' className={classNames(Styles.heading)}>
            Ищу команду с отработанными процессами исследований, тестирования и проектировки интерфейсов, <em>удалённую позицию</em> в продуктовой компании, использующую лучшие практики, чтобы применить и углубить экспертизу.<br />Давайте поговорим о Вашем продукте!
          </Heading>
        </Section>
        <Section sublevel={1}>
          <div className={Styles.links}>
            <Badge href='https://vk.com/indigosay' />
            <Badge href='https://t.me/Rumar1' />
            <Badge href='xreider@yandex.ru' />
            <Badge
              text="PDF"
              href="/https resume-ux-ui.vercel.app.pdf" // Путь к файлу в папке public
              download={true} // Указываем, что нужно скачать файл
            />
          </div>
        </Section>
      </Section>

      <PreloadImages />
    </>
  )
};



{/* <Bento.Item className={Styles.second_bento_ai} clickable>
                <Bento.Header headingSize={4}>
                  ИИ
                </Bento.Header>
                <Bento.Section className={Styles.second_bento_ai_section}>
                  <AnimatedBubble />
                </Bento.Section>
              </Bento.Item> */}

// TODO: Дизайн системы описать в бенто

// : веб-портал для крупного застройщика, интерфейс для терминала сбора данных промышленных предприятий на android, международный оператор доставки грузов, образовательная платформа для курсов кибер-безопасности, система контроля Remote Desktop Protocol соединений и другие


// <Section>
//   <Heading size={2} className={classNames(Styles.heading)}>
//     Опыт работы
//   </Heading>
//   <Section sublevel={2}>
//     <Heading muted size={3} kind='thin' className={classNames(Styles.heading)}>
//       Работаю в <ExternalLink href='https://www.rusprofile.ru/id/1237700454045'>ООО «4А»</ExternalLink> <em>{workDuration}</em>. За время работы:
//     </Heading>
//   </Section>
//   <Section sublevel={1} muted>
//     <ul className={CommonStyles.ulRightLine}>
//       <li>Спроектировал более <em>9 крупных многостраничных проектов</em></li>
//       <li>Работал с <em>дизайн-системами</em> Контур, Ant Design, Carbon Design System, PrimeVue и разрабатывал собственные UI-киты</li>
//       <li>Расширял <em>отдельные фичи</em> внутренних программ ООО «4А» в товароучётных системах</li>
//       {/* <li>Работал в <em>программах</em> Figma, ClickUp, Miro, Adobe Illustrator, Photoshop, After Effects, Blender</li>
//   <li>Работал с <em>ИИ</em>. Об этом далее в резюме</li>
//   <li><em>Изучал материалы</em> по UX UI как рекомендованные руководством, так и по своей инициативе</li>
//   <li>Прочитал <em>книгу</em> «Hooked. На крючке. Как создавать продукты, формирующие привычки», сейчас читаю «Дизайн привычных вещей», «Designing Virtual Worlds» Ричарда Бартла</li> */}
//     </ul>
//   </Section>
// </Section>
