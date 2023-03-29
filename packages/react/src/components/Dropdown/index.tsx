import { useCallback, useEffect, useRef, useState } from 'react';

type LengthUnit = 'px' | 'em' | 'rem' | '%';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  width?: `${number}${LengthUnit}`;
  value?: string | number | null | undefined;
  placeholder?: string;
  bgColor?: RGB | RGBA | HEX;
  color?: RGB | RGBA | HEX;
  children?: React.ReactNode;
};

const Dropdown = (props: Props) => {
  const {
    width = '120px',
    value,
    placeholder = '선택',
    bgColor = '#f1f3f5',
    color = '#000000',
    children,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen((prev) => !prev), []);
  const handleClick = useCallback(() => open && setOpen(false), [open]);

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (!ref.current || !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const keydownListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('click', clickListener);
    window.addEventListener('keydown', keydownListener);

    return () => {
      window.removeEventListener('click', clickListener);
      window.addEventListener('keydown', keydownListener);
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={handleClick}
      style={{
        position: 'relative',
        width: `${width}`,
      }}
    >
      <div
        onClick={handleOpen}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          padding: '7px 14px',
          border: 'none',
          backgroundColor: `${bgColor}`,
          color: `${color}`,
          cursor: 'pointer',
        }}
      >
        <span>{value ?? placeholder}</span>
        <i
          style={{
            display: 'inline-block',
            height: 'fit-content',
            padding: '3px',
            marginBottom: '3px',

            transform: `${open ? 'rotate(-135deg)' : 'rotate(45deg)'}`,
            transition: 'transform .3s',
            border: 'solid black',
            borderWidth: '0 2px 2px 0',
          }}
        ></i>
      </div>
      <ul
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxHeight: `${open ? '10000px' : '0'}`,
          overflow: 'hidden',
          margin: 0,
          padding: 0,

          backgroundColor: 'white',
          zIndex: '10',
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
