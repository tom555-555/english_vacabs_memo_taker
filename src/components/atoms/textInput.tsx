interface TextInputProps {
  styles?: string[];
  onBlur: (ev: React.FocusEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  type?: string;
}

// What is generic types? How do we use it?
// (https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4)

const TextInput: React.FC<TextInputProps> = (props) => {
  const { styles, onBlur, placeHolder, type } = props;
  const classes: string | undefined = styles?.join(", ");

  return <input type={type || "text"} onBlur={onBlur} className={classes} placeholder={placeHolder} />;
};

export default TextInput;
