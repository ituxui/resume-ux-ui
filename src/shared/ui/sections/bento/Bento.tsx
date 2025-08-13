import React, {
  type HTMLAttributes,
  useRef,
  useState,
  useEffect
} from 'react';
import styles from './Bento.module.scss';
import { BentoItem } from './BentoItem';
import { BentoHeader } from './BentoHeader';
import classNames from 'classnames';
import { BentoCard } from './BentoCard';
import { BentoSection } from './BentoSection';

export type BentoItemSize = 1 | 2 | 3;

export type BentoProps = {
  children: React.ReactNode;
  areItemsClickable?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Bento: React.FC<BentoProps> & {
  Item: typeof BentoItem;
  Header: typeof BentoHeader;
  Card: typeof BentoCard;
  Section: typeof BentoSection;
} = ({ children, className, areItemsClickable, ...props }) => {
  const bentoRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Выходим из хука, если пропс areItemsClickable не передан
    if (!areItemsClickable) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Проверяем, что areItemsClickable передан и компонент виден
        if (areItemsClickable && entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const elements = Array.from(bentoRef.current?.children || []);

          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add(styles.hovered);

              setTimeout(() => {
                element.classList.remove(styles.hovered);
              }, 300);
            }, index * 200);
          });
        }

        // Сбрасываем состояние, если компонент полностью скрыт
        if (!entry.isIntersecting && hasAnimated) {
          setHasAnimated(false);
        }
      },
      {
        root: null,
        threshold: 0.5
      }
    );

    if (bentoRef.current) {
      observer.observe(bentoRef.current);
    }

    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current);
      }
    };
  }, [areItemsClickable, hasAnimated]); // Добавляем areItemsClickable в зависимости хука

  return (
    <div
      ref={bentoRef}
      className={classNames(styles['bento-body'], className)}
      {...props}
    >
      {children}
    </div>
  );
};

Bento.Item = BentoItem;
Bento.Header = BentoHeader;
Bento.Card = BentoCard;
Bento.Section = BentoSection;
