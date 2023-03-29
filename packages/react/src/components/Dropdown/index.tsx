import { useCallback, useEffect, useRef, useState } from 'react';

type LengthUnit = 'px' | 'em' | 'rem' | '%';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  width?: `${number}${LengthUnit}`;
  placeholder?: string;
  defaultValue?: string;
  options: string[];
  bgColor?: RGB | RGBA | HEX;
  color?: RGB | RGBA | HEX;
  onChange: (value: string) => void;
};
/**
 * TODO : children으로 options 받아보기
 */
const Dropdown = (props: Props) => {
  const {
    width = '120px',
    placeholder = '선택',
    options,
    defaultValue,
    bgColor = '#f1f3f5',
    color = '#000000',
    onChange,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(defaultValue ?? null);

  const handleOpen = useCallback(() => setOpen((prev) => !prev), []);
  const handleClick = useCallback((value: string) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  }, []);

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
        <span>{selected ?? placeholder}</span>
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
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            style={{
              boxSizing: 'border-box',
              width: '100%',
              padding: '7px 14px',
              cursor: 'pointer',
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
