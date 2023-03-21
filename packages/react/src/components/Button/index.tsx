type Props = {
  children: React.ReactNode;
};

const Button = (props: Props) => {
  const { children } = props;

  return <button type="button">{children}</button>;
};

export default Button;
