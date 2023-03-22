type LengthUnit = 'px' | 'em' | 'rem' | '%';

type Props = {
  size?: `${number}${LengthUnit}`;
};

const Spacing = (props: Props) => {
  const { size = '0px' } = props;

  return (
    <div
      style={{
        height: `${size}`,
      }}
    />
  );
};

export default Spacing;
