type LengthUnit = 'px' | 'em' | 'rem' | '%';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  width?: `${number}${LengthUnit}`;
  height?: `${number}${LengthUnit}`;
  direction?: 'horizontal' | 'vertical';
  size?: `${number}${LengthUnit}`;
  color?: RGB | RGBA | HEX;
};

const Divider = (props: Props) => {
  const { width, height, direction = 'horizontal', size = '0px', color = '#DBDBDB' } = props;

  const defaultWidth = direction === 'horizontal' ? '100%' : '1px';
  const defaultHeight = direction === 'horizontal' ? '1px' : '1em';

  return (
    <hr
      style={{
        display: 'inline-block',
        width: `${width ?? defaultWidth}`,
        height: `${height ?? defaultHeight}`,
        margin: `${direction === 'horizontal' ? `${size} 0` : `0 ${size}`}`,

        border: 'none',
        backgroundColor: `${color}`,
        verticalAlign: `${direction === 'horizontal' ? 'baseline' : 'middle'}`,
      }}
    />
  );
};

export default Divider;
