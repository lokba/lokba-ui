type LengthUnit = 'px' | 'em' | 'rem' | '%';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  width?: `${number}${LengthUnit}`;
};

const InputField = (props: Props) => {
  const { id, label, width, ...rest } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        style={{
          width: `${width}`,
          padding: '0.725rem',
          border: '1px solid #bbbbbb',
          borderRadius: '5px',
        }}
        {...rest}
      />
    </div>
  );
};

export default InputField;
