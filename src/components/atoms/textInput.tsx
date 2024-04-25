interface TextInputProps<S> {
  styles?: string[];
  onBlur: (ev: React.FocusEvent<HTMLInputElement>) => void;
  state?: S;
}

// What is generic types? How do we use it?
// (https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4)

const TextInput: React.FC<TextInputProps<string | undefined>> = (props) => {
  const { styles, onBlur, state } = props;
  const classes: string | undefined = styles?.join(", ");

  return <input type="text" onBlur={onBlur} className={classes} />;
};

export default TextInput;
