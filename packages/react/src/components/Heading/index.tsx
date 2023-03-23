type LengthUnit = 'px' | 'em' | 'rem' | '%';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: `${number}${LengthUnit}`;
  color?: RGB | RGBA | HEX;
  mt?: `${number}${LengthUnit}`;
  mr?: `${number}${LengthUnit}`;
  mb?: `${number}${LengthUnit}`;
  ml?: `${number}${LengthUnit}`;
  children?: React.ReactNode;
};

const Heading = (props: Props) => {
  const {
    as = 'h1',
    fontSize,
    color = '#000000',
    mt = '0px',
    ml = '0px',
    mb = '0px',
    mr = '0px',
    children,
  } = props;
  const CustomTag = as;

  return (
    <CustomTag
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
        margin: `${mt} ${mr} ${mb} ${ml}`,
      }}
    >
      {children}
    </CustomTag>
  );
};

export default Heading;
