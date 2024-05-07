interface InputLabel {
  text?: string | null;
  iconSrc?: string | null;
  styles?: string[];
  children?: React.ReactNode;
}

const InputLabel: React.FC<InputLabel> = (props) => {
  const { text, iconSrc, styles, children } = props;
  const classes: string | undefined = styles?.join(" ");
  return (
    <label htmlFor="" className={classes}>
      {text && text}
      {iconSrc && <img src={iconSrc} />}
      {children}
    </label>
  );
};

export default InputLabel;
