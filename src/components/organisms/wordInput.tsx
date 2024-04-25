import InputLabel from "../atoms/inputLabel";
import TextInput from "../atoms/textInput";

interface WordInput {
  wordText: string | undefined;
  onBlurFn: (ev: React.FocusEvent<HTMLInputElement>) => void;
}

const WordInput: React.FC<WordInput> = (props) => {
  const { wordText, onBlurFn } = props;
  return (
    <div>
      <InputLabel text={"Put word here"}>
        <TextInput state={wordText} onBlur={onBlurFn} />
      </InputLabel>
    </div>
  );
};

export default WordInput;
