interface Props {
  text: string;
  btnClassName: string;
}

const Button = ({ text, btnClassName }: Props) => {
  return (
    <button type="button" className={`btn ${btnClassName}`}>
      {text}
    </button>
  );
};

export default Button;
