import React, { useCallback, useEffect, useRef, useState } from 'react';

type Placement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'left'
  | 'right'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';
type LengthUnit = 'px' | 'em' | 'rem' | '%';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  placement?: Placement;
  label?: string;
  fontSize?: `${number}${LengthUnit}`;
  bgColor?: RGB | RGBA | HEX;
  color?: RGB | RGBA | HEX;
  children?: React.ReactNode;
};

const Tooltip = (props: Props) => {
  const {
    placement = 'bottom-center',
    label = '',
    fontSize,
    bgColor = '#495057',
    color = '#ffffff',
    children,
  } = props;

  const childrenRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ top: 0, left: 0 });

  const [hover, setHover] = useState(true);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  useEffect(() => {
    if (!childrenRef.current || !targetRef.current) return;

    const GAP = 5;
    const { clientWidth: childrenWidth, clientHeight: childrenHeight } = childrenRef.current;
    const { clientWidth: targetWidth, clientHeight: targetHeight } = targetRef.current;

    const OFFSET_TABLE: { readonly [key in Placement]: { top: number; left: number } } = {
      'top-start': { top: -(targetHeight + GAP), left: 0 },
      'top-center': { top: -(targetHeight + GAP), left: (childrenWidth - targetWidth) / 2 },
      'top-end': { top: -(targetHeight + GAP), left: childrenWidth },
      left: { top: (childrenHeight - targetHeight) / 2, left: -(targetWidth + GAP) },
      right: { top: (childrenHeight - targetHeight) / 2, left: childrenWidth + GAP },
      'bottom-start': { top: childrenHeight + GAP, left: 0 },
      'bottom-center': { top: childrenHeight + GAP, left: (childrenWidth - targetWidth) / 2 },
      'bottom-end': { top: childrenHeight + GAP, left: childrenWidth },
    };

    setOffset(OFFSET_TABLE[placement] ?? { top: 0, left: 0 });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        ref={childrenRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 'fit-content',
        }}
      >
        {children}
        <div
          ref={targetRef}
          style={{
            position: 'absolute',
            top: `${offset.top}px`,
            left: `${offset.left}px`,
            padding: '8px 16px',

            opacity: `${hover ? '1' : '0'}`,
            transition: 'opacity .3s',
            fontSize: `${fontSize}`,
            backgroundColor: `${bgColor}`,
            color: `${color}`,
            zIndex: 10,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
