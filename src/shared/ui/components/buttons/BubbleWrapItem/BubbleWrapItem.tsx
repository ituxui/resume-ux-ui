import React, { useState } from 'react';
import classNames from 'classnames';
import {
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  safePolygon,
  FloatingPortal,
  FloatingArrow,
  arrow,
  offset,
  shift,
} from '@floating-ui/react';
import styles from './BubbleWrapItem.module.scss';

interface BubbleWrapItemProps {
  children: React.ReactNode;
  color?: string;
  tooltipText?: string | React.ReactNode;
  hasMargin?: boolean;
  fullSizeIcon?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  url: string;
}

export const BubbleWrapItem: React.FC<BubbleWrapItemProps> = ({
  children,
  color = '#ffffff',
  tooltipText,
  hasMargin = true,
  fullSizeIcon = false,
  placement = 'top',
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isHovered,
    onOpenChange: setIsHovered,
    placement,
    middleware: [
      offset({
        mainAxis: 24, // Offset from the main axis
      }),
      shift({
        padding: 16, // Padding from screen edges
      }),

      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const hasTooltip = !!tooltipText;
  const showAnimation = hasTooltip;

  const containerClasses = classNames(styles.brandIconContainer, {
    [styles.shaking]: showAnimation,
  });

  return (
    <>
      <a
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classNames(
          containerClasses,
          hasMargin && styles.hasMargin,
          fullSizeIcon && styles.fullSizeIcon,
        )}
        style={{ backgroundColor: color }}
        href={url}
        target="_blank" // Always open in a new tab
        rel="noopener noreferrer" // Important for security when using target="_blank"
      >
        {children}
      </a>

      {isHovered && hasTooltip && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles }}
            {...getFloatingProps()}
            className={classNames(styles.tooltip, 'invert-mode')}
          >
            {tooltipText}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill="black"
              className={styles.tooltipArrow}
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};
