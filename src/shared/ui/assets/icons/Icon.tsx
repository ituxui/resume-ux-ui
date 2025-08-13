import classNames from 'classnames';

import {
  ArrowLeft,
  ArrowRight,
  Cake,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  Link,
  Loader2,
  Mail,
  MapPin,
  Plus,
  Printer,
  Send,
  Shield,
  SquareArrowOutUpRight,
  X,
} from 'lucide-react';

// Импорты для иконок VK и Telegram
import { default as VkSvg } from './soft/VkSvg.svg?react';
import { default as TelegramIcon } from './soft/TelegramIcon.svg?react';

import styles from './Icon.module.scss';
import type { IconTypes } from './iconTypes';


// Свойства компонента
export interface IconProps {
  type: IconTypes;
  className?: string;
  size?: 'lg' | 'md';
}

// Маппинг типов иконок на компоненты
const iconComponents = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  cake: Cake,
  calendar: Calendar,
  check: Check,
  'chevron-right': ChevronRight,
  clock: Clock,
  'graduation-cap': GraduationCap,
  heart: Heart,
  link: Link,
  'loader-2': Loader2,
  mail: Mail,
  'map-pin': MapPin,
  plus: Plus,
  printer: Printer,
  send: Send,
  shield: Shield,
  'square-arrow-out-up-right': SquareArrowOutUpRight,
  x: X,
  vk: VkSvg,
  telegram: TelegramIcon,
};

// Компонент иконки
export const Icon = ({ className, size = 'lg', type }: IconProps) => {
  const IconComponent = iconComponents[type];

  if (!IconComponent) {
    console.warn(`Icon with type "${type}" not found.`);
    return null;
  }

  return (
    <span className={classNames(styles.icon, styles[`size_${size}`], className)}>
      <IconComponent />
    </span>
  );
};
