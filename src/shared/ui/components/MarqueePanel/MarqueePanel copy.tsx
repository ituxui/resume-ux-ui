import { type FC, type ReactNode, memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import styles from './MarqueePanel.module.scss';

const cx = classNames.bind(styles);

interface MarqueePanelProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: string;
  speeds: number[];
}

export const MarqueePanel: FC<MarqueePanelProps> = memo(({
  children,
  direction = 'left',
  speeds,
  gradient = false,
  gradientColor,
  gradientWidth,
}) => {

  const isVertical = direction === 'up' || direction === 'down';

  const panelClassName = useMemo(
    () => cx('marquee-container', isVertical && 'vertical'),
    [isVertical]
  );

  const marqueeClassName = useMemo(
    () => cx('marquee', { vertical: isVertical }),
    [isVertical]
  );

  const panels = useMemo(() => (
    speeds.map((speed, index) => (
      <Marquee
        key={index}
        direction={direction}
        speed={speed}
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
        className={marqueeClassName}
      >
        {children}
      </Marquee>
    ))
  ), [
    speeds,
    direction,
    gradient,
    gradientColor,
    gradientWidth,
    marqueeClassName,
    children
  ]);

  return <div className={panelClassName}>{panels}</div>;
});

MarqueePanel.displayName = 'MarqueePanel';
